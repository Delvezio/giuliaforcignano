<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import PageHeader from '$lib/components/sections/PageHeader.svelte';
  import StickyAside from '$lib/components/sections/StickyAside.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
	import SectionHeader from '$lib/components/sections/SectionHeader.svelte';

  export let secondaryVariant: 'outline' | 'soft' = 'outline';

  type Service = {
    title: string;
    image?: string;
    text?: string;
    // NEW: contenuto ricco per la modale
    modalHtml?: string;
    // opzionale: fallback testuale se non usi html
    modalDescription?: string;
  };
  export let services: Service[] = [
    {
      title: 'In Studio',
      image: '/img/icon/Therapy-Counseling.png',
      text: '',
      modalHtml: `
      <h3>Cosa faremo insieme</h3>
      <p>In studio ti accompagno in uno spazio protetto e senza distrazioni, dove lavorare con calma su ansia, pensieri e corpo, passo dopo passo.</p>

      <h4>Vantaggi</h4>
      <ul>
        <li>Maggiore senso di “stacco” dalla routine: entri in modalità lavoro su di te.</li>
        <li>Contatto umano diretto: spesso facilita fiducia, ascolto e continuità.</li>
        <li>Esperienza più “corporea”: utile se l’ansia si manifesta soprattutto con sintomi fisici.</li>
      </ul>
    `,
    },
    {
      title: 'Sedute Online',
      image: '/img/icon/hello.svg',
      text: '',
      modalHtml: `
      <h3>Cosa faremo insieme</h3>
      <p>Online lavoriamo con la stessa struttura e profondità, ma con più flessibilità: puoi collegarti da casa o da dove ti senti più a tuo agio.</p>

      <p>Per viverla al meglio, ti consiglio di scegliere un luogo tranquillo, usare le cuffie se puoi e assicurarti un po’ di privacy: sentirti al sicuro e non interrotto/a favorisce la calma e ti permette di aprirti con più libertà.</p>
      <h4>Vantaggi</h4>
      <ul>
        <li>Comodità e risparmio di tempo: niente spostamenti, più facile essere costanti.</li>
        <li>Accessibile ovunque: ideale se viaggi, vivi lontano o hai orari complicati.</li>
        <li>Più comfort emotivo: partire da un luogo familiare può rendere più semplice aprirti.</li>
      </ul>
      
    `,
    }
    ];
</script>

<PageHeader
  panel
  panelBg="bg-accent2-50"
  panelPaddingHeight="[--ph-min:20rem] min-h-[var(--ph-min)]"
  eyebrow="Il mio metodo"
  intro=" "
>
  <svelte:fragment slot="title">
    <span class="block">Analisi <em class="italic">transazionale</em>:</span>
    <span class="block">cos'è e come <em class="italic">funziona</em></span>
  </svelte:fragment>
  <svelte:fragment slot="intro">
    <span class="block">Conoscersi davvero è un gesto di coraggio.</span>
    <span class="block">Non è necessario farlo da soli.</span>
  </svelte:fragment>
</PageHeader>

<!-- Contenuto con aside sticky -->
<StickyAside side="left" stickyTop="top-24" gap="gap-8 md:gap-12">
  <!-- ASIDE (sticky) -->
  <svelte:fragment slot="aside">
    <Card padding="lg" bg="white" className="space-y-4">
      <svelte:fragment slot="media">
        <img
          src="/img/photo/giulia-forcignano-chiama-ora-long.jpg"
          alt="Ritratto"
          class="block w-full aspect-[4/3] object-cover"
        />
      </svelte:fragment>

      <Heading level={4}>Hai bisogno di aiuto ora?</Heading>
      <Paragraph className="text-ink/80 my-5">
        Chiamami per fissare un appuntamento o per avere maggiori informazioni.
      </Paragraph>
      <Button variant="solid" color="accent1" href="/contact">Chiama ora</Button>
    </Card>
  </svelte:fragment>

  <!-- CONTENT (2/3) -->
  <article class="prose prose-neutral max-w-none">
    <Heading level={2} className="mb-10">Il Metodo in pratica.</Heading>
    

    <Paragraph>
      Il mio lavoro si fonda sull’Analisi Transazionale, un approccio che dà grande importanza al dialogo interno e alle modalità relazionali che ognuno di noi mette in atto. È questo orientamento che ci aiuterà a comprendere meglio come pensi, senti e agisci sia nel rapporto con te stesso, sia nelle relazioni con gli altri. 
    </Paragraph>
    
    <Paragraph variant="lead">
      Cosa significa “transazionale”?
    </Paragraph>

    <Paragraph>
      La parola transazionale si riferisce agli scambi comunicativi — le “transazioni” — che avvengono ogni volta che entriamo in relazione con noi stessi o con gli altri. L’Analisi Transazionale aiuta a osservare questi scambi, capire dove sono nati e come influenzano il nostro modo di vivere le relazioni.
    </Paragraph>


    <Paragraph variant="lead">
      Come si sviluppa il percorso terapeutico?
    </Paragraph>

    <Paragraph >
      Stabiliremo obiettivi condivisi: traguardi chiari, su misura per te. Questo sarà il punto di partenza per un percorso che costruiremo passo dopo passo, nel rispetto dei tuoi tempi e della tua storia.
Insieme esploreremo i meccanismi interiori che ti guidano, le emozioni che vivi e il modo in cui comunichi. Imparerai a riconoscere gli schemi ripetitivi che si attivano in automatico, così da poter scegliere, con più consapevolezza, come agire e come stare nelle relazioni.
    </Paragraph>

    <Paragraph variant="lead">
      Non lavoreremo per “correggere” chi sei, ma per portare consapevolezza su ciò che ti guida interiormente, così da poter fare scelte più libere e adeguate ai tuoi reali bisogni e a chi sei oggi.
    </Paragraph>
    
  </article>
</StickyAside>

<Section className="py-12 md:py-16">
  <Container>
    <SectionHeader
      eyebrow="Come ci vediamo"
      title="In studio o sedute online?"
      intro="Puoi iniziare il tuo percorso in uno dei miei studi oppure comodamente da casa."
    />
    <div class="w-full flex justify-center">
      <div class="mx-auto inline-flex flex-wrap items-stretch justify-center gap-6 
                sm:max-w-[20rem] md:max-w-[42rem] lg:max-w-[64rem]">
        {#each services as s}
          <div class="basis-[20rem] shrink-0 shrink-0 w-[20rem]">
            <ServiceCard
              title={s.title}
              image={s.image}
              text={s.text}
              modalDescription={s.modalDescription}
              modalHtml={s.modalHtml}
            />
          </div>
        {/each}
      </div>
    </div>
  </Container>
</Section>

<!-- CTA finale 
<Section>
  <Container>
    <Card bg="glass" padding="lg" className="max-w-3xl mx-auto ">
      <Heading level={2} align="center" className="mb-8">Se sei qui, stai già compiendo un primo passo importante</Heading>
      <Paragraph variant="lead" align="center" className="mb-10">
        <span class="block">Quello di cercare uno spazio per te,</span> 
        <span class="block">dove conoscerti e capire chi sei.</span>
      </Paragraph>
      <div class="flex flex-wrap justify-center gap-3">
        <Button variant="solid" color="accent1" href="/contact">Chiama ora</Button>
        <Button variant={secondaryVariant} color="accent1" href="/contact">Scrivimi</Button>
      </div>
    </Card>
  </Container>
</Section> -->

<SectionHeader
  title="Se sei qui, stai già compiendo "
  titleAccent="un primo passo importante"
  intro="Quello di cercare uno spazio per te, dove conoscerti e capire chi sei."
  iconSrc="/img/icon/hot-air-balloon.svg"
  iconAlt="Mongolfiera"
  iconFloat={true}
  iconFloatDistance="8px"
  iconFloatDuration="2.5s"
  primaryHref="tel:+393403783231"
  primaryLabel="Chiamami ora"
  bg="accent2"
  secondaryHref="mailto:info@giuliaforcignano.it"
  secondaryLabel="Scrivimi"
/>


