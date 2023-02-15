const allHoles = document.getElementsByClassName('hole')
const winCounterText = document.getElementById('dead')
const looseCounterText = document.getElementById('lost')

let winCounter = 0
let looseCounter = 0

const getHole = index => document.getElementById(`hole${index}`)

const catchBeaver = function(element) {
    if (element.className === 'hole hole_has-mole') {
        winCounter++
        winCounterText.textContent = winCounter
    } else {
        looseCounter++
        looseCounterText.textContent = looseCounter
    }

    if (winCounter === 10) {
        alert('Вы выиграли!')
    } else if (looseCounter === 5) {
        alert('Вы проиграли!')
    }
}

for (let i = 1; i <= allHoles.length; i++) {
    let hole = (() => document.getElementById(`hole${i}`))()
    hole.onclick = () => catchBeaver(hole)
}