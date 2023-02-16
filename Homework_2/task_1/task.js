const modalMain = document.getElementById('modal_main')
const modalSuccess = document.getElementById('modal_success')
const modalClose = document.getElementsByClassName('modal__close_times')
const btnShowSuccess = document.querySelector('.show-success')

Array.from(modalClose).forEach(element => {
    element.addEventListener('click', () => {
        element.closest('.modal').style.display = 'none'
    })
})

btnShowSuccess.addEventListener('click', () => {
    modalMain.classList.remove('modal_active')
    modalSuccess.classList.add('modal_active')
})



