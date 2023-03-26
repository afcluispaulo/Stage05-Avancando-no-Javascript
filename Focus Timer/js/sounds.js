import {
    slideBar1,
    rainSlide,
    coffeSlide,

} from "./elements.js"

export default function() {

    const forestAudio = new Audio("./assets/Floresta.wav")

    const rainAudio = new Audio("./assets/Chuva.wav")

    const coffeAudio = new Audio("./assets/Cafeteria.wav")
 
    const fireplaceAudio = new Audio("./assets/Lareira.wav")

    function forestAudioPlay() {
        forestAudio.play()
        forestAudio.volume = slideBar1.value
       
    }

    function forestAudioPause() {
        forestAudio.pause()
    }

    function rainAudioPlay() { 
        rainAudio.play()
        rainAudio.volume = rainSlide.value

    }

    function rainAudioPause() {
        rainAudio.pause()
    }

    function coffeAudioPlay() {
        coffeAudio.play()
        coffeAudio.volume = rainSlide.value 

    }

    function coffeAudioPause() {
        coffeAudio.pause()
    }

    function fireplaceAudioPlay() {
        fireplaceAudio.play()
    }

    function fireplaceAudioPause() {
        fireplaceAudio.pause()
    }

    return {
        forestAudioPlay,
        forestAudioPause,
        rainAudioPlay,
        rainAudioPause,
        coffeAudioPlay,
        coffeAudioPause,
        fireplaceAudioPlay,
        fireplaceAudioPause
    }

}