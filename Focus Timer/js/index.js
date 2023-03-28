import Timer from "./timer.js"
import sounds from "./sounds.js"
import Controls from "./controls.js"

import {
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
} from "./elements.js"

const controls = Controls({
    buttonForest,
    buttonForestStop,
    buttonBox,
    slideBar1,
        
    buttonCoffe,
    buttonCoffeStop,
    bbCoffe,
    coffeSlide,

    buttonRain,
    buttonRainStop,
    bbRain,
    rainSlide,

    buttonFireplace,
    buttonFireplaceStop,
    bbFireplace,
    fireplaceSlide
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
})

const sound = sounds()

function forestAudioVolumeTest() {
    sound.forestAudioVolume()
}

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
    sound.forestAudioPlay()
    

    sound.fireplaceAudioPause()
    sound.rainAudioPause()
    sound.coffeAudioPause()

    controls.playForest()

})

buttonForestStop.addEventListener('click', function() {
    sound.forestAudioPause()

    controls.stopForest()
})

buttonRain.addEventListener('click', function() {    
    sound.rainAudioPlay()

    sound.forestAudioPause()
    sound.coffeAudioPause()
    sound.fireplaceAudioPause()

    controls.playRain()
})

buttonRainStop.addEventListener('click', function() {
    sound.rainAudioPause()

    controls.stopRain()
    
})

buttonCoffe.addEventListener('click', function() {
    sound.coffeAudioPlay()

    sound.forestAudioPause()
    sound.rainAudioPause()
    sound.fireplaceAudioPause()

    controls.playCoffe()
})
 
buttonCoffeStop.addEventListener('click', function() {
    sound.coffeAudioPause()

    controls.stopCoffe()
})

buttonFireplace.addEventListener('click', function() {
    sound.fireplaceAudioPlay()

    sound.forestAudioPause()
    sound.rainAudioPause()
    sound.coffeAudioPause()

    controls.playFireplace()

})

buttonFireplaceStop.addEventListener('click', function() {
    sound.fireplaceAudioPause()

    controls.stopFireplace()
    
})
