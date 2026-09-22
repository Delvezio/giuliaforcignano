import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';
import { pageMeta, site } from '$lib/config/site';

if (!dev) {
  injectAnalytics({
    beforeSend(event) {
      // Misuriamo solo pagine pubbliche del dominio principale, senza query o frammenti.
      if (event.type !== 'pageview') return null;

      const url = new URL(event.url, site.url);
      const pathname = url.pathname.replace(/\/+$/, '') || '/';
      if (url.origin !== site.url || !pageMeta[pathname] || pageMeta[pathname].noindex) {
        return null;
      }

      return { ...event, url: `${site.url}${pathname}` };
    },
  });
}
