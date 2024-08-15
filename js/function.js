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
    const el_text = document.querySelector("#text");
    const texts = [
        "Desenvolvedor.",
        "Designer.",
        "sla!"
    ];
    let textIndex = 0;
    let isDeleting = false;
    const typingSpeed = 50; // Velocidade de digitação
    const deletingSpeed = 50; // Velocidade de apagamento
    const pauseTime = 500; // Tempo de pausa após digitar e antes de apagar

    function type() {
        const getText = texts[textIndex];
        const textSplit = getText.split('');
        el_text.textContent = "";

        textSplit.forEach((item, line) => {
            setTimeout(() => {
                el_text.textContent += item;
            }, typingSpeed * line);
        });

        setTimeout(() => {
            isDeleting = true;
            deleteText();
        }, typingSpeed * textSplit.length + pauseTime);
    }

    function deleteText() {
        const textContent = el_text.textContent;
        if (textContent.length > 0) {
            el_text.textContent = textContent.slice(0, -1);
            setTimeout(deleteText, deletingSpeed);
        } else {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, pauseTime);
        }
    }

    type(); // Inicia o processo
});
