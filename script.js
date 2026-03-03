function showSection(section) {
  const content = document.getElementById("contentArea");

  const sections = {

    home: `
      <h1>Dashboard</h1>
      <div class="card">Total Sales Today: $350</div>
      <div class="card">Total Products: 120</div>
      <div class="card">Total Clients: 45</div>
    `,

    pos: `
      <h1>Point of Sale (POS)</h1>
      <div class="card">Cashier System Coming Soon...</div>
    `,

    categories: `
      <h1>Categories</h1>
      <div class="card">Vegetables</div>
      <div class="card">Drinks</div>
      <div class="card">Bakery</div>
    `,

    products: `
      <h1>Products</h1>
      <div class="card">Milk - $2</div>
      <div class="card">Bread - $1.5</div>
      <div class="card">Cola - $3</div>
    `,

    clients: `
      <h1>Clients</h1>
      <div class="card">Client A</div>
      <div class="card">Client B</div>
    `,

    suppliers: `
      <h1>Suppliers</h1>
      <div class="card">Supplier 1</div>
      <div class="card">Supplier 2</div>
    `,

    statistics: `
      <h1>Statistics</h1>
      <div class="card">Monthly Sales: $8,200</div>
      <div class="card">Best Product: Milk</div>
    `,

    credits: `
      <h1>Credits</h1>
      <div class="card">Total Credit Given: $1,200</div>
      <div class="card">Pending Payments: $450</div>
    `
  };

  content.innerHTML = sections[section];
}
