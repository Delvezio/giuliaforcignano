<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import SectionHeader from '$lib/components/sections/SectionHeader.svelte';
  import ServiceCard from '$lib/components/ui/ServiceCard.svelte';

  // Tipi: niente `export` qui
  type Faq = { q: string; a: string };
  type Service = {
    title: string;
    image?: string;
    text?: string;
    // NEW: contenuto ricco per la modale
    modalHtml?: string;
    // opzionale: fallback testuale se non usi html
    modalDescription?: string;
  };

  /** Titolo/intro della sezione */
  export let eyebrow: string | undefined = undefined;
  export let title: string = 'Servizi';
  export let intro: string = 'Un percorso che unisce ascolto, metodo e continuità: scegli la modalità più adatta a te.';

  /** Lista servizi (override possibile via prop) */
  export let services: Service[] = [
    {
      title: 'Disturbi da Ansia',
      image: '/img/service/ansia.svg',
      text: '',
      modalHtml: `
      <h3>Di cosa si tratta?</h3>
      <p>Il disturbo d'ansia è una condizione caratterizzata da un'eccessiva preoccupazione e da un'apprensione persistente, sproporzionate rispetto alla realtà, che interferiscono con la vita quotidiana. Può manifestarsi con sintomi mentali (nervosismo, irritabilità) e, talvolta, fisici (tremore, difficoltà respiratorie, palpitazioni).</p>
      <p>Comprende varie forme, come il Disturbo d'Ansia Generalizzato (DAG), il Disturbo di Panico o diverse fobie. Tra queste, l'Ansia Sociale — la paura intensa di essere giudicati o umiliati in situazioni sociali — oppure l'Ansia da Separazione, che si manifesta nel distacco da figure di attaccamento, comune nei bambini ma presente anche negli adulti.</p>
      <h4>Ti capita di...</h4>
      <ul>
        <li>Sentirti sempre in allerta, anche quando non c’è alcun pericolo reale?</li>
        <li>Avere preoccupazioni che girano in loop e non riesci a fermare?</li>
        <li>Evitare situazioni per paura di non riuscire a gestirle?</li>
      </ul>

      <p>Se ti riconosci in queste sensazioni, possiamo lavorarci insieme. Esistono strumenti concreti per comprendere l’ansia e affrontarla nel modo più adatto a te.</p>
    `,
    },
    {
      title: 'Lavoro',
      image: '/img/service/lavoro.svg',
      text: '',
      modalHtml: `
      <h3>Di cosa si tratta?</h3>
      <p>Stress lavorativo, burn-out, mobbing, difficoltà relazionali nei contesti professionali, riorientamento, insicurezza professionale.</p>
      <p>Il lavoro influisce profondamente sulla qualità della vita: può essere fonte di realizzazione ma anche di stress, pressione e dubbi. Ti accompagno a esplorare ciò che ostacola il tuo benessere professionale e a costruire modalità più funzionali di affrontare le sfide.Insieme costruiamo consapevolezza, strategie pratiche e un piano d’azione che ti aiuti a ritrovare equilibrio, soddisfazione e fiducia nel contesto lavorativo.</p>
      <h4>Ti capita di...</h4>
      <ul>
        <li>Ti capita di sentirti in ansia quando pensi al tuo lavoro?</li>
        <li>Senti di non essere all’altezza sul luogo di lavoro?</li>
        <li>Senti che i tuoi colleghi o il tuo capo ti trattano ingiustamente?</li>
      </ul>

      <p>Comprendere queste dinamiche può aprire nuove possibilità di equilibrio, autenticità e libertà sul luogo di lavoro e nelle relazioni con i colleghi.</p>
    `,
      
    },
    {
      title: 'Depressione',
      image: '/img/service/depressione.svg',
      text: '',
      modalHtml: `
      <h3>Di cosa si tratta?</h3>
      <p>La depressione è un disturbo dell’umore caratterizzato da una profonda e persistente tristezza, perdita di interesse o piacere per le attività quotidiane, un calo significativo dell’energia, del desiderio e del piacere sessuale. Può influenzare il pensiero, il comportamento, il sonno, l'appetito e la percezione di sé. I sintomi possono variare da lievi a gravi, e interferire con il funzionamento personale, sociale e lavorativo.</p>
      <p>La depressione non è segno di debolezza, e non è qualcosa che si “supera” semplicemente con la forza di volontà.</p>
      <h4>Ti capita di...</h4>
      <ul>
        <li>Sentirti spesso svuotato/a, affaticato/a o senza energia?</li>
        <li>Perdere totalmente l'interesse in qualsiasi attività?</li>
        <li>Provare senso di colpa, autosvalutazione o pensieri negativi ricorrenti?</li>
      </ul>

      <p>Se ti riconosci in questi vissuti, parlarne può essere il primo passo per ritrovare uno spazio di respiro e ristabilire equilibrio e fiducia in te stesso/a.</p>
    `,
    },
    {
      title: 'Elaborazione del Trauma',
      image: '/img/service/trauma.svg',
      text: '',
      modalHtml: `
      <h3>Di cosa si tratta?</h3>
      <p>Un evento traumatico può lasciare tracce profonde e durature nella psiche, anche molto tempo dopo il suo verificarsi. Il trauma psicologico può derivare da esperienze come incidenti, maltrattamenti, violenze, lutti, trascuratezza, malattie o situazioni percepite come schiaccianti e fuori controllo.</p>
      <p>Quando un trauma non viene elaborato, può manifestarsi con sintomi come iperattivazione, evitamento, flashback, difficoltà nel regolare le emozioni, senso di colpa, disconnessione da sé o dagli altri. Può condizionare profondamente il modo in cui si percepisce il presente, anche in assenza di pericoli reali.</p>
      <h4>Ti capita di...</h4>
      <ul>
        <li>Rivivere mentalmente un evento passato, come se stesse accadendo di nuovo?</li>
        <li>Sentirti in allerta costante, anche in situazioni sicure?</li>
        <li>Evitare luoghi, persone o situazioni che ti riportano a quel ricordo?</li>
      </ul>

      <p>Parlare di ciò che hai vissuto, in un contesto sicuro e non giudicante, può aiutarti a comprendere e alleggerire il peso del trauma.</p>
    `,
    },
    {
      title: 'Disturbi da Stress',
      image: '/img/service/meditation-yaga.svg',
      text: '',
      modalHtml: `
      <h3>Di cosa si tratta?</h3>
      <p>Capita a tutti, in certi periodi, di sentirsi sotto pressione. Ma quando lo stress diventa troppo intenso o dura troppo a lungo, può iniziare a pesare in modo significativo sulla salute mentale ed emotiva. Il corpo e la mente restano in uno stato di allerta continuo.</p>
      <p>Alcune situazioni particolarmente difficili — come traumi, lutti, cambiamenti improvvisi o ambienti costantemente pressanti — possono scatenare forme di disagio più profonde.</p>
      <p>Sintomi come irritabilità, tensione costante, insonnia, difficoltà di concentrazione possono essere segnali da non trascurare.</p>
      <h4>Ti capita di...</h4>
      <ul>
        <li>Sentire il corpo sempre teso, anche quando non c’è un motivo evidente?</li>
        <li>Avere difficoltà a dormire o a “staccare” la mente, anche quando vorresti riposare?</li>
        <li>Reagire con irritazione, rabbia o chiusura in situazioni che prima riuscivi a gestire meglio?</li>
        <li>Provare un senso di allerta costante o sentirti sempre “sul filo”?</li>
      </ul>

      <p>Se lo stress sta occupando troppo spazio nella tua vita, possiamo esplorarne insieme le cause e trovare modalità più sane per affrontarlo.</p>
    `,
    },
    {
      title: 'Disturbi di personalità',
      image: '/img/service/asking-question.svg',
      text: '',
      modalHtml: `
      <h3>Di cosa si tratta?</h3>
      <p>I disturbi di personalità sono modalità stabili e pervasive di percepire sé stessi, gli altri e il mondo, che si discostano in modo marcato dalle aspettative culturali e che compromettono il funzionamento personale, relazionale o sociale. Non si tratta di semplici tratti caratteriali, ma di schemi profondamente radicati che influenzano il modo di pensare, sentire, comportarsi e relazionarsi.</p>
      <p>Spesso si manifestano con instabilità emotiva, difficoltà nella gestione delle relazioni, pensieri rigidi, paura dell’abbandono o una percezione alterata di sé e degli altri.</p>
      <h4>Ti capita di...</h4>
      <ul>
        <li>Avere relazioni intense ma instabili, segnate da forti alti e bassi?</li>
        <li>Sentirti spesso “sbagliato/a” o non adeguato/a, anche in situazioni quotidiane?</li>
        <li>Faticare a regolare le emozioni o avere reazioni impulsive che poi fatichi a spiegarti?</li>
        <li>Sentire che certi tuoi modi di essere ti portano a ripetere sempre gli stessi schemi, anche quando vorresti cambiare?</li>
      </ul>

      <p>Comprendere queste dinamiche può aprire nuove possibilità di equilibrio, autenticità e libertà nelle relazioni con sé stessi e con gli altri.</p>
    `,
    },
    {
      title: 'Disturbi Alimentari',
      image: '/img/service/fast-food.svg',
      text: '',
      modalHtml: `
      <h3>Di cosa si tratta?</h3>
      <p>I disturbi alimentari sono condizioni complesse che coinvolgono una relazione disfunzionale con il cibo, il corpo e il controllo. Possono manifestarsi con comportamenti restrittivi, abbuffate, condotte di eliminazione o esercizio fisico eccessivo, spesso accompagnati da un’immagine corporea distorta e da un’elevata sofferenza emotiva.</p>
      <p>Tra i principali disturbi alimentari si trovano l’Anoressia Nervosa, la Bulimia Nervosa e il Disturbo da Alimentazione Incontrollata (BED). Oltre agli aspetti comportamentali, queste condizioni sono spesso legate a emozioni profonde come senso di colpa, vergogna, bisogno di controllo o difficoltà nell’esprimere il disagio in altri modi.</p>
      <h4>Ti capita di...</h4>
      <ul>
        <li>Avere un pensiero costante legato al cibo, al peso o al tuo corpo?</li>
        <li>Sentire un forte senso di colpa dopo aver mangiato, anche in piccole quantità?</li>
        <li>Usare il cibo come modo per calmarti, punirti o distrarti da un’emozione difficile?</li>
        <li>Sentire che il tuo rapporto con il cibo ti sta condizionando più di quanto vorresti?</li>
      </ul>

      <p>Dietro al cibo ci sono spesso vissuti profondi. Possiamo esplorarli insieme, con rispetto e senza giudizio.</p>
    `,
    },
    {
      title: 'Sostegno alla genitorialità',
      image: '/img/service/having-fun.svg',
      text: '',
      modalHtml: `
      <h3>Di cosa si tratta?</h3>
      <p>Essere genitori è una delle esperienze più profonde, ma anche tra le più complesse. Ogni fase della crescita porta con sé nuove sfide, emozioni contrastanti e spesso domande difficili: “Sto facendo abbastanza?”, “Perché mio figlio si comporta così?”, “Come posso essere presente senza invadere il suo spazio?”.</p>
      <p>Il sostegno alla genitorialità è uno spazio dedicato all’ascolto e alla riflessione, in cui affrontare insieme dubbi, fatiche e dinamiche relazionali con i propri figli — che siano piccoli, adolescenti o adulti. Non si tratta di imparare a “fare i genitori perfetti”, ma di trovare il proprio modo di esserlo, riconoscendo le proprie risorse, limiti e bisogni.</p>
      <h4>Ti capita di...</h4>
      <ul>
        <li>Sentirti inadeguato/a o in difficoltà nel comprendere i bisogni di tuo figlio?</li>
        <li>Faticare a gestire i conflitti, l’ansia o la rabbia nel rapporto educativo?</li>
        <li>Vivere con senso di colpa, fatica o confusione il tuo ruolo genitoriale?</li>
      </ul>

      <p>Parlare di questi vissuti può alleggerire il carico e aiutarti a costruire una relazione più serena, consapevole e autentica con tuo figlio e con te stesso/a.</p>
    `,
    },
    {
      title: 'Disabilità cognitive',
      image: '/img/service/being-creative.svg',
      text: '',
      modalHtml: `
      <h3>Di cosa si tratta?</h3>
      <p>Le disabilità cognitive comprendono condizioni che influenzano lo sviluppo o il funzionamento di abilità come attenzione, memoria, linguaggio, capacità di apprendere e problem solving. Possono avere origine congenita o acquisita, e variare notevolmente per gravità e caratteristiche.</p>
      <p>Chi vive una condizione di disabilità cognitiva può trovarsi ad affrontare difficoltà nella comunicazione, nelle relazioni sociali, nella gestione delle emozioni o nell’autonomia quotidiana. Per questo, spesso il lavoro psicologico coinvolge anche chi sta loro accanto.</p>
      <p>Il sostegno psicologico in quest’area non si rivolge solo alla persona con disabilità, ma anche a chi la accompagna nel percorso di crescita, cura e relazione: genitori, familiari, operatori, caregiver.</p>
      <h4>Ti capita di...</h4>
      <ul>
        <li>Ti capita di sentirti frainteso/a, escluso/a o non ascoltato/a nei tuoi bisogni?</li>
        <li>Vorresti uno spazio per esprimere le tue emozioni, senza giudizio?</li>
        <li>Vivere con senso di colpa, fatica o confusione il tuo ruolo genitoriale?</li>
      </ul>

      <p>La psicologia può offrire un sostegno concreto, sia a chi si prende cura che a chi desidera essere visto per ciò che è, al di là delle etichette.</p>
      <h4>Sei accanto a una persona con disabilità cognitiva e ti capita di…</h4>
      <ul>
        <li>Sentirti sopraffatto/a dal carico emotivo o dalla gestione quotidiana?</li>
        <li>Avere dubbi su come comunicare o comprendere i suoi bisogni profondi?</li>
        <li>Provare senso di colpa, frustrazione o solitudine nel tuo ruolo di supporto?</li>
        <li>Sentire che la relazione si sta spostando solo sul piano dell’assistenza?</li>
      </ul>

      <p>Prendersi cura di qualcuno richiede anche prendersi cura di sé. Avere uno spazio per condividere pensieri, emozioni e difficoltà può fare la differenza.</p>
    `,
    }
  ];
</script>

<Section className="py-12 md:py-16">
  <Container>
    <SectionHeader eyebrow={eyebrow} title={title} intro={intro} />
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
