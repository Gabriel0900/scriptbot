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
