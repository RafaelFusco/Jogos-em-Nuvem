// SLIDE
let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slide img")
    max = images.length;
function nextImage() {
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++
    if(currentImageIndex >= max)
        currentImageIndex = 0
    images[currentImageIndex].classList.add("selected")
}
function slide() {
    setInterval(() => {
        nextImage()
    }, time);
}
window.addEventListener("load", slide)

// TITULO PLATAFORMA
function abrirStart2() {
    start2.style.opacity = "1"
}
window.addEventListener("load", abrirStart2)

// ABRIR INFORMAÇOES 
const infoStart = document.querySelector("#info-start")
const bottomInicial = document.querySelector("#bottom-inicial")
const pStart = document.querySelector("#info")
const buttonStart = document.querySelector("#button-start")

function abrir() {
setTimeout(() => {
    infoStart.style.height = "max-content";
    infoStart.style.padding = "5px";
    bottomInicial.style.display = "flex";
    setTimeout(() => {
        pStart.style.opacity = "1"
    }, 500);
    setTimeout(() => {
        buttonStart.style.visibility = "visible"
        buttonStart.style.opacity = "1"
    }, 1500);
}, time);
}
window.addEventListener("load", abrir)

// BOTAO CONTINUAR
const start = document.querySelector("#start")
const start2 = document.querySelector("#start2")
const container = document.querySelector(".container")
const seletores = document.querySelector(".seletores")
const alerta = document.querySelector("#alerta")
const alerta2 = document.querySelector("#alerta2")

buttonStart.addEventListener("click", (e) => {
    start.parentNode.removeChild(start)

    playstation.style.width = "100vw";
    playstation.style.visibility = "visible";
    informacoes1.style.display = "grid";
    bPlay.classList.add("active2")
    setTimeout(() => {
        bPlay.addEventListener("dblclick", link1) 
    }, 1000);

    setTimeout(() => {
        seletores.style.visibility = "visible"
        seletores.style.opacity = "1" 
    }, 1000);


    setTimeout(() => {
        alerta.style.visibility = "visible"
        alerta.style.opacity = "1"
    }, 2000);

    setTimeout(() => {
        alerta2.style.visibility = "visible"
        alerta2.style.height = "60px"
        setTimeout(() => {    
            alerta2.style.opacity = "1"
        }, 500);
    }, 3000);
})

// FECHAR ALERTA
const alertaSize = document.querySelector("#alerta-size")
const fecharAlerta = document.querySelector("#fechar")

fecharAlerta.addEventListener("click", (e) => {
    alerta.style.opacity = "0"

})

// FECHAR ALERTA2
const fecharAlerta2 = document.querySelector("#fechar2")

fecharAlerta2.addEventListener("click", (e) => {
    alerta2.style.opacity = "0"

})

