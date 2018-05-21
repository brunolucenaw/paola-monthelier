// Unir todo lo que se usa en comun en otro archivo e importar a cada uno (luego se hace bundle)

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const logo = document.getElementById("logo");
    const mainNav = document.getElementById("main-nav");
    const mainLiList = Array.from(document.getElementsByClassName("main-li"));
    const mainPortfolio = document.getElementById("main-portfolio");

    const contactLeft = document.getElementById("main-contact-left");
    const contactRight = document.getElementById("main-contact-right");
    const socialList = Array.from(document.getElementsByClassName("social-hidden"));

    function hidePortfolio() {
        mainPortfolio.style.opacity = "0";
        setTimeout(() => {
            mainPortfolio.classList.remove("main-portfolio");
            mainPortfolio.classList.add("main-portfolio-hidden");
        }, 250);
    }

    function hideContact() {
        contactLeft.classList = "main-contact-left-hidden";
        contactRight.classList = "main-contact-right-hidden";
        setTimeout(() => {
            contactLeft.style.display = "none";
            contactRight.style.display = "none";
            socialList.forEach(social => {
                social.classList.remove("social");
                social.classList.add("social-hidden");
            });
        }, 150);
    }

    function enlargeLogo() {
        logo.style.transform = "scale(1)";
        setTimeout(() => {
            logo.style.position = "static";
        }, 250);
    }

    function showMainNav() {
        mainNav.style.display = "block";
        setTimeout(() => mainNav.classList = "main-nav", 50);
        setTimeout(() => mainLiList.forEach(li => li.style.display = "block"), 150);
    }

    // expander main-nav
    logo.addEventListener("click", () => {
        hideContact();
        hidePortfolio();
        enlargeLogo();
        setTimeout(() => {
            container.style.flexDirection = "column";
            showMainNav();
        }, 150);
    });
});