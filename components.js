// components.js - O Menu Mestre do LifeOS
const sidebarHTML = `
    <div id="mobile-overlay" class="fixed inset-0 bg-black/50 z-40 hidden md:hidden backdrop-blur-sm transition-opacity"></div>
    
    <aside id="sidebar-menu" class="fixed md:static inset-y-0 left-0 z-50 w-72 bg-panel border-r border-theme flex flex-col h-screen">
        
        <div class="p-6 flex items-center justify-between border-b border-theme shrink-0 h-[88px]">
            <h1 class="font-black text-blue-500 uppercase tracking-tighter text-2xl logo-text">
                <span class="logo-icon text-3xl">L</span>
                <span class="logo-full">Life<span class="text-strong">OS</span></span>
            </h1>
            
            <button id="toggle-desktop-menu" class="hidden md:block text-muted hover:text-blue-500 text-xl transition-colors" title="Expandir/Recolher">
                <i class="fa-solid fa-bars-staggered"></i>
            </button>
            
            <button id="close-mobile-menu" class="md:hidden text-muted hover:text-red-500 text-2xl transition-colors">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <div class="flex-1 overflow-y-auto pb-8 custom-scrollbar">
            
            <p class="section-label text-xs font-black text-muted uppercase tracking-[0.2em] mx-6 mt-8 mb-3">Produtividade</p>
            <nav class="space-y-1 px-3">
                <a href="index.html" class="nav-link"><i class="fa-solid fa-bolt w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Visão Geral</span></a>
                <a href="metas.html" class="nav-link"><i class="fa-solid fa-bullseye w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Metas e Objetivos</span></a>
                <a href="planejadores.html" class="nav-link"><i class="fa-solid fa-calendar-days w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Planejadores</span></a>
                <a href="tarefas.html" class="nav-link"><i class="fa-solid fa-list-check w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Tarefas</span></a>
                <a href="compromissos.html" class="nav-link"><i class="fa-solid fa-clock w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Compromissos</span></a>
                <a href="anotacoes.html" class="nav-link"><i class="fa-solid fa-pen-nib w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Anotações</span></a>
                <a href="rotinas.html" class="nav-link"><i class="fa-solid fa-rotate w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Rotinas e Hábitos</span></a>
            </nav>

            <p class="section-label text-xs font-black text-blue-500 uppercase tracking-[0.2em] mx-6 mt-8 mb-3">Áreas da Vida</p>
            <nav class="space-y-1 px-3">
                <a href="autocuidado.html" class="nav-link"><i class="fa-solid fa-spa w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Autocuidado</span></a>
                <a href="saude.html" class="nav-link"><i class="fa-solid fa-heart-pulse w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Saúde</span></a>
                <a href="estudos.html" class="nav-link"><i class="fa-solid fa-book-open w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Estudos</span></a>
                <a href="garagem.html" class="nav-link"><i class="fa-solid fa-motorcycle w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Moto/Garagem</span></a>
                <a href="casa.html" class="nav-link"><i class="fa-solid fa-house-user w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Casa</span></a>
                <a href="hobbies.html" class="nav-link"><i class="fa-solid fa-gamepad w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Hobbies</span></a>
                <a href="financeiro.html" class="nav-link"><i class="fa-solid fa-wallet w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Financeiro</span></a>
            </nav>

            <p class="section-label text-xs font-black text-purple-500 uppercase tracking-[0.2em] mx-6 mt-8 mb-3">Profissional</p>
            <nav class="space-y-1 px-3">
                <a href="visao_pro.html" class="nav-link"><i class="fa-solid fa-briefcase w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Visão Geral Pro</span></a>
                <a href="alunos.html" class="nav-link"><i class="fa-solid fa-users w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Central de Alunos</span></a>
                <a href="turmas.html" class="nav-link"><i class="fa-solid fa-chalkboard-user w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Aulas/Turmas</span></a>
                <a href="marketing.html" class="nav-link"><i class="fa-solid fa-bullhorn w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Divulgação</span></a>
                <a href="eventos.html" class="nav-link"><i class="fa-solid fa-cake-candles w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Recreações/Eventos</span></a>
                <a href="olx.html" class="nav-link"><i class="fa-solid fa-shop w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Vendas na OLX</span></a>
                <a href="afiliados.html" class="nav-link"><i class="fa-solid fa-link w-6 text-center text-lg"></i> <span class="menu-text font-semibold">Afiliados</span></a>
            </nav>
        </div>
        
        <div class="p-4 border-t border-theme shrink-0 bg-panel flex justify-center h-[72px]">
            <div class="flex items-center gap-3 w-full justify-center md:justify-start">
                <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-black shrink-0">L12</div>
                <div class="user-info">
                    <p class="text-sm font-bold text-strong">Hugo</p>
                    <p class="text-[10px] text-muted uppercase tracking-widest font-bold">Mestre da Execução</p>
                </div>
            </div>
        </div>
    </aside>
`;

document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('sidebar-container');
    
    // 1. INJETA O HTML DO MENU
    if (sidebarContainer) {
        sidebarContainer.innerHTML = sidebarHTML;
        
        // 2. LÓGICA DE MARCAR A PÁGINA ATIVA
        const currentPage = window.location.pathname.split("/").pop() || 'index.html';
        const navLinks = sidebarContainer.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            // Formatação base para todos os links
            link.className = "nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all";
            
            if (linkHref === currentPage) {
                // Estilo Ativo
                link.classList.add('bg-blue-500/10', 'text-blue-500', 'font-black');
            } else {
                // Estilo Inativo
                link.classList.add('text-muted', 'hover:bg-black/5', 'dark:hover:bg-white/5', 'hover:text-strong');
            }
        });

        // 3. LÓGICA MOBILE (Abrir/Fechar com o Hamburger)
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const sidebarMenu = document.getElementById('sidebar-menu');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const closeMobileBtn = document.getElementById('close-mobile-menu');

        function toggleMobileMenu() {
            sidebarMenu.classList.toggle('-translate-x-full');
            mobileOverlay.classList.toggle('hidden');
        }

        if(mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        if(closeMobileBtn) closeMobileBtn.addEventListener('click', toggleMobileMenu);
        if(mobileOverlay) mobileOverlay.addEventListener('click', toggleMobileMenu);

        // 4. LÓGICA DESKTOP (Expandir/Recolher Sidebar)
        const toggleDesktopBtn = document.getElementById('toggle-desktop-menu');
        
        // Verifica se o usuário já tinha deixado o menu encolhido na última visita
        const isCollapsed = localStorage.getItem('lifeos_sidebar_collapsed') === 'true';
        if(isCollapsed) {
            sidebarMenu.classList.add('sidebar-collapsed');
        }

        if(toggleDesktopBtn) {
            toggleDesktopBtn.addEventListener('click', () => {
                sidebarMenu.classList.toggle('sidebar-collapsed');
                // Salva a preferência
                localStorage.setItem('lifeos_sidebar_collapsed', sidebarMenu.classList.contains('sidebar-collapsed'));
            });
        }
    }
});