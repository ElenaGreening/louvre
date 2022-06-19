let bookingPopup = document.querySelector('.book-ticket-popup')
let blur = document.querySelector('.blur')
let body = document.body;
function closePopup () {
    blur.style.display = 'none'
    body.style.overflowY = 'auto'
}

document.querySelector('.close-popup').addEventListener('click', closePopup)
document.querySelector('.buy-button').addEventListener('click', function (){
    blur.style.display = 'flex'
    body.style.overflowY = 'hidden'
})