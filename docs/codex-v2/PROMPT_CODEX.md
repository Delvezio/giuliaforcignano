# Prompt Codex — Evoluzione giuliaforcignano.it

Devi evolvere il sito esistente di Giulia Forcignanò, psicologa a Torino, aggiungendo un nuovo sistema di orientamento per l’utente, pagine di approfondimento degli ambiti di intervento e una pagina dedicata al primo incontro.

Il file `docs/codex-v2/CONTENT_SPEC.md` è la fonte autoritativa per tutti i testi, label, CTA, domande, risposte, risultati, title SEO e meta description. Il file `docs/codex-v2/CHECKLIST_FINALE.md` definisce i controlli obbligatori prima della consegna. Se questi file sono collocati altrove, individua il loro percorso reale nel repository.

IMPORTANTE: non si tratta di un redesign. L’identità visiva, il linguaggio grafico, la tipografia, la palette, le animazioni, le illustrazioni esistenti e l’impostazione generale del sito devono essere preservati.

## Prima di modificare qualsiasi file

1. Analizza l’intero repository.
2. Identifica framework, struttura delle route, componenti condivisi, sistema CSS, font, breakpoint, gestione SEO e asset.
3. Individua come vengono costruiti header, footer, CTA, card e pagine interne.
4. Controlla `package.json` e gli script disponibili.
5. Verifica se esistono test, lint, formatter e type-check.
6. Leggi integralmente `CONTENT_SPEC.md` e `CHECKLIST_FINALE.md`.
7. Non introdurre nuove dipendenze se la stessa funzionalità può essere realizzata con lo stack già presente.

Prima di intervenire, restituisci una breve sintesi dell’architettura rilevata e un piano operativo. Dopo il piano, procedi con l’implementazione senza attendere un’ulteriore conferma, salvo discrepanze sostanziali nei dati professionali o un blocco tecnico reale.

Non modificare arbitrariamente design o architettura tecnica.

---

## Obiettivo

Il sito deve passare da semplice sito di presentazione a esperienza capace di:

- aiutare il visitatore a riconoscersi in una situazione senza formulare diagnosi;
- orientarlo tra contenuti pertinenti;
- spiegare meglio il metodo di Giulia;
- ridurre l’attrito prima del primo contatto;
- creare pagine SEO dedicate ai nove ambiti di intervento già presenti;
- mantenere un tono professionale, delicato e non commerciale.

Il percorso interattivo NON è un test psicologico, NON deve produrre diagnosi e NON deve dichiarare o suggerire che una determinata risposta identifichi un disturbo.

---

## Informazione autoritativa

Giulia riceve attualmente in un solo studio:

```text
Corso Moncalieri 266
10133 Torino
```

Via Saluzzo 121 NON è più uno studio attivo.

Rimuovi qualsiasi riferimento residuo a Via Saluzzo.

Cerca inoltre in tutto il repository espressioni come:

```text
uno dei miei studi
i miei studi
nei miei studi
```

e sostituiscile contestualmente con forme coerenti con un solo studio.

Non modificare autonomamente il titolo professionale di Giulia. Mantieni quello attualmente presente nel progetto finché non viene fornita un’indicazione diversa.

Quando possibile, nei nuovi contenuti usa “percorso psicologico” o “sostegno psicologico”, evitando di introdurre autonomamente qualifiche professionali ulteriori.

---

## Nuova architettura

Mantieni:

```text
/
/about
/method
```

Crea:

```text
/ambiti
/ambiti/ansia
/ambiti/lavoro
/ambiti/depressione
/ambiti/trauma
/ambiti/stress
/ambiti/disturbi-personalita
/ambiti/disturbi-alimentari
/ambiti/genitorialita
/ambiti/disabilita-cognitive
/da-dove-iniziare
/iniziare-un-percorso
/contatti
```

Aggiorna la navigazione principale con:

```text
Chi sono
Metodo
Ambiti
Primo incontro
Contatti
```

Il logo continua a riportare alla home.

Non aggiungere al menu le nove sottopagine degli ambiti, a meno che il progetto non disponga già di un pattern di dropdown elegante e coerente.

---

## Home — struttura

Mantieni la hero e porta “Cosa ti porta qui?” immediatamente dopo. La home deve iniziare dall’esperienza del visitatore prima di presentare Giulia e il suo metodo.

La sequenza della pagina deve diventare concettualmente:

```text
Hero
↓
COSA TI PORTA QUI?
↓
percorso interattivo
↓
presentazione / metodo / modalità
↓
AMBITI IN CUI POSSO AIUTARTI
↓
INIZIARE UN PERCORSO
↓
CTA finale
↓
footer
```

Non creare nuove illustrazioni.

La sezione “Cosa ti porta qui?” deve distinguersi dalle card illustrate degli ambiti attraverso un design prevalentemente tipografico.

Usa esclusivamente elementi coerenti con l’identità esistente:

- tipografia;
- palette già presente;
- bordi;
- linee;
- geometrie semplici;
- eventuali piccoli elementi grafici già disponibili.

NON usare stock photography.  
NON generare nuove illustrazioni.  
NON aggiungere icone generiche che introducano uno stile visivo estraneo al sito.

---

## Sezione “Cosa ti porta qui?”

Crea sei card testuali:

1. Mi sento bloccato
2. Le relazioni si complicano
3. Mi sento spesso inadeguato
4. Ansia e pensieri prendono troppo spazio
5. Sto attraversando un cambiamento difficile
6. Voglio conoscermi meglio

Usa esattamente copy, sottotitoli e microcopy contenuti nel `CONTENT_SPEC.md`.

Ogni card deve avere la CTA “Parti da qui”.

Il click NON deve cambiare pagina. Deve mostrare un pannello interattivo inline immediatamente sotto la griglia.

Non utilizzare una modal. La soluzione richiesta è un pannello inline integrato nella pagina.

---

## Percorso interattivo

Architettura:

```text
scelta iniziale tramite card
→ domanda contestuale
→ domanda comune
→ risultato
```

Massimo due domande dopo la card iniziale.

Il percorso deve sembrare un sistema di orientamento, non un quiz.

Prevedi:

- stato iniziale;
- scelta del tema;
- domanda contestuale;
- domanda comune;
- risultato;
- pulsante per tornare allo step precedente;
- pulsante “Ricomincia”;
- focus management accessibile;
- corretta navigazione da tastiera;
- `aria-live` o soluzione equivalente per comunicare il cambio di step agli screen reader;
- animazioni leggere compatibili con `prefers-reduced-motion`.

Quando il pannello viene aperto, deve essere portato nell’area visibile senza scroll aggressivi.

Su mobile deve essere perfettamente utilizzabile con touch e senza overflow orizzontale.

---

## Privacy del percorso interattivo — requisito critico

Le risposte possono rivelare informazioni personali o relative al benessere psicologico dell’utente.

Pertanto:

- NON inviare le risposte al server;
- NON inviare le risposte a servizi analytics;
- NON inserirle negli URL;
- NON usare query string;
- NON usare `localStorage`;
- NON usare `sessionStorage`;
- NON usare cookie;
- NON conservarle dopo il refresh;
- NON loggarle nella console in produzione.

Lo stato deve vivere esclusivamente in memoria nel componente client durante la sessione corrente.

Gli analytics generici della pagina possono continuare a funzionare se già esistono, ma non devono ricevere il contenuto o un identificativo delle selezioni.

---

## Risultato del percorso

Crea sei risultati principali, uno per ciascun tema iniziale.

La seconda e la terza scelta possono essere usate per una breve frase dinamica di riepilogo, ma NON devono generare interpretazioni cliniche.

Esempio consentito:

> Hai indicato che questa sensazione emerge soprattutto nel lavoro.

Esempio vietato:

> Questo significa che soffri di...

Usa risultati e CTA esattamente come definiti nel `CONTENT_SPEC.md`.

Al risultato aggiungi una CTA piena “Scrivimi su WhatsApp” con messaggio neutro precompilato. Il messaggio NON deve contenere né riepilogare le risposte dell’utente. Testo:

> Ciao Giulia, ho completato il percorso di orientamento sul tuo sito e vorrei chiederti alcune informazioni sul primo incontro.

Dove previsto, collega a:

```text
/method
/about
/iniziare-un-percorso
/ambiti/ansia
/ambiti/stress
```

---

## Ambiti di intervento

Conserva integralmente le nove illustrazioni già presenti nella home. Non sostituirle.

Ogni card deve essere un vero collegamento alla propria pagina.

Mapping:

```text
Ansia → /ambiti/ansia
Lavoro → /ambiti/lavoro
Depressione → /ambiti/depressione
Elaborazione del Trauma → /ambiti/trauma
Stress → /ambiti/stress
Disturbi di personalità → /ambiti/disturbi-personalita
Disturbi Alimentari → /ambiti/disturbi-alimentari
Sostegno alla genitorialità → /ambiti/genitorialita
Disabilità cognitive → /ambiti/disabilita-cognitive
```

Le card devono riprendere l’estetica originale: titolo centrato sopra, illustrazione grande, nessun bottone o label “Approfondisci”. L’intera card è un link; `cursor: pointer`, focus visibile e una microanimazione in hover devono rendere chiara la cliccabilità.

Crea anche `/ambiti` come pagina hub utilizzando le stesse nove card e gli asset esistenti.

Evita duplicazione inutile del markup: se coerente con l’architettura del progetto, crea un componente riutilizzabile e un’unica sorgente dati per slug, titolo, immagine, SEO e contenuti.

---

## Pagine ambito

Le nove pagine devono mantenere il linguaggio delle pagine interne esistenti. Devono sembrare parte dello stesso sito, non landing page di marketing aggiunte successivamente.

Ogni pagina deve avere:

- breadcrumb leggero, se coerente con il design;
- eyebrow;
- H1;
- introduzione;
- due o tre sezioni testuali;
- CTA verso `/iniziare-un-percorso`;
- possibilità di tornare a `/ambiti`;
- footer esistente.

Usa il copy esatto del `CONTENT_SPEC.md`.

Non trasformare i testi in liste di sintomi aggressive.  
Non aggiungere claim medici.  
Non promettere risultati.  
Non usare espressioni come “cura garantita”, “risolvi”, “guarisci”, “supera definitivamente”.

---

## Pagina primo incontro

Crea `/iniziare-un-percorso` usando il contenuto esatto del `CONTENT_SPEC.md`.

Deve essere una pagina molto leggibile, rassicurante e priva di meccaniche commerciali.

Non impaginarla come una singola colonna stretta di testo. Usa il linguaggio visivo esistente per costruire:

- hero editoriale con immagine di Giulia;
- tre momenti: prima, durante e dopo l’incontro;
- fascia rassicurante a tutta larghezza del container;
- confronto in studio / online;
- FAQ in accordion accessibile;
- CTA finale WhatsApp e telefono.

Le FAQ possono essere implementate come accordion accessibile se esiste già un pattern compatibile; altrimenti usa normali sezioni.

CTA finali:

```text
Scrivimi
Chiamami
```

Riutilizza i contatti esistenti.

Non inventare durata, prezzo o frequenza delle sedute.

I banner, incluso “INIZIARE UN PERCORSO — Non devi sapere già da dove cominciare”, devono occupare tutta la larghezza disponibile del container del sito. Evita pannelli centrali `max-w-3xl` quando non richiesti dal contenuto.

Tutte le CTA piene con background primario devono usare testo bianco.

---

## Pagina “Da dove iniziare”

Crea `/da-dove-iniziare` e riutilizza lo stesso componente e la stessa sorgente dati del percorso presente in home. Non duplicare logica o contenuti.

La pagina deve presentare il percorso senza distrazioni, ribadire che non è un test diagnostico e terminare con una CTA WhatsApp neutra e una CTA verso `/iniziare-un-percorso`.

---

## Pagina contatti

Crea `/contatti` con:

- Corso Moncalieri 266, Torino;
- telefono già presente nel progetto;
- email già presente nel progetto;
- possibilità di colloqui online.

Se esiste già una mappa o un sistema di embed coerente e rispettoso della privacy, può essere riutilizzato.

Non introdurre un embed pesante di Google Maps senza verificare l’impatto privacy/cookie e senza che sia già previsto dall’architettura esistente. Un semplice link alla mappa è accettabile.

---

## CTA esistenti

Rivedi i blocchi con “Hai bisogno di aiuto ora?”. Questa formulazione può essere confusa con un servizio di emergenza.

Sostituisci i blocchi nelle pagine `/about` e `/method` con quelli indicati nel `CONTENT_SPEC.md`.

Aggiorna inoltre la CTA finale della home.

---

## Modifiche a `/method`

Correggi qualsiasi riferimento a più studi.

Cambia, se presente:

```text
Come si sviluppa il percorso terapeutico?
```

in:

```text
Come si sviluppa il percorso psicologico?
```

Non alterare per il resto il contenuto esistente se non necessario.

---

## SEO

Per ogni nuova pagina:

- title unico;
- meta description unica;
- canonical;
- Open Graph coerenti;
- heading hierarchy corretta;
- alt text appropriati per le immagini esistenti;
- internal linking;
- sitemap aggiornata;
- robots coerente con il progetto.

Usa title e meta description del `CONTENT_SPEC.md`.

Se esiste già un generatore di sitemap, estendilo. Se la sitemap è statica, aggiornala.

Verifica che non rimangano URL o structured data riferiti a Via Saluzzo.

Se il progetto usa JSON-LD o structured data, aggiorna l’indirizzo a Corso Moncalieri 266.

Non inventare dati professionali mancanti.

---

## Performance

Non introdurre librerie pesanti per il percorso interattivo.

Implementalo con lo stack già usato nel sito, riutilizzando componenti e CSS esistenti.

Preserva:

- Core Web Vitals;
- responsive;
- lazy loading delle immagini;
- animazioni esistenti;
- comportamento del menu mobile.

Evita layout shift.

---

## Accessibilità

Controlla almeno:

- uso corretto di `button` e `a`;
- focus visibile;
- navigazione da tastiera;
- label comprensibili;
- contrasto;
- gerarchia H1/H2/H3;
- `aria-expanded` negli eventuali accordion;
- `prefers-reduced-motion`;
- target touch sufficienti su mobile.

Le card che avviano il percorso sono azioni e devono essere `button` o contenere un vero `button`, non `div` cliccabili.

Le card degli ambiti che navigano verso altre pagine devono invece essere link.

---

## Responsive

Verifica almeno:

- mobile piccolo;
- mobile;
- tablet;
- desktop;
- desktop ampio.

Le sei card “Cosa ti porta qui?” devono adattarsi senza diventare eccessivamente strette.

Indicativamente:

```text
desktop: 3 colonne × 2 righe
tablet: 2 colonne
mobile: 1 colonna
```

Adatta però la soluzione al design system reale del progetto.

---

## Architettura del codice

Preferisci una soluzione data-driven per:

- nove ambiti;
- sei temi del percorso;
- domande;
- opzioni;
- risultati;
- CTA.

Evita duplicazione di nove pagine quasi identiche se il framework permette route dinamiche o componenti condivisi.

Non sacrificare SEO server-rendered per ottenere una singola route dinamica client-only. Ogni URL deve essere direttamente raggiungibile e indicizzabile.

---

## Contenuti

`CONTENT_SPEC.md` è autoritativo per:

- testi;
- titoli;
- label;
- CTA;
- domande;
- risposte del percorso;
- copy delle nove pagine;
- SEO title;
- meta description;
- pagina primo incontro;
- pagina contatti;
- microcopy delle pagine esistenti.

NON riscrivere autonomamente il copy, salvo minime correzioni indispensabili per integrarlo tecnicamente.

Se individui un’incoerenza tra repository e `CONTENT_SPEC.md`:

1. preserva i dati professionali verificabili presenti nel repository;
2. segnala la discrepanza nel riepilogo finale;
3. non inventare informazioni.

---

## Verifica finale

Prima di considerare il lavoro concluso:

1. cerca globalmente “Via Saluzzo”;
2. cerca “uno dei miei studi”;
3. cerca “i miei studi”;
4. verifica tutti i link interni;
5. verifica le nove card;
6. percorri tutte e sei le varianti del percorso interattivo;
7. controlla indietro e reset;
8. verifica che nessuna risposta venga inviata o persistita;
9. verifica i breakpoint richiesti;
10. esegui gli script esistenti per type-check, lint, test e build;
11. correggi gli errori introdotti;
12. verifica sitemap e metadata delle nuove route;
13. completa la checklist in `CHECKLIST_FINALE.md` indicando eventuali punti che richiedono verifica manuale.

Non considerare completato il task con build rotta o errori TypeScript/lint introdotti dalle modifiche.

---

## Output finale richiesto

Al termine fornisci:

- sintesi delle modifiche;
- elenco dei file creati;
- elenco dei file modificati;
- nuove route;
- descrizione dell’architettura del percorso interattivo;
- conferma della gestione privacy delle risposte;
- risultato di type-check, lint, test e build;
- aspetti che richiedono verifica manuale;
- informazioni professionali non modificate perché necessitano conferma;
- eventuali discrepanze tra repository e `CONTENT_SPEC.md`.

Non effettuare redesign non richiesti e non sostituire le illustrazioni attualmente presenti.
