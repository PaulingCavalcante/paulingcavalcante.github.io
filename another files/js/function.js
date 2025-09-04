document.addEventListener("DOMContentLoaded", function () {

    const main = document.querySelector("#title");

    main.addEventListener("click", function () {
        window.scrollTo({
            top: 0
        });
    });

    // Atualizar ano atual no footer
    document.getElementById("ano-atual").textContent = new Date().getFullYear();
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("hidden")
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const verificarPosicaoRolagem = () => {
    let height = document.getElementById("nebula").clientHeight;
    
    if (window.scrollY > 30) {
        const header = document.querySelector("header")
        header.classList.remove("translucid")
    } else {
        const header = document.querySelector("header")
        header.classList.add("translucid")
    }
}

window.addEventListener('scroll', verificarPosicaoRolagem);