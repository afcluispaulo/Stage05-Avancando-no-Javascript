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

console.log("test")

let countClick = 0

function handleTryClick(event) {
    event.preventDefault()
    countClick ++
   
    if (countClick == 1) {
        btn.classList.add("hide")
        
        handleAnimationRepeat()
        
        handleToScreen2()
    }
}

function handleToMainScreen() {
    countClick --
    screen2.classList.add("hide-absolute")

    screen1.classList.remove("hide")
    btn.classList.remove("hide")
    handleResetBox()
    
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
