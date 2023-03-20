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

export {
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
}

 /* 
    <audio id="demo" src="http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3"></audio>
    <div>
        <button onclick="document.getElementById('demo').play()">Reproduzir o áudio</button>
        <button onclick="document.getElementById('demo').pause()">Pausar o áudio</button>
    </div> 
     <input type="range" id="weight" min="0" value="0.5" max="1" step="0.1" onchange="document.getElementByClass('.forest').volume=this.value" class="test">
*/