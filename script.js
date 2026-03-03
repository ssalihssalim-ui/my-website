document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const menu = document.getElementById('menu');

    // Open menu
    menuBtn.addEventListener('click', () => {
        menu.classList.add('show');
    });

    // Close menu
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});
