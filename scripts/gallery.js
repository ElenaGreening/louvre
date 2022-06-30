function shuffle(pictures) {
    pictures.sort(() => Math.random() - 0.5);

}
let pictures = [
    "assets/img/gallery/galery1.jpeg",
    "assets/img/gallery/galery2.jpeg",
    "assets/img/gallery/galery3.jpeg",
    "assets/img/gallery/galery4.jpeg",
    "assets/img/gallery/galery5.jpeg",
    "assets/img/gallery/galery6.jpeg",
    "assets/img/gallery/galery7.jpeg",
    "assets/img/gallery/galery8.jpeg",
    "assets/img/gallery/galery9.jpeg",
    "assets/img/gallery/galery10.jpeg",
    "assets/img/gallery/galery11.jpeg",
    "assets/img/gallery/galery12.jpeg",
    "assets/img/gallery/galery13.jpeg",
    "assets/img/gallery/galery14.jpeg",
    "assets/img/gallery/galery15.jpeg",]

shuffle(pictures)

let pictureCont = document.querySelector('.gallery-picture-inner-cont')
function makeGallery () {
    for (let i=0; i<pictures.length; i++){
        const img = document.createElement('img');
        img.classList.add('gallery-picture')
        img.src = pictures[i];
        img.alt = `galery1`;
        pictureCont.append(img);
    }
}

makeGallery()