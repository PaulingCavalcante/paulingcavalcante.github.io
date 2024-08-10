document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            const offsetPosition = targetSection.offsetTop - 150;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });

    // Atualizar ano atual no footer
    document.getElementById("ano-atual").textContent = new Date().getFullYear();
});