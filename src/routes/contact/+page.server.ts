import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    // Honeypot
    if ((data.get('website') as string)?.trim()) {
      return fail(400, { ok: false, error: 'Bot detected' });
    }

    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    if (!name || !email || !message) {
      return fail(400, { ok: false, error: 'Campi obbligatori mancanti' });
    }

    // TODO: integra invio (es. SMTP / Formspree / API) — per ora log.
    console.log('[contact] new message:', { name, email, message });

    // Redirect “grazie”
    throw redirect(303, '/thank-you');
  }
};
