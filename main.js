const menuBtm = document.querySelector('.menu__btm')
const menu = document.querySelector('.menu')

menuBtm.addEventListener('click', ()=> {
    menu.classList.toggle('menu--open')
})
