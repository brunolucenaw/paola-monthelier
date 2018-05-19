// Unir todo lo que se usa en comun en otro archivo e importar a cada uno (luego se hace bundle)

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const logo = document.getElementById("logo");
    const mainNav = document.getElementById("main-nav");
    const mainLiList = Array.from(document.getElementsByClassName("main-li"));
    const mainPortfolio = document.getElementById("main-portfolio");

    const contactoLeft = document.getElementById("main-contacto-left");
    const contactoRight = document.getElementById("main-contacto-right");
    const socialList = Array.from(document.getElementsByClassName("social-oculto"));

    function removerPortfolio() {
        mainPortfolio.style.opacity = "0";
        setTimeout(() => {
            mainPortfolio.classList.remove("main-portfolio");
            mainPortfolio.classList.add("main-portfolio-oculto");
        }, 250);
    }

    function retraerContacto() {
        contactoLeft.classList = "main-contacto-left-oculto";
        contactoRight.classList = "main-contacto-right-oculto";
        setTimeout(() => {
            contactoLeft.style.display = "none";
            contactoRight.style.display = "none";
            socialList.forEach(social => {
                social.classList.remove("social");
                social.classList.add("social-oculto");
            });
        }, 150);
    }

    function agrandarLogo() {
        logo.style.height = "400px";
        setTimeout(() => {
            logo.style.position = "static";
        }, 250);
    }

    function expandirMainNav() {
        mainNav.style.display = "block";
        setTimeout(() => mainNav.classList = "main-nav", 50);
        setTimeout(() => mainLiList.forEach(li => li.style.display = "block"), 150);
    }

    // expander main-nav
    logo.addEventListener("click", () => {
        retraerContacto();
        removerPortfolio();
        agrandarLogo();
        setTimeout(() => {
            container.style.flexDirection = "column";
            expandirMainNav();
        }, 150);
    });
});