// let close = document.getElementsByClassName('.close-popup')
let bookingPopup = document.querySelector('.book-ticket-popup')
let blur = document.querySelector('.blur')
function closePopup () {
    blur.style.display = 'none'
}

document.querySelector('.close-popup').addEventListener('click', closePopup)
document.querySelector('.buy-button').addEventListener('click', function (){
    blur.style.display = 'flex'
})