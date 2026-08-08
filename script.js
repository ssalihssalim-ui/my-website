const products = [

    // =========================
    // BOISSONS
    // =========================

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


    // =========================
    // SNACKS
    // =========================

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


    // =========================
    // PRODUITS LAITIERS
    // =========================

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
// CLASSER LES PRODUITS PAR CATÉGORIE
// ==========================================

function groupByCategory(products) {

    const categories = {};

    products.forEach(product => {

        if (!categories[product.category]) {
            categories[product.category] = [];
        }

        categories[product.category].push(product);

    });

    return categories;
}


// ==========================================
// AFFICHER LES CATÉGORIES
// ==========================================

function renderMenu() {

    const container = document.getElementById("categories");

    container.innerHTML = "";

    const categories = groupByCategory(products);

    Object.keys(categories).forEach(categoryName => {

        const category = document.createElement("section");

        category.className = "category";

        // Titre catégorie
        const title = document.createElement("h2");

        title.className = "category-title";

        title.textContent = categoryName;

        category.appendChild(title);


        // Liste produits
        const productsContainer = document.createElement("div");

        productsContainer.className = "products";


        categories[categoryName].forEach(product => {

            const productElement = document.createElement("div");

            productElement.className = "product";

            productElement.innerHTML = `
                <span class="product-name">
                    ${escapeHTML(product.name)}
                </span>

                <span class="product-price">
                    ${escapeHTML(product.price)}
                </span>
            `;

            productsContainer.appendChild(productElement);

        });


        category.appendChild(productsContainer);

        container.appendChild(category);

    });
}


// ==========================================
// SÉCURISER LE TEXTE
// ==========================================

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ==========================================
// LANCER LE MENU
// ==========================================

renderMenu();
