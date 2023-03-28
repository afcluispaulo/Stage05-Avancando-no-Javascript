export default function Controls({
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

}) {
    function playForest() {
        buttonForest.classList.add("hide")
        buttonForestStop.classList.remove("hide")

        buttonBox.classList.add("stop")
        slideBar1.classList.add("test-click")
    }

    function playRain() {
        buttonRain.classList.add('hide')
        buttonRainStop.classList.remove("hide")

        bbRain.classList.add("stop")
        rainSlide.classList.add("test-click")
    }

    function playCoffe() {
        buttonCoffe.classList.add('hide')
        buttonCoffeStop.classList.remove('hide')

        bbCoffe.classList.add("stop")
        coffeSlide.classList.add("test-click")
    }

    function playFireplace() {
        buttonFireplace.classList.add('hide')
        buttonFireplaceStop.classList.remove('hide')

        bbFireplace.classList.add("stop")
        fireplaceSlide.classList.add("test-click")
    }

    return {
        playForest,
        playRain,
        playCoffe,
        playFireplace,

        
    }

}