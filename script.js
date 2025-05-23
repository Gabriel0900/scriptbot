// Adicione aqui seus scripts JavaScript personalizados
// Exemplo: Menu mobile toggle

document.addEventListener('DOMContentLoaded', function() {
    // Corrigido o seletor para o botão do menu mobile
    const menuBtn = document.querySelector('button.md\\:hidden');
    const navLinks = document.querySelector('nav .md\\:flex');
    // Fallback para caso o seletor acima não funcione (Tailwind pode remover classes em prod)
    const fallbackMenuBtn = document.querySelector('button');
    const fallbackNavLinks = document.querySelector('nav div');
    const btn = menuBtn || fallbackMenuBtn;
    const links = navLinks || fallbackNavLinks;
    if(btn && links) {
        btn.addEventListener('click', function() {
            links.classList.toggle('hidden');
        });
    }
});

// Função para ampliar imagens ao clicar
function enableImageZoom() {
    const images = Array.from(document.querySelectorAll('img'));
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close-modal');

    // Não aplicar zoom na imagem do modal
    images.filter(img => img.id !== 'modal-img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function (e) {
            e.stopPropagation();
            modal.classList.remove('hidden');
            modalImg.src = img.src;
            modalImg.alt = img.alt || 'Imagem ampliada';
        });
    });

    // Fechar ao clicar no X
    closeModal.addEventListener('click', function () {
        modal.classList.add('hidden');
        modalImg.src = '';
    });
    // Fechar ao clicar fora da imagem
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modalImg.src = '';
        }
    });
}

document.addEventListener('DOMContentLoaded', enableImageZoom);

document.addEventListener('DOMContentLoaded', function() {
    // Navigation dots logic (only if elements exist)
    const presentation = document.getElementById('presentation');
    const navDots = document.getElementById('navDots');
    const slides = presentation ? presentation.querySelectorAll('.slide') : [];
    if (presentation && navDots && slides.length > 0) {
        navDots.innerHTML = '';
        // Create navigation dots
        slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.className = 'nav-dot';
            dot.dataset.index = index;
            dot.addEventListener('click', () => {
                slide.scrollIntoView({ behavior: 'smooth' });
            });
            navDots.appendChild(dot);
        });
        // Update active dot on scroll
        window.addEventListener('scroll', () => {
            slides.forEach((slide, index) => {
                const rect = slide.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.3 && rect.bottom > window.innerHeight * 0.3) {
                    document.querySelectorAll('.nav-dot').forEach(dot => dot.classList.remove('active'));
                    const activeDot = document.querySelector(`.nav-dot[data-index="${index}"]`);
                    if (activeDot) activeDot.classList.add('active');
                }
            });
        });
        // Set first dot as active initially
        if (navDots.firstChild) navDots.firstChild.classList.add('active');
    }

    // Mobile menu: close on link click
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a, button').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Parallax effect for backgrounds
    window.addEventListener('scroll', function() {
        document.querySelectorAll('.hexagon-pattern, .circuit-pattern').forEach(el => {
            const offset = window.scrollY * 0.2;
            el.style.backgroundPosition = `center ${offset}px`;
        });
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}
// Fullscreen logic
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        // Tenta fullscreen no elemento principal do conteúdo, se existir
        const main = document.querySelector('body');
        if (main && main.requestFullscreen) {
            main.requestFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
const fullscreenBtn = document.getElementById('fullscreen-btn');
const fullscreenBtnMobile = document.getElementById('fullscreen-btn-mobile');
if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);
if (fullscreenBtnMobile) fullscreenBtnMobile.addEventListener('click', toggleFullscreen);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
    }
});
