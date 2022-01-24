const slideContainer = document.querySelector('.container');
const right = document.querySelector('.right-slide');
const left = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = right.querySelectorAll('div').length;

let activeSlideIndex = 0;

left.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));


const changeSlide = (direction) => {
    const sliderHeight = slideContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } 
    else if (direction == 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    right.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    left.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
