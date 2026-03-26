document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DE TEMAS (Dark/Light) ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');

    // Recupera o tema salvo ou padrão escuro
    const savedTheme = localStorage.getItem('lifeos_theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('lifeos_theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fa-solid fa-moon'; // Ícone para escuro
        } else {
            themeIcon.className = 'fa-solid fa-sun text-yellow-500'; // Ícone para claro
        }
    }

    // --- LÓGICA DA SIDEBAR RESPONSIVA (Mobile/Tablet) ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobile-overlay');

    function toggleMobileMenu() {
        sidebar.classList.toggle('-translate-x-full'); // Desliza a sidebar
        mobileOverlay.classList.toggle('hidden'); // Mostra/esconde o fundo
    }

    if(mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    if(closeMobileMenu) closeMobileMenu.addEventListener('click', toggleMobileMenu);
    if(mobileOverlay) mobileOverlay.addEventListener('click', toggleMobileMenu);
});