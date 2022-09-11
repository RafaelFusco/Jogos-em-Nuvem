// CONST GERAL
const playstation = document.querySelector("#playstation")
const informacoes1 = document.querySelector(".informacoes1")
const xbox = document.querySelector("#xbox")
const informacoes2 = document.querySelector(".informacoes2")
const geForce = document.querySelector("#geForce")
const informacoes3 = document.querySelector(".informacoes3")
const shadow = document.querySelector("#shadow")
const informacoes4 = document.querySelector(".informacoes4")
const luna = document.querySelector("#luna")
const informacoes5 = document.querySelector(".informacoes5")



// PLAYSTATION
const bPlay = document.querySelector("#b-play")
bPlay.addEventListener("click", (e) => {

    bPlay.classList.add("active2")
    playstation.style.display = "flex"
    
    setTimeout(() => {
        bPlay.addEventListener("dblclick", link1) 
    }, 1000);
    
    bXbox.removeEventListener("dblclick", link2)
    bGeforce.removeEventListener("dblclick", link3)
    bShadow.removeEventListener("dblclick", link4)
    bLuna.removeEventListener("dblclick", link5)

    setTimeout(() => {
        playstation.style.opacity = "1"
    }, 100);
    
    setTimeout(() => {
        xbox.style.display = "none"
        geForce.style.display = "none"
        shadow.style.display = "none"
        luna.style.display = "none"
    }, 100);

    xbox.style.opacity = "0"
    geForce.style.opacity = "0"
    shadow.style.opacity = "0"
    luna.style.opacity = "0"

    bXbox.classList.remove("active2")
    bGeforce.classList.remove("active2")
    bShadow.classList.remove("active2")
    bLuna.classList.remove("active2")

})

function link1() {
    
    if (bPlay.classList.contains("active2")) {
        bPlay.classList.add("site1")
                setTimeout(function() {
            window.open("https://www.playstation.com/pt-br/ps-plus/?emcid=pa-pl-447291&gclid=CjwKCAjwgaeYBhBAEiwAvMgp2lWiJwbsLYv8RoDzcx0dEXed7zLKBceUS3Ck6W6vvCIe_6TpGPVfhhoC3xUQAvD_BwE", "_blank");
            bPlay.classList.remove("site1")
        }, 1000);
    }
}

// XBOX
const bXbox = document.querySelector("#b-xbox")

bXbox.addEventListener("click", (e) => {

    bXbox.classList.add("active2")
    xbox.style.display = "flex"
    
    setTimeout(() => {
        bXbox.addEventListener("dblclick", link2)        
    }, 1000);

    bPlay.removeEventListener("dblclick", link1)
    bGeforce.removeEventListener("dblclick", link3)
    bShadow.removeEventListener("dblclick", link4)
    bLuna.removeEventListener("dblclick", link5)

    setTimeout(() => {
        xbox.style.opacity = "1"
    }, 100);

    setTimeout(() => {
        playstation.style.display = "none"
        geForce.style.display = "none"
        shadow.style.display = "none"
        luna.style.display = "none"
    }, 100);

    playstation.style.opacity = "0"
    geForce.style.opacity = "0"
    shadow.style.opacity = "0"
    luna.style.opacity = "0"

    bPlay.classList.remove("active2")
    bGeforce.classList.remove("active2")
    bShadow.classList.remove("active2")
    bLuna.classList.remove("active2")

})
function link2() {
    
    if (bXbox.classList.contains('active2') ) {
        bXbox.classList.add("site2")
                setTimeout(function() {
            window.open("https://www.xbox.com/pt-BR/xbox-game-pass", "_blank");
            bXbox.classList.remove("site2")
        }, 1000);   
    }
}

// GEFORCE
const bGeforce = document.querySelector("#b-geForce")

bGeforce.addEventListener("click", (e) => {

    bGeforce.classList.add("active2")
    geForce.style.display = "flex"

    setTimeout(() => {
        bGeforce.addEventListener("dblclick", link3)
    }, 1000);

    bPlay.removeEventListener("dblclick", link1)
    bXbox.removeEventListener("dblclick", link2)
    bShadow.removeEventListener("dblclick", link4)
    bLuna.removeEventListener("dblclick", link5)

    setTimeout(() => {
        geForce.style.opacity = "1"
    }, 100);

    setTimeout(() => {
        playstation.style.display = "none"
        xbox.style.display = "none"
        shadow.style.display = "none"
        luna.style.display = "none"
    }, 100);

    playstation.style.opacity = "0"
    xbox.style.opacity = "0"
    shadow.style.opacity = "0"
    luna.style.opacity = "0"

    bPlay.classList.remove("active2")
    bXbox.classList.remove("active2")
    bShadow.classList.remove("active2")
    bLuna.classList.remove("active2")

})
function link3() {
    
    if (bGeforce.classList.contains('active2') ) {
        bGeforce.classList.add("site3")
                setTimeout(function() {
            window.open("https://www.nvidia.com/pt-br/geforce-now/", "_blank");
            bGeforce.classList.remove("site3")
        }, 1000);   
    }
}

// SHADOW
const bShadow = document.querySelector("#b-shadow")

bShadow.addEventListener("click", (e) => {

    bShadow.classList.add("active2")
    shadow.style.display = "flex"

    setTimeout(() => {
        bShadow.addEventListener("dblclick", link4)
    }, 1000);

    bPlay.removeEventListener("dblclick", link1)
    bXbox.removeEventListener("dblclick", link2)
    bGeforce.removeEventListener("dblclick", link3)
    bLuna.removeEventListener("dblclick", link5)

    setTimeout(() => {
        shadow.style.opacity = "1"
    }, 100);

    setTimeout(() => {
        playstation.style.display = "none"
        xbox.style.display = "none"
        geForce.style.display = "none"
        luna.style.display = "none"
    }, 100);

    playstation.style.opacity = "0"
    xbox.style.opacity = "0"
    geForce.style.opacity = "0"
    luna.style.opacity = "0"

    bPlay.classList.remove("active2")
    bXbox.classList.remove("active2")
    bGeforce.classList.remove("active2")
    bLuna.classList.remove("active2")

})
function link4() {
    
    if (bShadow.classList.contains('active2') ) {
            bShadow.classList.add("site4")
                setTimeout(function() {
            window.open("https://shadow.tech/", "_blank");
            bShadow.classList.remove("site4")
        }, 1000);
    }
}

// LUNA
const bLuna = document.querySelector("#b-luna")

bLuna.addEventListener("click", (e) => {

    bLuna.classList.add("active2")
    luna.style.display = "flex"

    setTimeout(() => {
        bLuna.addEventListener("dblclick", link5)
    }, 1000);

    bPlay.removeEventListener("dblclick", link1)
    bXbox.removeEventListener("dblclick", link2)
    bGeforce.removeEventListener("dblclick", link3)
    bShadow.removeEventListener("dblclick", link4)

    setTimeout(() => {
        luna.style.opacity = "1"
    }, 100);

    setTimeout(() => {
        playstation.style.display = "none"
        xbox.style.display = "none"
        geForce.style.display = "none"
        shadow.style.display = "none"
    }, 100);

    playstation.style.opacity = "0"
    xbox.style.opacity = "0"
    geForce.style.opacity = "0"
    shadow.style.opacity = "0"

    bPlay.classList.remove("active2")
    bXbox.classList.remove("active2")
    bGeforce.classList.remove("active2")
    bShadow.classList.remove("active2")

})
function link5() {
    
    if (bLuna.classList.contains('active2') ) {
            bLuna.classList.add("site5")
                setTimeout(function() {
            window.open("https://www.amazon.com/luna/landing-page", "_blank");
            bLuna.classList.remove("site5")
        }, 1000);   
    }
}