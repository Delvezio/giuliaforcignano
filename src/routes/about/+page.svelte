<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import PageHeader from '$lib/components/sections/PageHeader.svelte';
  import StickyAside from '$lib/components/sections/StickyAside.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';

	import SectionHeader from '$lib/components/sections/SectionHeader.svelte';

  export let secondaryVariant: 'outline' | 'soft' = 'outline';
</script>

<PageHeader
  panel
  panelBg="bg-accent2-50"
  image
  imageSide="right"
  imageSrc="/img/photo/giulia-forcignano-psicologa-6.jpg"
  imageAlt="Lo studio"
  eyebrow="Studio"
  title="Nel momento in cui scegli di ascoltarti, io sono qui per accoglierti."
  intro="Conoscersi davvero è un gesto di coraggio. Non è necessario farlo da soli."
/>

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
    <Heading level={2} className="mb-10">Sono Giulia Forcignanò, psicologa.</Heading>
    

    <Paragraph>
      Il mio approccio si fonda sull’<strong>Analisi Transazionale</strong>. Un orientamento che aiuta a migliorare la qualità della vita attraverso una maggiore consapevolezza del proprio modo di pensare, sentire e agire, sia nel rapporto con sé stessi che nelle relazioni interpersonali.
    </Paragraph>
    
    <Paragraph variant="lead">
      Accompagno adulti e adolescenti in percorsi di conoscenza di sé, per affrontare con maggiore consapevolezza le difficoltà personali legate al proprio io e alle relazioni con gli altri.
    </Paragraph>

    <Paragraph>
      Credo nel potere della relazione terapeutica come spazio sicuro in cui osservare insieme, con delicatezza e rispetto, ciò che accade dentro di noi.
    </Paragraph>


    <Paragraph variant="lead">
       Ho aiutato persone con disturbi di personalità, attacchi di panico, disabilità cognitive e difficoltà relazionali, così come chi sta vivendo periodi di ansia, stress o depressione, affronta sfide legate al lavoro o alla genitorialità. 
    </Paragraph>

    <Paragraph >
      Il mio percorso professionale mi ha insegnato che non esiste un solo modo per stare meglio, ma che ogni persona ha bisogno del proprio tempo, delle proprie parole, della propria storia, e che tutti ci portiamo dentro dinamiche profonde che ci condizionano: talvolta senza accorgercene o senza gli strumenti per affrontarle. Il mio ruolo è aiutarti a riconoscerle, accoglierle e, quando è necessario, superarle.
    </Paragraph>

    <Heading level={3} className="mt-8">Istruzione & Formazione</Heading>
    <ul class="list-disc pl-5">
      <li>
        <Heading level={5}>Iscrizione ITAT</Heading>
        <Paragraph><em>Istituto Torinese di Analisi Transazionale</em> - Scuola di Specializzazione in Psicoterapia</Paragraph>
      </li>
      <li>
        <Heading level={5}>Università degli Studi di Torino</Heading>
        <Paragraph><em>Laurea Specialistica in Psicologia del Lavoro e del Benessere nelle Organizzazioni</em> - Luglio 2018</Paragraph>
        <Paragraph><em>Laurea Triennale in Scienze e Tecniche Psicologiche</em> - Marzo 2016</Paragraph>
      </li>
    </ul>

    <Heading level={3} className="mb-8">Il metodo</Heading>
    <p>
      Il mio approccio si fonda sull’Analisi Transazionale, un approccio che dà grande importanza al dialogo interno e alle modalità relazionali che ognuno di noi mette in atto.
    </p>
    <Button variant="outline" color="accent1" href="/method">Scopri di più sul metodo</Button>
  </article>
</StickyAside>


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

