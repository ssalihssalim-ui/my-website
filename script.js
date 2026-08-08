```javascript
// ==========================================
// TES PRODUITS
// ==========================================

const products = [

    // BOISSONS
    {
        category: "Boissons",
        name: "Coca Cola",
        price: "6 DH"
    },

    {
        category: "Boissons",
        name: "Pepsi",
        price: "6 DH"
    },

    {
        category: "Boissons",
        name: "Eau 1,5 L",
        price: "5 DH"
    },

    {
        category: "Boissons",
        name: "Jus d'orange",
        price: "8 DH"
    },


    // SNACKS
    {
        category: "Snacks",
        name: "Chips",
        price: "8 DH"
    },

    {
        category: "Snacks",
        name: "Biscuits",
        price: "7 DH"
    },

    {
        category: "Snacks",
        name: "Chocolat",
        price: "10 DH"
    },


    // PRODUITS LAITIERS
    {
        category: "Produits laitiers",
        name: "Yaourt",
        price: "3 DH"
    },

    {
        category: "Produits laitiers",
        name: "Lait 1 L",
        price: "9 DH"
    }

];


// ==========================================
// CLASSER PAR CATEGORIE
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

    const container = document.getElementById("menu-content");

    container.innerHTML = "";

    const groups = groupProducts(products);


    // Pour chaque catégorie
    Object.keys(groups).forEach(function(categoryName) {

        // SECTION CATEGORIE
        const category = document.createElement("div");

        category.className = "category";


        // NOM CATEGORIE
        const title = document.createElement("h2");

        title.className = "category-title";

        title.textContent = categoryName;

        category.appendChild(title);


        // PRODUITS
        groups[categoryName].forEach(function(product) {

            const productElement = document.createElement("div");

            productElement.className = "product";


            const productName = document.createElement("span");

            productName.className = "product-name";

            productName.textContent = product.name;


            const productPrice = document.createElement("span");

            productPrice.className = "product-price";

            productPrice.textContent = product.price;


            productElement.appendChild(productName);

            productElement.appendChild(productPrice);


            category.appendChild(productElement);

        });


        container.appendChild(category);

    });

}


// ==========================================
// LANCER
// ==========================================

displayMenu();
```
