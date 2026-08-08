```javascript
// ==========================================
// FICHIER JSON
// ==========================================

const JSON_FILE = "produits_2026-08-08.json";


// ==========================================
// CATÉGORIES DU MENU
// ==========================================
//
// SEULEMENT ces catégories seront affichées
//
// ==========================================

const menuCategories = [

    "BOISSONS GAZEUSE",

    "LAITIERS",

    "BISCUITS",

    "ENERGY",

    "CHIPS-SALE",

    "MENAGE",

    "ALIMENTATION",

    "BEAUTY",

    "CONSERVE"

];


// ==========================================
// CHARGER LE FICHIER JSON
// ==========================================

async function loadProducts() {

    const container =
        document.getElementById("products");


    try {


        console.log(
            "Chargement du fichier :",
            JSON_FILE
        );


        // --------------------------------------
        // Charger le fichier
        // --------------------------------------

        const response =
            await fetch(JSON_FILE);


        // --------------------------------------
        // Vérifier la réponse
        // --------------------------------------

        if (!response.ok) {

            throw new Error(
                "Erreur HTTP " +
                response.status
            );

        }


        // --------------------------------------
        // Convertir en JSON
        // --------------------------------------

        const data =
            await response.json();


        // --------------------------------------
        // Vérifier la structure
        // --------------------------------------

        if (
            !data ||
            !Array.isArray(data.produits)
        ) {

            throw new Error(
                "Le tableau 'produits' est introuvable dans le JSON."
            );

        }


        console.log(
            "Nombre total de produits :",
            data.produits.length
        );


        // --------------------------------------
        // Générer le menu
        // --------------------------------------

        displayMenu(data.produits);


    }

    catch (error) {


        console.error(
            "Erreur :",
            error
        );


        container.innerHTML = `

            <div class="menu-error">

                Impossible de charger le menu.

                <br><br>

                Vérifie que le fichier

                <strong>
                    ${JSON_FILE}
                </strong>

                est dans le même dossier que
                index.html.

            </div>

        `;

    }

}


// ==========================================
// FILTRER LES PRODUITS
// ==========================================

function filterMenuProducts(products) {


    const result = [];


    products.forEach(function(product) {


        // --------------------------------------
        // Vérifier les catégories
        // --------------------------------------

        if (
            !product.categories ||
            !Array.isArray(product.categories)
        ) {

            return;

        }


        // --------------------------------------
        // Chercher une catégorie autorisée
        // --------------------------------------

        const category =
            product.categories.find(
                function(categoryName) {

                    return menuCategories.includes(
                        categoryName
                    );

                }
            );


        // --------------------------------------
        // Catégorie non autorisée
        // --------------------------------------

        if (!category) {

            return;

        }


        // --------------------------------------
        // Vérifier le nom
        // --------------------------------------

        if (
            product.nom === undefined ||
            product.nom === null ||
            product.nom === ""
        ) {

            return;

        }


        // --------------------------------------
        // Vérifier le prix
        // --------------------------------------

        if (
            product.prixVente === undefined ||
            product.prixVente === null
        ) {

            return;

        }


        // --------------------------------------
        // Ajouter au menu
        // --------------------------------------

        result.push({

            category: category,

            name: String(product.nom),

            price: product.prixVente

        });

    });


    return result;

}


// ==========================================
// CLASSER LES PRODUITS PAR CATÉGORIE
// ==========================================

function groupProducts(products) {


    const groups = {};


    products.forEach(function(product) {


        if (!groups[product.category]) {

            groups[product.category] = [];

        }


        groups[product.category].push(
            product
        );

    });


    return groups;

}


// ==========================================
// FORMATER LE PRIX
// ==========================================

function formatPrice(price) {


    const number =
        Number(price);


    // Si ce n'est pas un nombre
    if (Number.isNaN(number)) {

        return String(price) + " DH";

    }


    return number.toLocaleString(
        "fr-FR",
        {
            maximumFractionDigits: 2
        }
    ) + " DH";

}


// ==========================================
// CRÉER UN PRODUIT HTML
// ==========================================

function createProductElement(product) {


    const productElement =
        document.createElement("div");


    productElement.className =
        "product";


    // --------------------------------------
    // NOM
    // --------------------------------------

    const productName =
        document.createElement("span");


    productName.className =
        "product-name";


    productName.textContent =
        product.name;


    // --------------------------------------
    // PRIX
    // --------------------------------------

    const productPrice =
        document.createElement("span");


    productPrice.className =
        "product-price";


    productPrice.textContent =
        formatPrice(product.price);


    // --------------------------------------
    // Ajouter les éléments
    // --------------------------------------

    productElement.appendChild(
        productName
    );


    productElement.appendChild(
        productPrice
    );


    return productElement;

}


// ==========================================
// CRÉER UNE CATÉGORIE HTML
// ==========================================

function createCategoryElement(
    categoryName,
    products
) {


    const category =
        document.createElement("div");


    category.className =
        "category";


    // --------------------------------------
    // TITRE
    // --------------------------------------

    const title =
        document.createElement("h2");


    title.className =
        "category-title";


    title.textContent =
        categoryName;


    category.appendChild(
        title
    );


    // --------------------------------------
    // PRODUITS
    // --------------------------------------

    products.forEach(function(product) {


        const productElement =
            createProductElement(
                product
            );


        category.appendChild(
            productElement
        );

    });


    return category;

}


// ==========================================
// AFFICHER LE MENU
// ==========================================

function displayMenu(products) {


    const container =
        document.getElementById("products");


    if (!container) {

        console.error(
            "L'élément #products n'existe pas."
        );

        return;

    }


    // --------------------------------------
    // Nettoyer
    // --------------------------------------

    container.innerHTML = "";


    // --------------------------------------
    // Filtrer
    // --------------------------------------

    const filteredProducts =
        filterMenuProducts(
            products
        );


    console.log(
        "Produits sélectionnés :",
        filteredProducts.length
    );


    // --------------------------------------
    // Grouper
    // --------------------------------------

    const groups =
        groupProducts(
            filteredProducts
        );


    // --------------------------------------
    // Afficher dans l'ordre voulu
    // --------------------------------------

    menuCategories.forEach(
        function(categoryName) {


            // Pas de produit dans cette catégorie
            if (!groups[categoryName]) {

                return;

            }


            const categoryElement =
                createCategoryElement(
                    categoryName,
                    groups[categoryName]
                );


            container.appendChild(
                categoryElement
            );

        }
    );


    // --------------------------------------
    // Aucun résultat
    // --------------------------------------

    if (
        filteredProducts.length === 0
    ) {

        container.innerHTML = `

            <div class="menu-error">

                Aucun produit trouvé
                dans les catégories sélectionnées.

            </div>

        `;

    }

}


// ==========================================
// DÉMARRAGE
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadProducts();

    }
);
```
