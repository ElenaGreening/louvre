const dots = document.querySelectorAll('.slider-button')
const slides = document.querySelectorAll('.welcome-slider-img')
let counter = document.querySelector('.slider-counter')
counter.innerText  = `01` + `|05`;
let index = 0;

const activeDot = m => {
    for (let dot of dots) {
        dot.classList.remove('_active')
    }
    dots[m].classList.add('_active')
}

const  activeSlide = n => {
    for( let slide of slides) {
        slide.classList.remove('_active')
    }
    slides[n].classList.add('_active')
}


const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0;
        activeSlide(index)
        activeDot(index)
        counter.innerText  = `0` + (index + 1) + `|05`;
    } else {
        index++;
        activeSlide(index)
        activeDot(index)
        counter.innerText  = `0` + (index + 1) + `|05`;
    }
}

const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1;
        activeSlide(index)
        activeDot(index)
        counter.innerText  = `0` + (index + 1) + `|05`;

    } else {
        index--;
        activeSlide(index)
        activeDot(index)
        counter.innerText =`0` + (index + 1) + `|05`;
    }
}



const next = document.getElementById('next').addEventListener('click', nextSlide)
const prev = document.getElementById('prev').addEventListener('click', prevSlide)


for(let slide of slides){
    slide.addEventListener('swiped-right', prevSlide )
    slide.addEventListener('swiped-left', nextSlide)
}



for (let i = 0; i < slides.length; i++){

}
