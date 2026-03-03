function openMenu() {
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

function showSection(section) {
  const content = document.getElementById("contentArea");

  switch(section) {
    case 'home':
      content.innerHTML = "<h1>Home</h1><div class='card'>Welcome to the Minimarket System.</div>";
      break;

    case 'pos':
      content.innerHTML = "<h1>POS</h1><div class='card'>Point of Sale System.</div>";
      break;

    case 'categories':
      content.innerHTML = "<h1>Categories</h1><div class='card'>Manage product categories here.</div>";
      break;

    case 'products':
      content.innerHTML = "<h1>Products</h1><div class='card'>Manage products here.</div>";
      break;

    case 'clients':
      content.innerHTML = "<h1>Clients</h1><div class='card'>Manage clients here.</div>";
      break;

    case 'suppliers':
      content.innerHTML = "<h1>Suppliers</h1><div class='card'>Manage suppliers here.</div>";
      break;

    case 'statistics':
      content.innerHTML = "<h1>Statistics</h1><div class='card'>Sales statistics will appear here.</div>";
      break;

    case 'credits':
      content.innerHTML = "<h1>Credits</h1><div class='card'>Developed for Minimarket System.</div>";
      break;
  }

  closeMenu();
}
