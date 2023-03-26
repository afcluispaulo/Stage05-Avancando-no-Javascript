import Timer from "./timer.js"
import sounds from "./sounds.js"
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

    bbRain,
    
    slideBar1,
    buttonBox,
    rainSlide,
    bbCoffe,
    coffeSlide,
} from "./elements.js"

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

    buttonForest.classList.add("hide")
    buttonForestStop.classList.remove("hide")

    buttonBox.classList.add("stop")
    slideBar1.classList.add("test-click")

})

buttonForestStop.addEventListener('click', function() {
    sound.forestAudioPause()

    buttonForestStop.classList.add("hide")
    buttonForest.classList.remove("hide")

    buttonBox.classList.remove("stop")
    slideBar1.classList.remove("test-click")
})

buttonRain.addEventListener('click', function() {
    sound.rainAudioPlay()

    sound.forestAudioPause()
    sound.coffeAudioPause()
    sound.fireplaceAudioPause()

    buttonRain.classList.add('hide')
    buttonRainStop.classList.remove("hide")

    bbRain.classList.add("stop")
    rainSlide.classList.add("test-click")
})

buttonRainStop.addEventListener('click', function() {
    sound.rainAudioPause()

    buttonRainStop.classList.add('hide')
    buttonRain.classList.remove('hide')

    bbRain.classList.remove("stop")
    rainSlide.classList.remove("test-click")
})

buttonCoffe.addEventListener('click', function() {
    sound.coffeAudioPlay()

    sound.forestAudioPause()
    sound.rainAudioPause()
    sound.fireplaceAudioPause()

    buttonCoffe.classList.add('hide')
    buttonCoffeStop.classList.remove('hide')

    bbCoffe.classList.add("stop")
    coffeSlide.classList.add("test-click")
})
 
buttonCoffeStop.addEventListener('click', function() {
    sound.coffeAudioPause()

    buttonCoffeStop.classList.add('hide')
    buttonCoffe.classList.remove('hide')

    bbCoffe.classList.remove("stop")
    coffeSlide.classList.remove("test-click")
})

buttonFireplace.addEventListener('click', function() {
    sound.fireplaceAudioPlay()

    sound.forestAudioPause()
    sound.rainAudioPause()
    sound.coffeAudioPause()

    buttonFireplace.classList.add('hide')
    buttonFireplaceStop.classList.remove('hide')
})

buttonFireplaceStop.addEventListener('click', function() {
    sound.fireplaceAudioPause()

    buttonFireplaceStop.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    
})
