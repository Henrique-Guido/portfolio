let toggleMenu = document.getElementById('toggleMenu')
let toggleMenuNav = document.getElementById('toggleMenuNav')

toggleMenuNav.style.display = 'none'

toggleMenu.addEventListener('click', () => {

    if (toggleMenuNav.style.display == 'none') {
        toggleMenuNav.style.display = 'flex'
    } else {
        toggleMenuNav.style.display = 'none'
    }

})