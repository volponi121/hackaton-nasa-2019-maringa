function destruirMapa() {
    map.remove()
}

document.addEventListener('backPage', function() {
    closeMenu('menu')
    destruirMapa()
    item.style.visibility = 'visible'
})

document.addEventListener('openMenu', function() {
    map.setClickable(false)
})

document.addEventListener('closeMenu', function() {
    map.setClickable(true)
})