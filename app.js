let hamburger = document.querySelector('#mobile__menu')
let navmenu = document.querySelector('.navbar__menu')
let hamburgers = document.querySelector('.navbar__toggle')

hamburgers.addEventListener('click', function() {
 hamburger.classList.toggle('isactive')
 navmenu.classList.toggle('active')
})