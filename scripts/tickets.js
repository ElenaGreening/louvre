const inputBasic = document.querySelector('.counter-inputBasic')
let increaseButton = document.querySelector('.counter-buttonIncrBasic')
// inputBasic.innerHTML = '';
increaseButton.addEventListener('click', increase)
function increase () {
    let counter = counter+1
    console.log(counter)
}


