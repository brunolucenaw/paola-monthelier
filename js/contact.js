document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const contactLi = document.getElementById("contact");
    const mainNav = document.getElementById("main-nav");
    const mainLiList = Array.from(document.getElementsByClassName("main-li"));

    const contactLeft = document.getElementById("main-contact-left");
    const contactRight = document.getElementById("main-contact-right");
    const socialList = Array.from(document.getElementsByClassName("social-hidden"));

    function removeElement(element) {
        element.style += "; display: none;";
    }

    function hideMainMav() {
        mainNav.classList.add("main-nav-hidden");
        setTimeout(() => mainLiList.forEach(li => removeElement(li)), 200);
        setTimeout(() => mainNav.classList.remove("main-nav"), 400);
    }

    function expandContact() {
        contactLeft.style.display = "flex";
        contactRight.style.display = "flex";
        setTimeout(() => {
            contactLeft.classList = "main-contact";
            contactRight.classList = "main-contact";
            // setTimeout(() => socialList.forEach(social => {
                
            // }, 0));
            socialList.forEach(social => {
                social.classList.remove("social-hidden");
                social.classList.add("social");
            });
        }, 150);
    }

    // retraer main-nav y expandir
    contactLi.addEventListener("click", () => {
        hideMainMav();
        setTimeout(() => {
            removeElement(mainNav);
            if (window.matchMedia("(min-width: 848px)").matches) {
                container.style.flexDirection = "row";
            }
        }, 350);
        setTimeout(expandContact, 400);
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