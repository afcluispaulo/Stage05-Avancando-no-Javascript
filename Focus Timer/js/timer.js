

export default function Timer({ 
    minutesDisplay, 
    secondsDisplay, 
    resetControls,
    sound
  }) {
  
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)
  
    function updateDisplay(newMinutes, seconds) {
      // falsy
        // false
        // 0
      // truthy
      newMinutes = newMinutes === undefined ? minutes : newMinutes
      seconds = seconds === undefined ? 0 : seconds  // se nao passar o seconds, fica 0
      minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
      secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
  
    function reset() {
      updateDisplay(minutes, 0)
      clearTimeout(timerTimeOut)
    }
  
    function countdown(){
      timerTimeOut = setTimeout(function() {
        let seconds =  Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0
  
        updateDisplay(minutes, 0)
  
        if ( isFinished ) {
          // resetControls()
          updateDisplay()
          // Sounds().timeEnd()
          return
        }
  
        if( seconds <= 0 ) {
          seconds = 60
          --minutes
        }
  
        updateDisplay(minutes, String(seconds - 1))
  
        countdown()
      }, 1000)
    }
  
    function add5Minutes(){
        let minutes = Number(minutesDisplay.textContent) + 5
        let seconds = Number(secondsDisplay.textContent)
        updateDisplay(minutes, seconds)
    }

    function dec5Minutes(){
        let minutes = Number(minutesDisplay.textContent) - 5
        let seconds = Number(secondsDisplay.textContent)
        updateDisplay(minutes, seconds)
        
        if (minutes <= 0 ) {
            reset()
        }
    }

    function hold() {
      clearTimeout(timerTimeOut)
    }
  
    return {
      countdown,
      reset,
      updateDisplay,
      add5Minutes,
      dec5Minutes,
      hold,
    }
  }