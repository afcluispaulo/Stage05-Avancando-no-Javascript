const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAdd = document.querySelector('.add')
const buttonDecr = document.querySelector('.decr')

 const buttonForest = document.querySelector('.forest')
//const buttonForest = document.getElementById("#forest")

const buttonBox = document.querySelector('.buttonBox') // falta mudar o nome da variável

const bbRain = document.getElementById("buttonBoxRain")
const bbCoffe = document.getElementById("buttonBoxCoffe")
const bbFireplace = document.getElementById("buttonBoxFireplace")

const borderStop = document.querySelector('.stop')
const buttonForestStop = document.querySelector('.forest-stop')
const buttonRain = document.querySelector('.rain')
const buttonRainStop = document.querySelector('.rain-stop')
const buttonCoffe = document.querySelector('.coffe')
const buttonCoffeStop = document.querySelector('.coffe-stop')
const buttonFireplace = document.querySelector('.fireplace')
const buttonFireplaceStop = document.querySelector('.fireplace-stop')

const slideBar1 = document.querySelector('.test')
const rainSlide = document.getElementById("rainSlide")
const coffeSlide = document.getElementById("coffeSlide")
const fireplaceSlide = document.getElementById("fireplaceSlide")

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

    buttonBox,
    bbRain,
    bbCoffe,
    bbFireplace,

    slideBar1,
    rainSlide,
    coffeSlide,
    fireplaceSlide,

    borderStop,
}

 /* 
    <audio id="demo" src="http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3"></audio>
    <div>
        <button onclick="document.getElementById('demo').play()">Reproduzir o áudio</button>
        <button onclick="document.getElementById('demo').pause()">Pausar o áudio</button>
    </div> 
     <input type="range" id="weight" min="0" value="0.5" max="1" step="0.1" onchange="document.getElementByClass('.forest').volume=this.value" class="test">
*/

/* 
<button class="forest" id="forest">

                <svg width="138" height="91" viewBox="0 0 138 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                   
                    <path d="M51.8355 104V99.8H67.0329V87.2H60.8158C56.9934 87.2 53.7352 85.835 51.0411 83.105C48.347 80.375 47 77.0733 47 73.2C47 70.4 47.7599 67.8217 49.2796 65.465C50.7993 63.1083 52.8487 61.3933 55.4276 60.32C55.8421 56.82 57.3503 53.8917 59.9523 51.535C62.5543 49.1783 65.6053 48 69.1053 48C72.6053 48 75.6562 49.1783 78.2582 51.535C80.8602 53.8917 82.3684 56.82 82.7829 60.32C85.3618 61.3933 87.4112 63.1083 88.9309 65.465C90.4507 67.8217 91.2105 70.4 91.2105 73.2C91.2105 77.0733 89.8635 80.375 87.1694 83.105C84.4753 85.835 81.2171 87.2 77.3947 87.2H71.1776V99.8H87.0658V104H51.8355ZM60.8158 83H77.3947C80.0658 83 82.3454 82.0433 84.2336 80.13C86.1217 78.2167 87.0658 75.9067 87.0658 73.2C87.0658 71.24 86.5132 69.455 85.4079 67.845C84.3026 66.235 82.875 65.0333 81.125 64.24L78.9145 63.26L78.6382 60.81C78.3158 58.3367 77.2566 56.2833 75.4605 54.65C73.6645 53.0167 71.5461 52.2 69.1053 52.2C66.6645 52.2 64.5461 53.0167 62.75 54.65C60.9539 56.2833 59.8947 58.3367 59.5724 60.81L59.2961 63.26L57.0855 64.24C55.3355 65.0333 53.9079 66.235 52.8026 67.845C51.6974 69.455 51.1447 71.24 51.1447 73.2C51.1447 75.9067 52.0888 78.2167 53.977 80.13C55.8651 82.0433 58.1447 83 60.8158 83Z" fill="#323238"/>
                </svg> 
                
                <input type="range" id="weight" min="0" max="1" step="0.1" onchange="document.querySelector('.Forest')" class="test">
               
            </button>
            */


       /*     svg width="138" height="91" viewBox="0 0 138 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.8355 104V99.8H67.0329V87.2H60.8158C56.9934 87.2 53.7352 85.835 51.0411 83.105C48.347 80.375 47 77.0733 47 73.2C47 70.4 47.7599 67.8217 49.2796 65.465C50.7993 63.1083 52.8487 61.3933 55.4276 60.32C55.8421 56.82 57.3503 53.8917 59.9523 51.535C62.5543 49.1783 65.6053 48 69.1053 48C72.6053 48 75.6562 49.1783 78.2582 51.535C80.8602 53.8917 82.3684 56.82 82.7829 60.32C85.3618 61.3933 87.4112 63.1083 88.9309 65.465C90.4507 67.8217 91.2105 70.4 91.2105 73.2C91.2105 77.0733 89.8635 80.375 87.1694 83.105C84.4753 85.835 81.2171 87.2 77.3947 87.2H71.1776V99.8H87.0658V104H51.8355ZM60.8158 83H77.3947C80.0658 83 82.3454 82.0433 84.2336 80.13C86.1217 78.2167 87.0658 75.9067 87.0658 73.2C87.0658 71.24 86.5132 69.455 85.4079 67.845C84.3026 66.235 82.875 65.0333 81.125 64.24L78.9145 63.26L78.6382 60.81C78.3158 58.3367 77.2566 56.2833 75.4605 54.65C73.6645 53.0167 71.5461 52.2 69.1053 52.2C66.6645 52.2 64.5461 53.0167 62.75 54.65C60.9539 56.2833 59.8947 58.3367 59.5724 60.81L59.2961 63.26L57.0855 64.24C55.3355 65.0333 53.9079 66.235 52.8026 67.845C51.6974 69.455 51.1447 71.24 51.1447 73.2C51.1447 75.9067 52.0888 78.2167 53.977 80.13C55.8651 82.0433 58.1447 83 60.8158 83Z" fill="#FFFFFF" */