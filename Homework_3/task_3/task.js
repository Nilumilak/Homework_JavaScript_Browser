const allTabs = Array.from(document.querySelectorAll('.tab'))
const allTabContent = Array.from(document.querySelectorAll('.tab__content'))
let currentTab = document.querySelector('.tab_active')
let currentContent = document.querySelector('.tab__content_active')

allTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    currentTab.classList.remove('tab_active')
    currentContent.classList.remove('tab__content_active')
    tab.classList.add('tab_active')
    allTabContent[allTabs.indexOf(tab)].classList.add('tab__content_active')
    currentTab = tab
    currentContent = allTabContent[allTabs.indexOf(tab)]
  })
})
