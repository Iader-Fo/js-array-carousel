const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const carouselElement = document.querySelector('.carousel')

for (let index = 0; index < images.length; index++) {
    console.log(images[index])

    carouselElement.innerHTML += `<div class="slide">
                                    <img src="${images[index]}">
                                </div>`;
}

const allSlides = document.querySelectorAll('.slide')
console.log('allSlides', allSlides, typeof allSlides)

allSlides[0].classList.add('current');

let currentSlide = 0;


const previousArrow = document.querySelector('.previous');
const nextArrow = document.querySelector('.next');

nextArrow.addEventListener('click',

    function (){

        console.log('cliccato su next');

        allSlides[currentSlide].classList.remove('current');
        currentSlide = currentSlide + 1;
        
        allSlides[currentSlide].classList.add('current');

        previousArrow.classList.remove('hidden');

        if (currentSlide == allSlides.length - 1){

            previousArrow.classList.add('hidden');
        }

        previousArrow.classList.remove('hidden')
    }

);


previousArrow.addEventListener ('click',

    function (){

        console.log('cliccato su previous');

        allSlides[currentSlide].classList.remove('current');
        currentSlide = currentSlide - 1;
        
        allSlides[currentSlide].classList.add('current');

        if (currentSlide == 0){

            previousArrow.classList.add('hidden');
        }
    }

);