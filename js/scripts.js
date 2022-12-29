const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const carouselElement = document.querySelector('.carousel')

const currentSlide = 0;

for (let index = 0; index < images.length; index++) {
    console.log(images[index])

    carouselElement.innerHTML += `<div class="slide">
                                    <img src="${images[index]}">
                                </div>`;
}

const allSlides = document.querySelectorAll('.slide')
console.log('allSlides', allSlides, typeof allSlides)
allSlides[currentSlide].classList.add('current')