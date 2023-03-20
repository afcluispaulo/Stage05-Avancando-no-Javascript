export default function() {

    const forestAudio = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view?usp=sharing")

    const rainAudio = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view")

    const coffeAudio = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view")

    const fireplaceAudio = new Audio("https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view")

    function forestAudioPlay() {
        forestAudio.play()
        
    }

    function forestAudioPause() {
        forestAudio.pause()
    }

    function rainAudioPlay() { 
        rainAudio.play()
        forestAudioPause()
    }

    function rainAudioPause() {
        rainAudio.pause()
    }

    function coffeAudioPlay() {
        coffeAudio.play()
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