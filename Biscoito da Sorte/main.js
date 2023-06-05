const screen1 = document.querySelector(".screen1")
const topImg = document.querySelector(".top")
const topCenterImg = document.querySelector(".topCenter")
const topRigthImg = document.querySelector(".topRight")

const centerLeftImg = document.querySelector(".centerLeft")

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
        topImg.classList.remove("hide")
    }, 500);
    
    setTimeout(() => {
        topImg.classList.add("hide")
    }, 300);

    setTimeout(() => {
        topCenterImg.classList.remove("hide")
    }, 300);

    setTimeout(() => {
        topCenterImg.classList.add("hide")
    }, 300);

    setTimeout(() => {
        topRigthImg.classList.remove("hide")
    }, 300);

    setTimeout(() => {
        topRigthImg.classList.add("hide")
    }, 500);


    setTimeout(() => {
        centerLeftImg.classList.remove("hide")
    }, 500);      
    
    setTimeout(() => {
        centerLeftImg.classList.add("hide")
    }, 500);  

    setTimeout(() => {
        topImg.classList.add("hide")
    }, 800);
}

function handleToScreen2() {
    setTimeout(() => {
        screen1.classList.add("hide")
    }, 1300);

    setTimeout(() => {
        screen2.classList.remove("hide-absolute")
        handleAnimationDownTopMsg()
    }, 1300);
 }

function handleAnimationDownTopMsg() {
    
    setTimeout(() => {
        boxMsg2.classList.remove("absolute")
    }, 300)

    setTimeout(() => {
        boxMsg2.classList.add("box2Animation")
    }, 400);

    setTimeout(() => {
        boxMsg2.classList.add("hide-absolute")
    }, 700)

    setTimeout(() => {
        boxMsg2.classList.remove("hide-absolute")
    }, 700);
    setTimeout(() => {
        boxMsg2.classList.replace("box2", "box")
    }, 500);
}

function handleResetBox() {
    setTimeout(() => {
        boxMsg2.classList.replace("box", "box2")
    }, 500);
}
