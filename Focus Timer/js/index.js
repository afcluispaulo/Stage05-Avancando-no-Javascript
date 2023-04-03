import Timer from "./timer.js"
import sounds from "./sounds.js"
import Controls from "./controls.js"
import Events from "./events.js"

import {
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

Events({ theme, timer, controls, sound})

