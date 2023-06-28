const screen1 = document.querySelector(".screen1")
const centerToTopImg = document.querySelector(".top")
const topToRightPositionImg = document.querySelector(".topCenter")
const rightPositionToDownImg = document.querySelector(".topRight")

const rightToCenterImg = document.querySelector(".centerLeft")

const screen2 = document.querySelector(".screen2")
const boxMsg = document.querySelector(".box")
const boxMsg2 = document.querySelector(".box2")

const btnTry = document.querySelector("#btnTry")
const btnTry2 = document.querySelector("#btnTry2")
const btn = document.querySelector('button')



const arrayPhrase = ["Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", 
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor quos minima aperiam tempore"]

let countClick = 0
let cClick = 0

function handleTryClick(event) {

  
    choosePhrase()
  
    event.preventDefault()
    countClick ++
   
    if (countClick == 1) {
        btn.classList.add("hide")
        handleAnimationRepeat()

        setTimeout(() => {
            handleAnimationRepeat()
        }, 450);

        
        setTimeout(() => {
            handleToScreen2()
        }, 600);

        
    }
}

function handleToMainScreen() {
    countClick --
    cClick ++
    setTimeout(() => {
        handleResetScreen() 
    }, 300);
    
}

function handleResetScreen() {
    screen2.classList.add("hide-absolute")

    screen1.classList.remove("hide")
    btn.classList.remove("hide")

}

btnTry.addEventListener('click', handleTryClick)
btnTry2.addEventListener('click', handleToMainScreen)


function handleAnimationRepeat() {

    setTimeout(() => {
        centerToTopImg.classList.remove("hide")
    }, 500);
    
    setTimeout(() => {
        centerToTopImg.classList.add("hide")
    }, 300);

    setTimeout(() => {
        topToRightPositionImg.classList.remove("hide")
    }, 300);

    setTimeout(() => {
        topToRightPositionImg.classList.add("hide")
    }, 300);

    setTimeout(() => {
        rightPositionToDownImg.classList.remove("hide")
    }, 300);

    setTimeout(() => {
        rightPositionToDownImg.classList.add("hide")
    }, 500);


    setTimeout(() => {
        rightToCenterImg.classList.remove("hide")
    }, 500);      
    
    setTimeout(() => {
        rightToCenterImg.classList.add("hide")
    }, 500);  

    setTimeout(() => {
        centerToTopImg.classList.add("hide")
    }, 800);
    

    
}

function handleToScreen2() {
    setTimeout(() => {
        screen1.classList.add("hide")
    }, 1300);

    setTimeout(() => {
        screen2.classList.remove("hide-absolute")
        
    }, 1300);
    
 }

function choosePhrase() {
     randomNumber = Math.round(Math.random() * 1)

     console.log(`Número sorteado: ${randomNumber}`)  
 
    if (randomNumber == 0 && cClick >= 1) {
        screen2.querySelector("p").innerText = `${arrayPhrase[0]}`
    } if (randomNumber == 1 && cClick >= 1) {
        screen2.querySelector("p").innerText = `${arrayPhrase[1]}`
    }
}

