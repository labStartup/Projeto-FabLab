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

// Botão flutuante
btnFlutuante.addEventListener('click', function() {
    // Adicionando classe de animação
    this.classList.add('click-effect')
    
    setTimeout(() => {
        this.classList.remove('click-effect')
    }, 500)
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})