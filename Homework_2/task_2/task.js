const menuSubList = document.querySelectorAll('.menu_sub')

console.log(menuSubList)

Array.from(menuSubList).forEach((el) => {
    let menuSubListHeader = el.closest('.menu__item').querySelector('.menu__link')
    menuSubListHeader.onclick = event => event.preventDefault()
    menuSubListHeader.addEventListener('click', () => {
        let otherActivSub = el.closest('.menu__item').closest('.menu_main').querySelector('.menu_active')
        if (otherActivSub !== el && otherActivSub !== null) {
            otherActivSub.classList.toggle('menu_active')
        }
        el.classList.toggle('menu_active')
    })
})