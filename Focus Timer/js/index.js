const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAdd = document.querySelector('.add')
const buttonDecr = document.querySelector('.decr')

const buttonForest = document.querySelector('.forest')
const buttonForestStop = document.querySelector('.forest-stop')
const buttonRain = document.querySelector('.rain')
const buttonRainStop = document.querySelector('.rain-stop')
const buttonCoffe = document.querySelector('.coffe')
const buttonCoffeStop = document.querySelector('.coffe-stop')
const buttonFireplace = document.querySelector('.fireplace')
const buttonFireplaceStop = document.querySelector('.fireplace-stop')

import Timer from "./timer.js"

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
})

buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    timer.countdown()

})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    timer.hold()
})

buttonStop.addEventListener('click', function(){
    timer.reset()
})

buttonAdd.addEventListener('click', function() {
    timer.add5Minutes()

})

buttonDecr.addEventListener('click', function() {
    timer.dec5Minutes()
})

buttonForest.addEventListener('click', function() {
    buttonForest.classList.add('hide')
    buttonForestStop.classList.remove('hide')
})

buttonForestStop.addEventListener('click', function() {
    buttonForestStop.classList.add('hide')
    buttonForest.classList.remove('hide')
})

buttonCoffe.addEventListener('click', function() {
    buttonCoffe.classList.add('hide')
    buttonCoffeStop.classList.remove('hide')
})
 
buttonCoffeStop.addEventListener('click', function() {
    buttonCoffeStop.classList.add('hide')
    buttonCoffe.classList.remove('hide')
})

buttonRain.addEventListener('click', function() {
    buttonRain.classList.add('hide')
    buttonRainStop.classList.remove('hide')
})

buttonRainStop.addEventListener('click', function() {
    buttonRainStop.classList.add('hide')
    buttonRain.classList.remove('hide')
})

buttonFireplace.addEventListener('click', function() {
    buttonFireplace.classList.add('hide')
    buttonFireplaceStop.classList.remove('hide')
})

buttonFireplaceStop.addEventListener('click', function() {
    buttonFireplaceStop.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    
})

