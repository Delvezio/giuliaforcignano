export const site = {
  name: 'Giulia Forcignanò',
  title: 'Psicologa a Torino | Dott.ssa Giulia Forcignanò',
  description:
    'Psicologa a Torino e online. Consulenza e sostegno psicologico per adolescenti e adulti: ansia, stress, relazioni, momenti di difficoltà.',
  url: 'https://giuliaforcignano.it',
  ogImage: '/og-default.svg',
  locale: 'it_IT',
};

export type PageMeta = {
  title: string;
  description: string;
  noindex?: boolean;
};

/** Meta per pagina: la chiave è il pathname senza slash finale. */
export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: site.title,
    description: site.description,
  },
  '/about': {
    title: 'Chi sono | Giulia Forcignanò, psicologa a Torino',
    description:
      'Psicologa a Torino, mi occupo di adulti e adolescenti con un approccio basato sull’Analisi Transazionale. Sedute in studio e online.',
  },
  '/method': {
    title: 'Il mio metodo: Analisi Transazionale | Giulia Forcignanò',
    description:
      'Come lavoro: obiettivi condivisi, ascolto dei meccanismi interiori e delle relazioni. Il percorso terapeutico secondo l’Analisi Transazionale.',
  },
  '/services': {
    title: 'Aree di intervento | Giulia Forcignanò, psicologa',
    description:
      'Ansia, stress, depressione, trauma, difficoltà relazionali e lavorative: percorsi personalizzati per adolescenti e adulti, a Torino e online.',
  },
  '/contact': {
    title: 'Contatti | Giulia Forcignanò, psicologa a Torino',
    description:
      'Scrivimi o chiamami per fissare un appuntamento, in studio a Torino in Corso Moncalieri 266 oppure online. Rispondo entro 24 ore lavorative.',
  },
  '/privacy': {
    title: 'Informativa Privacy | Giulia Forcignanò',
    description: 'Come vengono trattati i dati personali raccolti tramite questo sito.',
  },
  '/cookies': {
    title: 'Cookie e statistiche | Giulia Forcignanò',
    description: 'Come vengono misurate le visite senza cookie tramite Vercel Web Analytics.',
  },
  '/thank-you': {
    title: 'Messaggio inviato | Giulia Forcignanò',
    description: 'Grazie per avermi scritto: ti rispondo al più presto.',
    noindex: true,
  },
};
