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


function handleTryClick(event) {
    event.preventDefault()

    btn.classList.add("hide")
 
    handleAnimationRepeat()
    
    handleToScreen2()

}

function handleTryClick2(event) {
    event.preventDefault()
    
}

btnTry.addEventListener('click', handleTryClick)
btnTry2.addEventListener('click', handleTryClick2)

function handleAnimationRepeat() {

        setInterval(() => {
            topImg.classList.remove("hide")
        }, 500);
        
        setInterval(() => {
            topImg.classList.add("hide")
        }, 300);

        setInterval(() => {
            topCenterImg.classList.remove("hide")
        }, 300);

        setInterval(() => {
            topCenterImg.classList.add("hide")
        }, 300);

        setInterval(() => {
            topRigthImg.classList.remove("hide")
        }, 300);

        setInterval(() => {
            topRigthImg.classList.add("hide")
        }, 500);

        setInterval(() => {
            centerLeftImg.classList.remove("hide")
        }, 500);      
        
        setInterval(() => {
            centerLeftImg.classList.add("hide")
        }, 500);  
        
}

function handleAnimationDownTopMsg() {
    
    setTimeout(() => {
        boxMsg2.classList.add("hide-absolute")
    }, 200);
    boxMsg2.classList.add("hide-absolute")
   
    setTimeout(() => {
        boxMsg2.classList.add("box2Animation")
        setTimeout(() => {
            boxMsg2.classList.remove("absolute")
        }, 300);
        boxMsg2.classList.add("hide-absolute")
        boxMsg2.classList.remove("hide-absolute")
    }, 300);
    
}
boxMsg2.classList.replace("box2", "box")


    
function handleToScreen2() {
    setInterval(() => {
        screen1.classList.add("hide")
    }, 1300);

    setInterval(() => {
        screen2.classList.remove("hide-absolute")
        handleAnimationDownTopMsg()
    }, 1900);
    
}
