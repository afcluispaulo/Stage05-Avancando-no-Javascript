const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let xAttempts = 0

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

sortNumber()

if (xAttempts == 0) {
    console.log(`Primeiro número sorteado: ${randomNumber}`)
}

// funções callback
function handleTryClick(event) {
    event.preventDefault()

    xAttempts ++

    console.log(`Quantidade de tentativas: ${xAttempts}`)

    total.innerText=`Total de tentativas: ${xAttempts}`

    const inputNumber = document.querySelector("#inputNumber")


    if(Number(inputNumber.value) == randomNumber) { 
        toggleScreen()

        screen2.querySelector("h2").innerText =`Acertou em ${xAttempts} tentativas`

        sortNumber()

        console.log(`Novo número sorteado: ${randomNumber} `)
    }

    
    inputNumber.value = ""
    
    if (xAttempts > 10) {
        handleResetClick()

        sortNumber()

        screen2.querySelector("h2").innerText =`ERRO! Você excedeu a quantidade de tentativas!`
        
        console.log(`Novo número sorteado: ${randomNumber} `)
    }


}
 
function handleResetClick() {
    toggleScreen()

    xAttempts = 0
    
    total.innerText = "Total de tentativas: 0"
    
}

function toggleScreen()  {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    
}

function sortNumber() {
    randomNumber = Math.round(Math.random() * 10)
}

