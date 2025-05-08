const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const dropdownToggle = document.querySelector('.dropdown > a')
const btnFlutuante = document.querySelector('#botao_flutuante')


// Menu Hamburguer 
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active')
    
    if (nav.classList.contains('active')) {
        btnFlutuante.style.opacity = '0'
        btnFlutuante.style.visibility = 'hidden'
        btnFlutuante.style.transform = 'translateY(20px)'
    } else {
        btnFlutuante.style.opacity = '1'
        btnFlutuante.style.visibility = 'visible'
        btnFlutuante.style.transform = 'translateY(0)'
    }
})

// Dropdown no modo mobile
dropdownToggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 750) {
        e.preventDefault()
        this.parentElement.classList.toggle('active')
    }
})

// Realce de seção ao clicar no link ou ao carregar a página com um hash
function highlightSection(targetId) {
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        // Remove qualquer classe 'fadeout' existente
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('fadeout');
        });

        targetSection.classList.add('fadeout'); // Adiciona a classe para ativar o realce

        // Remove a classe após a animação terminar (1s definido no CSS)
        setTimeout(() => {
            targetSection.classList.remove('fadeout');
        }, 6000);
    }
}

// Código para lidar com links externos - Como acessar "seções" das páginas externas, por exemplo
const hash = window.location.hash.substring(1)

if (hash) { highlightSection(hash) }

const links = document.querySelectorAll('.dropdown-menu a')

links.forEach(link => {
    link.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href').substring(1)
        highlightSection(targetId)
    })
})
  
// Botão flutuante
document.querySelector('#botao_flutuante').addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })

// Mostrar ou ocultar botão conforme rolagem
let btnFlutuanteVisivel = false;

// Mostra ou oculta conforme rolagem
window.addEventListener('scroll', () => {
  if (!nav.classList.contains('active')) { // Só executa se o menu NÃO estiver aberto
    if (window.scrollY > 200 && !btnFlutuanteVisivel) {
      btnFlutuante.style.opacity = '1'
      btnFlutuante.style.visibility = 'visible'
      btnFlutuante.style.transform = 'translateY(0)'
      btnFlutuanteVisivel = true;
    } else if (window.scrollY <= 300 && btnFlutuanteVisivel) {
      btnFlutuante.style.opacity = '0'
      btnFlutuante.style.visibility = 'hidden'
      btnFlutuante.style.transform = 'translateY(20px)'
      btnFlutuanteVisivel = false;
    }
  }
})
