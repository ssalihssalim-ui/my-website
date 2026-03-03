// Get the menu button and menu
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Add click event
menuBtn.addEventListener('click', function() {
    // Toggle the 'show' class on the menu
    menu.classList.toggle('show');
});
