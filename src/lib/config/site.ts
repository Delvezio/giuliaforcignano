import ambiti from '$lib/content/ambiti.json';

export const site = {
	name: 'Giulia Forcignanò',
	title: 'Psicologa a Torino | Dott.ssa Giulia Forcignanò',
	description:
		'Psicologa a Torino e online. Consulenza e sostegno psicologico per adolescenti e adulti: ansia, stress, relazioni, momenti di difficoltà.',
	url: 'https://giuliaforcignano.it',
	ogImage: '/og-default.svg',
	locale: 'it_IT'
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
		description: site.description
	},
	'/about': {
		title: 'Chi sono | Giulia Forcignanò, psicologa a Torino',
		description:
			'Psicologa a Torino, mi occupo di adulti e adolescenti con un approccio basato sull’Analisi Transazionale. Sedute in studio e online.'
	},
	'/method': {
		title: 'Il mio metodo: Analisi Transazionale | Giulia Forcignanò',
		description:
			'Come lavoro: obiettivi condivisi, ascolto dei meccanismi interiori e delle relazioni. Il percorso psicologico secondo l’Analisi Transazionale.'
	},
	'/services': {
		title: 'Aree di intervento | Giulia Forcignanò, psicologa',
		description:
			'Ansia, stress, depressione, trauma, difficoltà relazionali e lavorative: percorsi personalizzati per adolescenti e adulti, a Torino e online.',
		noindex: true
	},
	'/contact': {
		title: 'Contatti | Giulia Forcignanò, psicologa a Torino',
		description:
			'Scrivimi o chiamami per fissare un appuntamento, in studio a Torino in Corso Moncalieri 266 oppure online. Rispondo entro 24 ore lavorative.',
		noindex: true
	},
	'/ambiti': {
		title: 'Ambiti di intervento | Psicologa a Torino | Giulia Forcignanò',
		description:
			'Ansia, stress, difficoltà lavorative, depressione, genitorialità e altri ambiti di sostegno psicologico. Scopri come lavora Giulia Forcignanò a Torino e online.'
	},
	...Object.fromEntries(
		ambiti.map((ambito) => [
			`/ambiti/${ambito.slug}`,
			{ title: ambito.seoTitle, description: ambito.seoDescription }
		])
	),
	'/iniziare-un-percorso': {
		title: 'Il primo colloquio con una psicologa | Torino | Giulia Forcignanò',
		description:
			'Come funziona il primo incontro con Giulia Forcignanò: cosa aspettarsi, cosa raccontare, sedute in studio a Torino oppure online.'
	},
	'/da-dove-iniziare': {
		title: 'Da dove iniziare | Psicologa Torino | Giulia Forcignanò',
		description:
			'Un breve percorso non diagnostico per orientarti tra i contenuti e capire da dove iniziare un percorso psicologico con Giulia Forcignanò.'
	},
	'/contatti': {
		title: 'Contatti | Psicologa Torino | Giulia Forcignanò',
		description:
			'Contatta Giulia Forcignanò, psicologa a Torino. Studio in Corso Moncalieri 266 e disponibilità per colloqui online.'
	},
	'/privacy': {
		title: 'Informativa Privacy | Giulia Forcignanò',
		description: 'Come vengono trattati i dati personali raccolti tramite questo sito.'
	},
	'/cookies': {
		title: 'Cookie e statistiche | Giulia Forcignanò',
		description: 'Come vengono misurate le visite senza cookie tramite Vercel Web Analytics.'
	},
	'/thank-you': {
		title: 'Messaggio inviato | Giulia Forcignanò',
		description: 'Grazie per avermi scritto: ti rispondo al più presto.',
		noindex: true
	},
	'/ui': {
		title: 'Catalogo UI | Giulia Forcignanò',
		description: 'Catalogo interno dei componenti e degli elementi grafici del sito.',
		noindex: true
	}
};
