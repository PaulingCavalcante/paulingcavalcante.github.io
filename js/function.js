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

const verificarPosicaoRolagem = () => {
    if (window.scrollY > 100) {
        const header = document.querySelector("header")
        header.classList.remove("translucid")
    } else {
        const header = document.querySelector("header")
        header.classList.add("translucid")
    }
}


window.addEventListener('scroll', verificarPosicaoRolagem);