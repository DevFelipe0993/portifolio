
let btnMenu = document.getElementById('btn-me')
let menu = document.getElementById('menu-mob')
let overlay = document.getElementById('over-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('open-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('open-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('open-menu')
})