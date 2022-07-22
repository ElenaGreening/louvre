const hamburger = document.querySelector('.hamburger')
const overlay = document.querySelector('.wrap-overlay')
const menu = document.querySelector('.hamburger-menu-wrapper')
const line = document.querySelector('.hamburger__line')

    if(hamburger) {
        hamburger.addEventListener('click', function (e){
            document.body.classList.toggle('_lock')
            menu.classList.toggle('_active')
            hamburger.classList.toggle('_active')
            line.classList.toggle('_active')
            overlay.classList.toggle('_active')

        })
    }
if(overlay){
    overlay.addEventListener('click', function (e){
        document.body.classList.remove('_lock')
        menu.classList.remove('_active')
        hamburger.classList.remove('_active')
        line.classList.remove('_active')
        overlay.classList.remove('_active')
    })
}