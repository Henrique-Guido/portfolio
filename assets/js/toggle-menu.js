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

let linkSelect = document.querySelectorAll('.mobileLink')

linkSelect.forEach((btn) => {

    btn.addEventListener('click', () => {
        toggleMenuNav.style.display = 'none'
    })

})