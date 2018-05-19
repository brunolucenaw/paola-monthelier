document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const contactoLi = document.getElementById("contacto");
    const mainNav = document.getElementById("main-nav");
    const mainLiList = Array.from(document.getElementsByClassName("main-li"));

    const contactoLeft = document.getElementById("main-contacto-left");
    const contactoRight = document.getElementById("main-contacto-right");
    const socialList = Array.from(document.getElementsByClassName("social-oculto"));

    function removerElemento(elemento) {
        elemento.style += "; display: none;";
    }

    function retraerMainMav() {
        mainNav.classList.add("main-nav-oculto");
        setTimeout(() => mainLiList.forEach(li => removerElemento(li)), 200);
        setTimeout(() => mainNav.classList.remove("main-nav"), 400);
    }

    function expandirContacto() {
        contactoLeft.style.display = "flex";
        contactoRight.style.display = "flex";
        setTimeout(() => {
            contactoLeft.classList = "main-contacto";
            contactoRight.classList = "main-contacto";
            setTimeout(() => socialList.forEach(social => {
                social.classList.remove("social-oculto");
                social.classList.add("social");
            }, 100));
        }, 150);
    }

    // retraer main-nav y expandir
    contactoLi.addEventListener("click", () => {
        retraerMainMav();
        setTimeout(() => {
            removerElemento(mainNav);
            if (window.matchMedia("(min-width: 848px)").matches) {
                container.style.flexDirection = "row";
            }
        }, 350);
        setTimeout(expandirContacto, 400);
    });

    window.addEventListener("resize", () => {
        if (window.matchMedia("(max-width: 848px)").matches) {
            container.style.flexDirection = "column";
        }
        // else {
        //     container.style.flexDirection = "row";
        // } rompe el main-nav
    });

    // mostrar whatsapp y email







});