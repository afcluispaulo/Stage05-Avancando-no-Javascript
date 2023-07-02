const theme = document.querySelector(".default")
const buttonDark = document.querySelector(".dark-theme")
const buttonWhite = document.querySelector(".white-theme")

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAdd = document.querySelector('.add')
const buttonDecr = document.querySelector('.decr')

const buttonBox = document.querySelector('.buttonBox') // falta mudar o nome da variável
const bbRain = document.getElementById("buttonBoxRain")
const bbCoffe = document.getElementById("buttonBoxCoffe")
const bbFireplace = document.getElementById("buttonBoxFireplace")

const borderStop = document.querySelector('.stop')

const buttonForest = document.querySelector('.forest')
const buttonForestStop = document.querySelector('.forest-stop')
const buttonRain = document.querySelector('.rain')
const buttonRainStop = document.querySelector('.rain-stop')
const buttonCoffe = document.querySelector('.coffe')
const buttonCoffeStop = document.querySelector('.coffe-stop')
const buttonFireplace = document.querySelector('.fireplace')
const buttonFireplaceStop = document.querySelector('.fireplace-stop')

const slideBar1 = document.querySelector('.test')
const rainSlide = document.getElementById("rainSlide")
const coffeSlide = document.getElementById("coffeSlide")
const fireplaceSlide = document.getElementById("fireplaceSlide")

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

export {
    theme,
    buttonWhite,
    buttonDark,

    minutesDisplay,
    secondsDisplay,

    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAdd,
    buttonDecr,

    buttonForest,
    buttonForestStop,
    buttonRain,
    buttonRainStop,
    buttonCoffe,
    buttonCoffeStop,
    buttonFireplace,
    buttonFireplaceStop,

    buttonBox,
    bbRain,
    bbCoffe,
    bbFireplace,

    slideBar1,
    rainSlide,
    coffeSlide,
    fireplaceSlide,

    borderStop,

    minutes,
    seconds,
}
