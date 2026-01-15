import { fail, redirect } from '@sveltejs/kit';

const MIN_TIME_MS = 3000; // min 3s tra render e submit

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    // 0) Honeypot
    if ((data.get('website') as string)?.trim()) {
      return { ok: true }; // zitti zitti: non diamo segnali ai bot
    }

    // 1) Time-gate (timestamp messo nel form)
    const ts = Number(data.get('ts') || 0);
    const now = Date.now();
    if (!ts || now - ts < MIN_TIME_MS) {
      return fail(429, { ok: false, error: 'Invio troppo rapido' });
    }

    // 2) Campi
    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    if (!name || !email || !message) {
      return fail(400, { ok: false, error: 'Campi obbligatori mancanti' });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return fail(400, { ok: false, error: 'Email non valida' });
    }

    // 3) Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const MAIL_FROM = process.env.MAIL_FROM; // es: 'Contatti <contatti@tuodominio.com>'
    const MAIL_TO = process.env.MAIL_TO;     // es: 'info@giuliaforcignano.it'

    if (!RESEND_API_KEY || !MAIL_FROM || !MAIL_TO) {
      console.error('Missing env for Resend');
      return fail(500, { ok: false, error: 'Configurazione email mancante' });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: MAIL_FROM,
        to: MAIL_TO,
        subject: `Nuovo contatto dal sito – ${name}`,
        reply_to: email,
        text: `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`
      })
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return fail(500, { ok: false, error: 'Invio non riuscito' });
    }

    throw redirect(303, '/thank-you');
  }
};

