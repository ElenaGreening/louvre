const dots = document.querySelectorAll('.slider-button')
const slides = document.querySelectorAll('.welcome-slider-img')

let index = 0;

const activeDot = m => {
    for (let dot of dots) {
        dot.classList.remove('active')
    }
    dots[m].classList.add('active')
}

const  activeSlide = n => {
    for( let slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0;
        activeSlide(index)
        activeDot(index)
    } else {
        index++;
        activeSlide(index)
        activeDot(index)
    }
}

const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1;
        activeSlide(index)
        activeDot(index)

    } else {
        index--;
        activeSlide(index)
        activeDot(index)
    }
}

const next = document.getElementById('next').addEventListener('click', nextSlide)
const prev = document.getElementById('prev').addEventListener('click', prevSlide)


for (let i = 0; i < slides.length; i++){

}
