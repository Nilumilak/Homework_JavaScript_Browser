const allLinks = Array.from(document.querySelectorAll('a'))
const menuHead = document.querySelector('.dropdown__value')
const dropList = document.querySelector('.dropdown__list')
const dropListItems = Array.from(document.getElementsByClassName('dropdown__item'))

allLinks.forEach((link) => {
    link.onclick = event => event.preventDefault()
})

menuHead.addEventListener('click', () => {
    dropList.classList.toggle('dropdown__list_active')
})

dropListItems.forEach((item) => {
    item.addEventListener('click', () => {
        menuHead.textContent = item.textContent
        dropList.classList.toggle('dropdown__list_active')
    })
})

