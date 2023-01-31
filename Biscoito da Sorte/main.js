const screen1 = document.querySelector(".screen1")

const screen2 = document.querySelector(".screen2")
const boxMsg = document.querySelector(".box")
const btnTry = document.querySelector("#btnTry")
const btnTry2 = document.querySelector("#btnTry2")
const btn = document.querySelector('button')

const topImg = document.querySelector(".top")
const topCenterImg = document.querySelector(".topCenter")
const topRigthImg = document.querySelector(".topRight")

const centerLeftImg = document.querySelector(".centerLeft")

function handleTryClick(event) {
    event.preventDefault()

    btn.classList.add("hide")
 
    handleAnimationRepeat()

    handleToggleScreen()

}

function handleTryClick2(event) {
    event.preventDefault()

    
}

btnTry.addEventListener('click', handleTryClick)
btnTry2.addEventListener('click', handleTryClick2)

function handleToggleScreen() {
    setInterval(() => {
        screen1.classList.toggle("hide")
    }, 1300);
    screen2.classList.toggle("hide")
}

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
