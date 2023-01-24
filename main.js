const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
const total = document.querySelector("#total")

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    console.log(e.key)
    if(e.key =='Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

console.log(randomNumber)

// funções callback
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) { 
        toggleScreen()
        screen2.querySelector("h2").innerText =`Acertou em ${xAttempts} tentativas`
    }

    total.innerText=`Total de tentativas: ${xAttempts}`
    inputNumber.value = ""
    xAttempts ++
    
    if (xAttempts > 11) {
        handleResetClick()
        screen2.querySelector("h2").innerText =`ERRO! Você excedeu a quantidade de tentativas!`
    }
}
 
function handleResetClick() {
    toggleScreen()
    xAttempts = 0
    randomNumber = Math.round(Math.random() * 10)
    total.innerText = `Total de tentativas: ${xAttempts}`
}

function toggleScreen()  {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
