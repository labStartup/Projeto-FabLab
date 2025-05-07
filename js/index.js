const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const dropdownToggle = document.querySelector('.dropdown > a')

// Função direcionada ao menu "hamburger"
hamburger.addEventListener('click', () => nav.classList.toggle('active'))

// Dropdown no modo mmobile
dropdownToggle.addEventListener('click', function(e) {
  if (window.innerWidth <= 750) {
    e.preventDefault()
    this.parentElement.classList.toggle('active')
  }
})
