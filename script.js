function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

function showSection(section) {
  const content = document.getElementById("contentArea");
  content.innerHTML = "<h1>" + section.toUpperCase() + "</h1><p>Contenu de " + section + ".</p>";
  toggleMenu();
}
