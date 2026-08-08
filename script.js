```javascript
// ==========================================
// FICHIER JSON
// ==========================================

const JSON_FILE = "produits_2026-08-08.json";


// ==========================================
// CATÉGORIES À AFFICHER
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
// CHARGER LE JSON
// ==========================================

async function loadProducts() {

    try {

        const response = await fetch(JSON_FILE);


        // Vérifier que le fichier existe
        if (!response.ok) {

            throw new Error(
                "Impossible de charger le fichier JSON : " +
                response.status
            );

        }


        // Transformer la réponse en JSON
        const data = await response.json();


        // Vérifier la structure
        if (!data.produits || !Array.isArray(data.produits)) {

            throw new Error(
                "Le fichier JSON ne contient pas de tableau 'produits'."
            );

        }


        console.log(
            "Produits chargés :",
            data.produits.length
        );


        // Générer le menu
        displayMenu(data.produits);

    }

    catch (error) {

        console.error(error);

        const container = document.getElementById("products");

        container.innerHTML = `
            <div class="menu-error">
                Impossible de charger les produits.
                <br>
                Vérifie le fichier JSON.
            </div>
        `;

    }

}


// ==========================================
// FILTRER LES PRODUITS
// ==========================================

function getMenuProducts(products) {

    const result = [];


    products.forEach(function(product) {


        // Vérifier les catégories
        if (
            !product.categories ||
            !Array.isArray(product.categories)
        ) {

            return;

        }


        // Chercher une catégorie autorisée
        const category = product.categories.find(
            function(categoryName) {

                return menuCategories.includes(categoryName);

            }
        );


        // Produit ne correspondant à aucune
        // catégorie du menu
        if (!category) {

            return;

        }


        // Vérifier le nom
        if (!product.nom) {

            return;

        }


        // Vérifier le prix
        if (
            product.prixVente === undefined ||
            product.prixVente === null
        ) {

            return;

        }


        result.push({

            category: category,

            name: product.nom,

            price: product.prixVente

        });

    });


    return result;

}


// ==========================================
// CLASSER LES PRODUITS
// ==========================================

function groupProducts(products) {

    const groups = {};


    products.forEach(function(product) {

        if (!groups[product.category]) {

            groups[product.category] = [];

        }


        groups[product.category].push(product);

    });


    return groups;

}


// ==========================================
// FORMATER LE PRIX
// ==========================================

function formatPrice(price) {

    const number = Number(price);


    if (Number.isNaN(number)) {

        return price + " DH";

    }


    // Exemple :
    // 6     → 6 DH
    // 5.5   → 5,5 DH
    // 10.00 → 10 DH

    return number
        .toLocaleString("fr-FR", {
            maximumFractionDigits: 2
        })
        + " DH";

}


// ==========================================
// CRÉER UN PRODUIT
// ==========================================

function createProductElement(product) {

    const productElement =
        document.createElement("div");

    productElement.className = "product";


    // NOM
    const productName =
        document.createElement("span");

    productName.className = "product-name";

    productName.textContent = product.name;


    // PRIX
    const productPrice =
        document.createElement("span");

    productPrice.className = "product-price";

    productPrice.textContent =
        formatPrice(product.price);


    productElement.appendChild(productName);

    productElement.appendChild(productPrice);


    return productElement;

}


// ==========================================
// CRÉER UNE CATÉGORIE
// ==========================================

function createCategoryElement(
    categoryName,
    products
) {

    const category =
        document.createElement("div");

    category.className = "category";


    // TITRE
    const title =
        document.createElement("h2");

    title.className = "category-title";

    title.textContent = categoryName;


    category.appendChild(title);


    // PRODUITS
    products.forEach(function(product) {

        const element =
            createProductElement(product);

        category.appendChild(element);

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
            "L'élément #products est introuvable."
        );

        return;

    }


    // Nettoyer
    container.innerHTML = "";


    // Filtrer
    const filteredProducts =
        getMenuProducts(products);


    console.log(
        "Produits du menu :",
        filteredProducts.length
    );


    // Classer
    const groups =
        groupProducts(filteredProducts);


    // Afficher les catégories
    // dans l'ordre défini plus haut

    menuCategories.forEach(
        function(categoryName) {


            // Si aucun produit dans cette catégorie
            // on ne l'affiche pas

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


    // Aucun produit
    if (filteredProducts.length === 0) {

        container.innerHTML = `
            <div class="menu-error">
                Aucun produit trouvé.
            </div>
        `;

    }

}


// ==========================================
// DÉMARRER
// ==========================================

loadProducts();
```
