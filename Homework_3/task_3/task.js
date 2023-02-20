const allContainers = Array.from(document.querySelectorAll('.tabs'))


class Tabs {
  constructor(container) {
    this.allTabs = Array.from(container.querySelectorAll('.tab'))
    this.allTabContent = Array.from(container.querySelectorAll('.tab__content'))
    this.currentTab = container.querySelector('.tab_active')
    this.currentContent = container.querySelector('.tab__content_active')

    this.allTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        this.currentTab.classList.remove('tab_active')
        this.currentContent.classList.remove('tab__content_active')
        tab.classList.add('tab_active')
        this.allTabContent[this.allTabs.indexOf(tab)].classList.add('tab__content_active')
        this.currentTab = tab
        this.currentContent = this.allTabContent[this.allTabs.indexOf(tab)]
      })
    })
  }

}


allContainers.forEach((container) => { new Tabs(container) })