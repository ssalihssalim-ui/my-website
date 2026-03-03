document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const menuOverlay = document.getElementById('menu');

    // Open menu
    menuBtn.addEventListener('click', () => {
        menuOverlay.classList.add('show');
    });

    // Close menu
    closeBtn.addEventListener('click', () => {
        menuOverlay.classList.remove('show');
    });

    // Close menu when clicking outside menu items
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('show');
        }
    });
});
