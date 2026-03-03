function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
  document.querySelector(".overlay").classList.remove("active");
}

function showSection(section) {
  const content = document.getElementById("contentArea");

  const sections = {
    home: `<h1>Dashboard</h1><div class="card">Sales Today: $350</div>`,
    pos: `<h1>POS</h1><div class="card">Cashier system coming soon...</div>`,
    categories: `<h1>Categories</h1><div class="card">Vegetables</div>`,
    products: `<h1>Products</h1><div class="card">Milk - $2</div>`,
    clients: `<h1>Clients</h1><div class="card">Client A</div>`,
    suppliers: `<h1>Suppliers</h1><div class="card">Supplier 1</div>`,
    statistics: `<h1>Statistics</h1><div class="card">Monthly Sales: $8,200</div>`,
    credits: `<h1>Credits</h1><div class="card">Pending: $450</div>`
  };

  content.innerHTML = sections[section];
  closeMenu();
}
