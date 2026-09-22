import { error } from '@sveltejs/kit';
import ambiti from '$lib/content/ambiti.json';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const ambito = ambiti.find((item) => item.slug === params.slug);
	if (!ambito) error(404, 'Ambito non trovato');
	return { ambito };
};
