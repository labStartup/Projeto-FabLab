const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const dropdownToggle = document.querySelector('.dropdown > a');
const btnFlutuante = document.querySelector('#botao_flutuante');

// Menu Hamburguer 
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // Sempre esconde o botão ao abrir/fechar o menu
    btnFlutuante.style.opacity = '0';
    btnFlutuante.style.visibility = 'hidden';
    
    // Só mostra o botão novamente se estiver rolado e após 500ms
    if (!nav.classList.contains('active')) {
        setTimeout(() => {
            if (window.scrollY > 200) {
                btnFlutuante.style.opacity = '1';
                btnFlutuante.style.visibility = 'visible';
                btnFlutuante.style.transform = 'translateY(0)';
            }
        }, 500);
    }
});

// Dropdown no modo mobile
dropdownToggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 750) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
    }
});

// Realce de seção ao clicar no link
function highlightSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('fadeout');
        });
        targetSection.classList.add('fadeout');
        setTimeout(() => targetSection.classList.remove('fadeout'), 6000);
    }
}

// Tratamento de links com hash
if (window.location.hash) {
    highlightSection(window.location.hash.substring(1));
}

document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', function(event) {
        highlightSection(this.getAttribute('href').substring(1));
    });
});
  
// Botão flutuante
btnFlutuante.addEventListener('click', () => {
    window.scroll({ top: 0, behavior: 'smooth' });
});

// Controle de rolagem
window.addEventListener('scroll', () => {
    if (!nav.classList.contains('active')) {
        if (window.scrollY > 200) {
            btnFlutuante.style.opacity = '1';
            btnFlutuante.style.visibility = 'visible';
            btnFlutuante.style.transform = 'translateY(0)';
        } else {
            btnFlutuante.style.opacity = '0';
            btnFlutuante.style.visibility = 'hidden';
            btnFlutuante.style.transform = 'translateY(20px)';
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.getElementById('texto-digitacao');
    const tituloIntro = document.getElementById('titulo_intro');
    const fullText = tituloIntro.getAttribute('data-text');
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (charIndex < fullText.length && !isDeleting) {
            typingTextElement.innerHTML += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(type, 80);
        } else {
            setTimeout(resetText, 1500); // Aguarda 1.5 segundos antes de reiniciar
        }
    }

    function resetText() {
        charIndex = 0;
        typingTextElement.innerHTML = ''; // Limpa o texto
        type(); // Reinicia a digitação
    }

    type();
});
/* ===================================== Configurações do slide ================================== */

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slide img');
    const radios = document.querySelectorAll('input[name="radio-btn"]');

    images.forEach(img => {
        img.addEventListener('click', () => {
            let currentRadio = document.querySelector('input[name="radio-btn"]:checked');
            let nextRadio;

            for (let i = 0; i < radios.length; i++) {
                if (radios[i] === currentRadio) {
                    nextRadio = radios[i + 1] || radios[0]; // Avança para o próximo ou volta para o primeiro
                    break;
                }
            }
            nextRadio.checked = true;
        });
    });
});