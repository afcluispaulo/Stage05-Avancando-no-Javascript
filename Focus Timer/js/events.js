import {
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
} from "./elements.js"

export default function({
    theme,
    timer,
    controls,
    sound,
}) {
    buttonDark.addEventListener('click', function() {
        theme.classList.add('dark')
    
        buttonDark.classList.add("hide")
        buttonWhite.classList.remove("hide")
    })
    
    buttonWhite.addEventListener('click', function() {
        theme.classList.remove('dark')
    
        buttonWhite.classList.add("hide")
        buttonDark.classList.remove("hide")
    })
    
    buttonPlay.addEventListener('click', function(){      
        timer.countdown()
        controls.startTimer()
        
    })
    
    buttonPause.addEventListener('click', function() {
        
        timer.hold()
        controls.pauseTimer()
        
    })
    
    buttonStop.addEventListener('click', function(){
        timer.reset()
        controls.stopTimer()

    
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
}