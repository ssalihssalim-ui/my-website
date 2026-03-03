function openMenu() {
  document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}

function showSection(section) {
  const content = document.getElementById("contentArea");
  content.innerHTML = "<h1>" + section.toUpperCase() + "</h1><p>Contenu de " + section + ".</p>";
  closeMenu();
}
