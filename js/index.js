const menuHamburguer = document.querySelector('.hamburger');
const navegacao = document.querySelector('.nav');
const alternarDropdown = document.querySelector('.dropdown > a');
const botaoFlutuante = document.querySelector('#botao_flutuante');

// Menu Hamburguer 
menuHamburguer.addEventListener('click', () => {
    navegacao.classList.toggle('active');
    
    // Sempre esconde o botão ao abrir/fechar o menu
    botaoFlutuante.style.opacity = '0';
    botaoFlutuante.style.visibility = 'hidden';
    
    // Só mostra o botão novamente se estiver rolado e após 500ms
    if (!navegacao.classList.contains('active')) {
        setTimeout(() => {
            if (window.scrollY > 200) {
                botaoFlutuante.style.opacity = '1';
                botaoFlutuante.style.visibility = 'visible';
                botaoFlutuante.style.transform = 'translateY(0)';
            }
        }, 500);
    }
});

// Dropdown no modo mobile
alternarDropdown.addEventListener('click', function(e) {
    // Impede o comportamento padrão do link se estiver no modo mobile
    if (window.innerWidth <= 750) {
        e.preventDefault();
        // Alterna a classe 'active' no elemento pai (li) para mostrar/esconder o dropdown
        this.parentElement.classList.toggle('active');
    }
});

// Realce de seção ao clicar no link
function realcarSecao(idAlvo) {
    const secaoAlvo = document.getElementById(idAlvo);
    if (secaoAlvo) {
        // Remove a classe 'fadeout' de todas as seções
        document.querySelectorAll('section').forEach(secao => {
            secao.classList.remove('fadeout');
        });
        secaoAlvo.classList.add('fadeout');
        setTimeout(() => secaoAlvo.classList.remove('fadeout'), 6000);
    }
}

// Tratamento de links com hash na URL
if (window.location.hash) {
    // Chama a função para realçar a seção correspondente ao hash
    realcarSecao(window.location.hash.substring(1));
}

// Adiciona event listeners para links no menu dropdown
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Chama a função para realçar a seção ao clicar no link
        realcarSecao(this.getAttribute('href').substring(1));
    });
});
  
// Botão flutuante para voltar ao topo
botaoFlutuante.addEventListener('click', () => {
    // Rola suavemente para o topo da página
    window.scroll({ top: 0, behavior: 'smooth' });
});

// Controle de rolagem da página
window.addEventListener('scroll', () => {
    // Verifica se o menu não está ativo (aberto)
    if (!navegacao.classList.contains('active')) {
        // Se a página tem uma rolagem de mais de 200 pixels
        if (window.scrollY > 200) {
            // Mostra o botão flutuante
            botaoFlutuante.style.opacity = '1';
            botaoFlutuante.style.visibility = 'visible';
            botaoFlutuante.style.transform = 'translateY(0)';
        } else {
            // Esconde o botão flutuante
            botaoFlutuante.style.opacity = '0';
            botaoFlutuante.style.visibility = 'hidden';
            botaoFlutuante.style.transform = 'translateY(20px)';
        }
    }
})

// Evento disparado quando o DOM está completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    const elementoTextoDigitacao = document.getElementById('texto-digitacao');
    const tituloIntro = document.getElementById('titulo_intro');
    const textoCompleto = tituloIntro.getAttribute('data-text');
    let indiceCaracter = 0;
    let estaApagando = false;

    // Função para simular o efeito de digitação
    function digitar() {
        // Se ainda há caracteres para digitar e não estamos "apagando"
        if (indiceCaracter < textoCompleto.length && !estaApagando) {
            elementoTextoDigitacao.innerHTML += textoCompleto.charAt(indiceCaracter); // Adiciona o próximo caractere
            indiceCaracter++; // Incrementa o índice
            setTimeout(digitar, 120); // Chama a função novamente após o tempo estimado
        } else {
            setTimeout(resetarTexto, 15000); // Chama a função para resetar o texto após o tempo estimado
        }
    }

    // Função para resetar o texto
    function resetarTexto() {
        indiceCaracter = 0;
        elementoTextoDigitacao.innerHTML = '' // Limpa o texto
        digitar(); // Reinicia o efeito de digitação
    }

    digitar(); // Inicia o efeito de digitação
});

/* ===================================== Configurações de slides ================================== */

// Slide do escopo principal
document.addEventListener('DOMContentLoaded', function() {
    const imagens = document.querySelectorAll('.slide img');
    const botoesRadio = document.querySelectorAll('input[name="radio-btn"]');

    // Adiciona um event listener para cada imagem do slide
    imagens.forEach(img => {
        img.addEventListener('click', () => {
            let botaoRadioAtual = document.querySelector('input[name="radio-btn"]:checked');
            let proximoBotaoRadio;

            // Encontra o próximo botão de rádio na sequência
            for (let i = 0; i < botoesRadio.length; i++) {
                if (botoesRadio[i] === botaoRadioAtual) {
                    proximoBotaoRadio = botoesRadio[i + 1] || botoesRadio[0] // Avança para o próximo ou volta para o primeiro
                    break;
                }
            }
            proximoBotaoRadio.checked = true; // Seleciona o próximo botão de rádio
        })
    })
})

// Slide do topo
document.addEventListener('DOMContentLoaded', function() {
    const slidesTopo = document.querySelectorAll('.slide-topo');
    let slideAtual = 0;

    // Função para mostrar o slide atual
    function mostrarSlide() {
        slidesTopo.forEach(slide => slide.classList.remove('active')) // Remove 'active' de todos os slides
        slidesTopo[slideAtual].classList.add('active') // Adiciona 'active' ao slide atual
    }

    // Função para avançar para o próximo slide
    function proximoSlide() {
        slideAtual = (slideAtual + 1) % slidesTopo.length // Calcula o índice do próximo slide
        mostrarSlide() // Mostra o próximo slide
    }

    mostrarSlide() // Mostra o primeiro slide
    setInterval(proximoSlide, 5000) // Inicia a troca automática de slides a cada tempo escolhido
})