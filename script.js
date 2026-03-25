// script.js - COPIE E SUBSTITUA TUDO
document.addEventListener('DOMContentLoaded', () => {
    // 1. GESTÃO DO TEMA
    const htmlElement = document.documentElement;
    const themeBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('lifeos_theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeBtn) {
        themeBtn.onclick = () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('lifeos_theme', newTheme);
            updateThemeIcon(newTheme);
        };
    }
    function updateThemeIcon(theme) {
        if (!themeBtn) return;
        themeBtn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun text-orange-500"></i>';
    }

    // 2. CONTROLO DA SIDEBAR
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-menu');
    if (toggleBtn && sidebar) {
        toggleBtn.onclick = () => {
            sidebar.classList.toggle('sidebar-collapsed');
            localStorage.setItem('menuEstado', sidebar.classList.contains('sidebar-collapsed') ? 'fechado' : 'aberto');
        };
        if (localStorage.getItem('menuEstado') === 'fechado') sidebar.classList.add('sidebar-collapsed');
    }

    // 3. MODO FOCO (Botão Principal e Botão Flutuante)
    const focusBtn = document.getElementById('focus-toggle');
    const exitFocusBtn = document.getElementById('exit-focus-btn');
    const toggleFocus = () => { document.body.classList.toggle('focus-mode'); };
    
    if(focusBtn) focusBtn.onclick = toggleFocus;
    if(exitFocusBtn) exitFocusBtn.onclick = toggleFocus;

    // 4. MANUAL DE ROTINA (Colapsável)
    const guideHeader = document.getElementById('guide-header');
    const guideBody = document.getElementById('guide-body');
    const guideChevron = document.getElementById('guide-chevron');
    
    const guideDisplay = document.getElementById('guide-content');
    const guideInput = document.getElementById('guide-input');
    const btnEditGuide = document.getElementById('btn-edit-guide');
    const btnSaveGuide = document.getElementById('btn-save-guide');

    if (guideHeader && guideBody) {
        // Lógica de Mostrar/Recolher o card
        const isCollapsed = localStorage.getItem('lifeos_guide_collapsed') === 'true';
        if (isCollapsed) {
            guideBody.classList.add('hidden');
            if(guideChevron) guideChevron.classList.replace('fa-chevron-up', 'fa-chevron-down');
        }

        guideHeader.onclick = (e) => {
            // Ignora o clique se o utilizador clicar no botão de editar/salvar
            if(e.target.closest('button')) return;

            guideBody.classList.toggle('hidden');
            const collapsed = guideBody.classList.contains('hidden');
            localStorage.setItem('lifeos_guide_collapsed', collapsed);
            
            if(guideChevron) {
                if(collapsed) guideChevron.classList.replace('fa-chevron-up', 'fa-chevron-down');
                else guideChevron.classList.replace('fa-chevron-down', 'fa-chevron-up');
            }
        };

        // Lógica de Editar/Salvar texto
        if (guideDisplay && guideInput) {
            guideDisplay.innerText = localStorage.getItem('lifeos_manual') || "Clique no lápis para definir as suas instruções de rotina...";
            
            btnEditGuide.onclick = (e) => {
                e.stopPropagation(); // Evita que o card feche ao clicar no lápis
                guideInput.value = guideDisplay.innerText;
                guideDisplay.classList.add('hidden');
                guideInput.classList.remove('hidden');
                btnEditGuide.classList.add('hidden');
                btnSaveGuide.classList.remove('hidden');
            };
            
            btnSaveGuide.onclick = (e) => {
                e.stopPropagation(); // Evita que o card feche ao salvar
                localStorage.setItem('lifeos_manual', guideInput.value);
                guideDisplay.innerText = guideInput.value;
                guideDisplay.classList.remove('hidden');
                guideInput.classList.add('hidden');
                btnEditGuide.classList.remove('hidden');
                btnSaveGuide.classList.add('hidden');
            };
        }
    }
});