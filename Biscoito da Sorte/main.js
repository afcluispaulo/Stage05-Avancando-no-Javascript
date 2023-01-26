const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btn = document.querySelector('button')

const topImg = document.querySelector(".top")
const topCenterImg = document.querySelector(".topCenter")
const topRigthImg = document.querySelector(".topRight")

const centerLeftImg = document.querySelector(".centerLeft")

function handleTryClick(event) {
    event.preventDefault()

    btn.classList.add("hide")

    handleAnimationRepeat()
    
}

btnTry.addEventListener('click', handleTryClick)

function handleAnimationRepeat() {

        setTimeout(() => {
            topImg.classList.remove("hide")
        }, 100);
        
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
            topRigthImg.classList.add("hide")
        }, 500);

        setTimeout(() => {
            centerLeftImg.classList.remove("hide")
        }, 500);      
        
        setTimeout(() => {
            centerLeftImg.classList.add("hide")
        }, 300);  

}
