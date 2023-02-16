const allSlidesList = Array.from(document.querySelectorAll('.slider__item'))
let currentSlide = document.querySelector('.slider__item_active')

const buttons = Array.from(document.querySelectorAll('.slider__arrow'))

const allDotsList = Array.from(document.querySelectorAll('.slider__dot'))
let currentDot = document.querySelector('.slider__dot_active')

let index = 0

function activeElToggle() {
    currentSlide.classList.toggle('slider__item_active')
    currentDot.classList.toggle('slider__dot_active')
    allSlidesList[index].classList.toggle('slider__item_active')
    allDotsList[index].classList.toggle('slider__dot_active')
    currentSlide = document.querySelector('.slider__item_active')
    currentDot = document.querySelector('.slider__dot_active')
}

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let currentIndex = allSlidesList.indexOf(currentSlide)

        if (Array.from(event.target.classList).includes('slider__arrow_prev')) {
            index = currentIndex - 1 >= 0 ? currentIndex - 1 : allSlidesList.length - 1
        } else {
            index = currentIndex + 1 < allSlidesList.length ? currentIndex + 1 : 0
        }

        activeElToggle()
    })
})

allDotsList.forEach((dot) => {
    dot.addEventListener('click', () => {
        index = allDotsList.indexOf(dot)

        activeElToggle()
    })
})
