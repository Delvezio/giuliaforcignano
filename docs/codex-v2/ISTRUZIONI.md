# Istruzioni operative per lavorare con Codex

## 1. Preparazione

Lavora su una copia aggiornata del repository e assicurati che le modifiche già presenti siano salvate o versionate. Apri in Codex la radice del progetto, cioè la cartella che contiene `package.json` o il file equivalente del framework.

Non occorre conoscere in anticipo il framework: il prompt impone a Codex di analizzare stack, route, componenti, CSS, metadata e script prima di intervenire.

## 2. Inserimento del pacchetto

Copia questa cartella nel repository, per esempio come:

```text
docs/codex-v2/
```

Mantieni insieme:

```text
README.md
ISTRUZIONI.md
PROMPT_CODEX.md
CONTENT_SPEC.md
CHECKLIST_FINALE.md
```

## 3. Avvio della sessione

Incolla nella chat di Codex tutto il contenuto di `PROMPT_CODEX.md`.

Se i file sono stati collocati in un percorso diverso, sostituisci nel prompt i riferimenti `docs/codex-v2/...` con il percorso reale.

Codex deve prima presentare una breve analisi del repository e un piano di intervento. Può quindi procedere autonomamente con implementazione e verifiche, senza attendere approvazione a ogni singolo file, salvo incongruenze sostanziali o dati professionali mancanti.

## 4. Cosa non deve cambiare

- Identità visiva, palette, font, illustrazioni, animazioni e linguaggio grafico esistenti.
- Titolo professionale di Giulia, finché non viene confermato un aggiornamento.
- Contenuti esistenti non coinvolti dalla specifica.
- Stack e architettura, salvo refactoring piccoli e motivati.

Non devono essere aggiunte fotografie stock, nuove illustrazioni, icone generiche o librerie pesanti.

## 5. Dato professionale già confermato

L’unico studio attivo è:

**Corso Moncalieri 266  
10133 Torino**

Ogni riferimento a Via Saluzzo o a più studi deve essere rimosso.

Telefono ed email devono essere riutilizzati dal progetto quando già presenti. Il contenuto fornito riporta:

- telefono: `+39 340 378 3231`
- email: `info@giuliaforcignano.it`

Se il repository contiene dati diversi e chiaramente più aggiornati, Codex non deve scegliere arbitrariamente: deve conservare il dato verificabile del progetto e segnalare la discrepanza nel riepilogo.

## 6. Verifica editoriale necessaria

Prima del deploy definitivo, Giulia dovrebbe rileggere e approvare soprattutto queste pagine:

- esperienze traumatiche;
- disturbi di personalità;
- disturbi alimentari;
- disabilità cognitive.

La verifica serve ad assicurare che formulazioni, competenze dichiarate e modalità di collaborazione con altri professionisti riflettano esattamente la sua attività.

## 7. Revisione visuale manuale

Controlla almeno:

- home completa su desktop e smartphone;
- apertura del pannello “Cosa ti porta qui?” da tutte le sei card;
- due passaggi, indietro e “Ricomincia”;
- tutte le nove pagine degli ambiti;
- menu desktop e mobile;
- pagina “Primo incontro” e pagina “Contatti”;
- assenza di overflow orizzontale;
- focus da tastiera e leggibilità dei testi;
- link telefono, email e CTA.

## 8. Deploy

Non autorizzare il deploy se:

- build, type-check o lint risultano rotti per errori introdotti dal lavoro;
- compaiono ancora riferimenti a Via Saluzzo o a più studi;
- il percorso salva o trasmette le risposte;
- le nove illustrazioni sono state sostituite;
- i testi professionali non sono stati verificati da Giulia.

