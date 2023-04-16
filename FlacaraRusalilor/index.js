/*emisiuni*/
const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
slidesLength = slideRight.querySelector('div').length

let actveSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight  = sliderContainer.clientHeight
    if(direction === 'up'){
        actveSlideIndex++
        if(actveSlideIndex > slidesLength -1){
            actveSlideIndex = 0
        }
    }else if(direction === 'down'){
        actveSlideIndex--
        if(actveSlideIndex < 0){
            actveSlideIndex = slidesLength - 1
        }
    }
    slideRight.style.transform = `translateY(-${actveSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${actveSlideIndex * sliderHeight}px)`

}