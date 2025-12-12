export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  content: string;
};

export const posts: Post[] = [
  {
    slug: 'benvenuto',
    title: 'Benvenuto nel blog',
    excerpt: 'Cosa troverai qui: aggiornamenti, storie e idee dal progetto.',
    date: '2025-01-10',
    content: `Questo è un primo post di esempio. Potrai in seguito passare a mdsvex o ad un CMS headless.`
  },
  {
    slug: 'colori-e-stile',
    title: 'Colori & Stile',
    excerpt: 'La palette pastello e come usarla con il design system.',
    date: '2025-01-12',
    content: `Parliamo della palette: accent1 (brand), rosa, lilla, azzurro e ocra con scale 50→900.`
  }
];
