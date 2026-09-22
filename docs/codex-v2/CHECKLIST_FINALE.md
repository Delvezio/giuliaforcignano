# Checklist finale

## Repository e qualità

- [x] Analizzato framework, routing, componenti, CSS, breakpoint, SEO e asset.
- [x] Nessuna dipendenza nuova non necessaria.
- [x] Nessuna modifica estranea allo scopo.
- [x] Type-check completato.
- [ ] Lint completato.
- [ ] Test disponibili completati.
- [x] Build di produzione completata.

## Informazioni professionali

- [ ] “Via Saluzzo” assente dall’intero repository.
- [x] “uno dei miei studi”, “i miei studi” e “nei miei studi” assenti o corretti contestualmente.
- [x] Unico indirizzo: Corso Moncalieri 266, 10133 Torino.
- [x] Nessuna qualifica professionale inventata o modificata autonomamente.
- [x] Telefono ed email verificati rispetto al repository.

## Navigazione e route

- [x] Menu: Chi sono, Metodo, Ambiti, Primo incontro, Contatti.
- [x] `/ambiti` raggiungibile.
- [x] Tutte le nove sottopagine `/ambiti/...` raggiungibili direttamente.
- [x] `/iniziare-un-percorso` raggiungibile.
- [x] `/contatti` raggiungibile.
- [x] Tutti i link interni e breadcrumb funzionano.
- [x] Sitemap e canonical aggiornati.

## Percorso interattivo

- [x] Sei card iniziali funzionanti.
- [x] Le card sono veri pulsanti accessibili.
- [x] Pannello inline, non modale.
- [x] Massimo due domande dopo la scelta iniziale.
- [x] Sei risultati corretti e non diagnostici.
- [x] “Cambia risposta” torna allo step corretto.
- [x] “Ricomincia” azzera lo stato.
- [x] Focus gestito dopo ogni cambio di step.
- [x] Cambio di step annunciato agli screen reader.
- [x] Utilizzabile completamente da tastiera.
- [x] Nessuno scroll aggressivo.
- [x] Nessun overflow orizzontale.
- [x] `prefers-reduced-motion` rispettato.

## Privacy

- [x] Risposte conservate soltanto nello stato in memoria del componente.
- [x] Nessuna chiamata di rete contenente risposte o identificativi delle scelte.
- [x] Nessun evento analytics sulle singole risposte.
- [x] Nessuna query string o frammento URL con risposte.
- [x] Nessun localStorage, sessionStorage o cookie.
- [x] Nessun log in console in produzione.
- [x] Refresh della pagina azzera il percorso.

## Ambiti

- [x] Nove illustrazioni esistenti conservate integralmente.
- [x] Ogni card è un vero link alla pagina corretta.
- [x] CTA “Approfondisci →” presente.
- [x] Hub e home condividono dati/componenti quando coerente.
- [x] Copy conforme a `CONTENT_SPEC.md`.
- [x] Nessun claim medico o promessa di risultato.

## Responsive e visual QA

- [x] Mobile piccolo.
- [x] Mobile.
- [x] Tablet.
- [x] Desktop.
- [x] Desktop ampio.
- [x] Menu mobile invariato e funzionante.
- [x] Touch target adeguati.
- [ ] Contrasto e focus visibile adeguati.
- [ ] Nessun layout shift evidente.
- [x] Immagini ottimizzate e lazy loading preservato.

## Revisione umana prima del deploy

- [ ] Giulia ha verificato titoli, qualifica e contatti.
- [ ] Giulia ha approvato le nove pagine degli ambiti.
- [ ] Particolare verifica di trauma, disturbi di personalità, disturbi alimentari e disabilità cognitive.
- [ ] Controllo finale del tono: professionale, delicato, non commerciale.


## Esito della verifica locale

- `npm run check`: 0 errori, 0 warning. `npm run build`: riuscito.
- ESLint sui file creati e modificati: riuscito. Il comando globale `npm run lint` resta non superato: Prettier tenta di analizzare un esempio TypeScript non valido in `.github/copilot-instructions.md` (`| ...`) e segnala file preesistenti non formattati. Non è stata cambiata la configurazione per aggirare il controllo.
- Il progetto non definisce uno script `test`; il percorso è stato provato manualmente su tutte e sei le varianti, con ritorno, reset, tastiera e refresh.
- La stringa “Via Saluzzo” compare soltanto nei documenti di istruzione inclusi in `docs/codex-v2`; non compare nei file pubblici `src/` e `static/`.
- Breakpoint verificati: 320, 390, 768, 1280 e 1600 px. Contrasto e layout shift dell’intero sito restano da verificare in una revisione completa.
- Nessuna modifica è stata pubblicata: revisione professionale e approvazione della cliente ancora necessarie.
