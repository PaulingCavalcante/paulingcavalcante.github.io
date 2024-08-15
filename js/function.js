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
    if (window.scrollY > 650) {
        const header = document.querySelector("header")
        header.classList.remove("translucid")
    } else {
        const header = document.querySelector("header")
        header.classList.add("translucid")
    }
}


window.addEventListener('scroll', verificarPosicaoRolagem);

document.addEventListener("DOMContentLoaded", function() {
    const typingElement = document.querySelector('.typing-effect');
    const text = "Olá, eu sou Paulo Cavalcante, um analista de desenvolvimento de sistemas júnior.";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Velocidade da digitação
        }
    }

    type();
});
