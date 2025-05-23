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
    const images = document.querySelectorAll('img');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close-modal');

    images.forEach(img => {
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
