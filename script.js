```javascript
// ==========================================
// CATEGORIES À AFFICHER DANS LE MENU
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
    "CONCERVE"
];


// ==========================================
// PRODUITS DU MENU
// ==========================================
//
// Ici on suppose que ta liste complète est déjà
// disponible dans la variable "produits"
//
// Exemple :
// const produits = [ ... tes 260 produits ... ];
//
// ==========================================


function getMenuProducts() {

    const menuProducts = [];

    produits.forEach(function(product) {

        if (!product.categories || !Array.isArray(product.categories)) {
            return;
        }

        // Chercher la catégorie du produit qui
        // correspond à une catégorie du menu
        const category = product.categories.find(function(cat) {

            return menuCategories.includes(cat);

        });

        // Si aucune catégorie ne correspond,
        // on ignore le produit
        if (!category) {
            return;
        }

        menuProducts.push({
            category: category,
            name: product.nom,
            price: product.prixVente
        });

    });

    return menuProducts;
}


// ==========================================
// CLASSER PAR CATÉGORIE
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
// AFFICHER LE MENU
// ==========================================

function displayMenu() {

    const container = document.getElementById("products");

    if (!container) {
        console.error("Le conteneur #products est introuvable.");
        return;
    }

    container.innerHTML = "";

    const filteredProducts = getMenuProducts();

    const groups = groupProducts(filteredProducts);


    // Afficher les catégories dans l'ordre
    // défini dans menuCategories

    menuCategories.forEach(function(categoryName) {

        if (!groups[categoryName]) {
            return;
        }


        // ==============================
        // SECTION CATÉGORIE
        // ==============================

        const category = document.createElement("div");

        category.className = "category";


        // ==============================
        // TITRE CATÉGORIE
        // ==============================

        const title = document.createElement("h2");

        title.className = "category-title";

        title.textContent = categoryName;

        category.appendChild(title);


        // ==============================
        // PRODUITS
        // ==============================

        groups[categoryName].forEach(function(product) {

            const productElement = document.createElement("div");

            productElement.className = "product";


            // NOM
            const productName = document.createElement("span");

            productName.className = "product-name";

            productName.textContent = product.name;


            // PRIX DE VENTE
            const productPrice = document.createElement("span");

            productPrice.className = "product-price";

            productPrice.textContent = product.price + " DH";


            productElement.appendChild(productName);

            productElement.appendChild(productPrice);

            category.appendChild(productElement);

        });


        container.appendChild(category);

    });

}


// ==========================================
// LANCER LE MENU
// ==========================================

displayMenu();
```
