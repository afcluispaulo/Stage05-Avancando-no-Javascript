export default function Controls({
    buttonPlay,
    buttonPause,
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
    fireplaceSlide,  

}) {
    function startTimer() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        
    }

    function pauseTimer() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        
        
    }

    function stopTimer() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function playForest() {
        buttonForest.classList.add("hide")
        buttonForestStop.classList.remove("hide")

        buttonBox.classList.add("stop")
        slideBar1.classList.add("test-click")

        stopRain()
        stopCoffe()
        stopFireplace()
    }

    function playRain() {
        buttonRain.classList.add('hide')
        buttonRainStop.classList.remove("hide")

        bbRain.classList.add("stop")
        rainSlide.classList.add("test-click")

        stopForest()
        stopCoffe()
        stopFireplace()
    }

    function playCoffe() {
        buttonCoffe.classList.add('hide')
        buttonCoffeStop.classList.remove('hide')

        bbCoffe.classList.add("stop")
        coffeSlide.classList.add("test-click")
        
        stopForest()
        stopRain()
        stopFireplace()
    }

    function playFireplace() {
        buttonFireplace.classList.add('hide')
        buttonFireplaceStop.classList.remove('hide')

        bbFireplace.classList.add("stop")
        fireplaceSlide.classList.add("test-click")

        stopForest()
        stopRain()
        stopCoffe()
    }

    function stopForest() {
        buttonForestStop.classList.add("hide")
        buttonForest.classList.remove("hide")

        buttonBox.classList.remove("stop")
        slideBar1.classList.remove("test-click")
    }

    function stopRain() {
        buttonRainStop.classList.add('hide')
        buttonRain.classList.remove('hide')

        bbRain.classList.remove("stop")
        rainSlide.classList.remove("test-click")
    }

    function stopCoffe() {
        buttonCoffeStop.classList.add('hide')
        buttonCoffe.classList.remove('hide')

        bbCoffe.classList.remove("stop")
        coffeSlide.classList.remove("test-click")
    }

    function stopFireplace() {
        buttonFireplaceStop.classList.add('hide')
        buttonFireplace.classList.remove('hide')

        bbFireplace.classList.remove("stop")
        fireplaceSlide.classList.remove("test-click")
    }

    return {
        startTimer,
        pauseTimer,
        stopTimer,

        playForest,
        playRain,
        playCoffe,
        playFireplace,

        stopForest,
        stopRain,
        stopCoffe,
        stopFireplace,
    }

}