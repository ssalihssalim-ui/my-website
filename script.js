```css
/* =========================================================
   MENU MURAL
   FORMAT : 100 CM × 150 CM
========================================================= */

@page {
    size: 100cm 150cm;
    margin: 0;
}


/* =========================================================
   RESET
========================================================= */

* {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    padding: 0;
}


/* =========================================================
   PAGE
========================================================= */

body {
    width: 100cm;
    min-height: 150cm;

    background: white;

    color: #111;

    font-family: Arial, Helvetica, sans-serif;
}


/* =========================================================
   MENU
========================================================= */

.menu {
    width: 100cm;
    min-height: 150cm;

    padding: 2cm;

    background: white;
}


/* =========================================================
   TITRE PRINCIPAL
========================================================= */

header {
    width: 100%;

    text-align: center;

    margin-bottom: 1.5cm;

    padding-bottom: 0.7cm;

    border-bottom: 4px solid #111;
}

header h1 {
    margin: 0;

    font-size: 80px;

    line-height: 1;

    font-weight: 900;

    letter-spacing: 8px;
}


/* =========================================================
   COLONNES
========================================================= */

.columns {
    display: grid;

    grid-template-columns: 1fr 1fr;

    column-gap: 2.5cm;

    align-items: start;
}


/* =========================================================
   CATEGORIES
========================================================= */

section {
    margin-bottom: 1.3cm;

    break-inside: avoid;
    page-break-inside: avoid;
}


/* =========================================================
   TITRE DES CATEGORIES
========================================================= */

section h2 {
    margin: 0 0 0.35cm 0;

    padding: 0.25cm 0.3cm;

    font-size: 50px;

    line-height: 1.1;

    font-weight: 900;

    text-transform: uppercase;

    letter-spacing: 1px;

    border-bottom: 4px solid #111;
}


/* =========================================================
   PRODUIT + PRIX
========================================================= */

section p {
    display: grid;

    /*
       COLONNE 1 = NOM PRODUIT
       COLONNE 2 = PRIX
    */
    grid-template-columns: minmax(0, 1fr) 160px;

    align-items: center;

    width: 100%;

    margin: 0;

    padding: 6px 5px;

    font-size: 40px;

    line-height: 1.15;

    column-gap: 25px;
}


/* =========================================================
   NOM DU PRODUIT
========================================================= */

section p span {
    min-width: 0;

    font-size: 40px;

    line-height: 1.15;

    font-weight: 500;

    text-align: left;

    overflow-wrap: break-word;

    word-break: normal;
}


/* =========================================================
   PRIX
========================================================= */

section p b {
    width: 160px;

    font-size: 40px;

    line-height: 1;

    font-weight: 900;

    text-align: right;

    white-space: nowrap;
}


/* =========================================================
   PETITES LIGNES ENTRE LES PRODUITS
========================================================= */

section p:not(:last-child) {
    border-bottom: 1px solid #dddddd;
}


/* =========================================================
   IMPRESSION
========================================================= */

@media print {

    html,
    body {
        width: 100cm;
        height: 150cm;

        margin: 0;
        padding: 0;

        background: white;
    }

    .menu {
        width: 100cm;
        height: 150cm;

        padding: 2cm;
    }

    header {
        margin-bottom: 1.5cm;
    }

    .columns {
        display: grid;

        grid-template-columns: 1fr 1fr;

        column-gap: 2.5cm;
    }

    section {
        break-inside: avoid;
        page-break-inside: avoid;
    }
}


/* =========================================================
   APERCU SUR ORDINATEUR
========================================================= */

@media screen {

    body {
        background: #d0d0d0;
    }

    .menu {
        margin: 30px auto;

        box-shadow:
            0 0 30px rgba(0, 0, 0, 0.20);
    }
}
```
