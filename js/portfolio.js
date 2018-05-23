document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const mainNav = document.getElementById("main-nav");
    const mainLiList = Array.from(document.getElementsByClassName("main-li"));

    const mainPortfolio = document.getElementById("main-portfolio");
    const portfolioLi = document.getElementById("portfolio");
    const logo = document.getElementById("logo");

    const portfolioBoxes = Array.from(document.getElementsByClassName("portfolio-box"));

    const fullscreenContainer = document.getElementById("fullscreen-container");
    const fullscreenImg = document.getElementById("fullscreen-img");
    const closeButton = document.getElementById("close-btn");

    function removerElemento(elemento) {
        elemento.style += "; display: none;";
    }

    function retraerMainMav() {
        mainNav.classList.add("main-nav-hidden");
        setTimeout(() => mainLiList.forEach(li => removerElemento(li)), 200);
        setTimeout(() => mainNav.classList.remove("main-nav"), 400);
    }

    function achicarLogo() {
        logo.style.transform = "scale(0.6)";
    }


    // expandir portfolio
    portfolioLi.addEventListener("click", () => {
        retraerMainMav();
        setTimeout(() => {
            achicarLogo();
            logo.style.border = "20px solid #222";
            setTimeout(() => {
                logo.style.position = "absolute";
            }, 250);
        }, 300);
        setTimeout(() => {
            mainPortfolio.classList.remove("main-portfolio-hidden");
            mainPortfolio.classList.add("main-portfolio");
            setTimeout(() => mainPortfolio.style.opacity = "1", 50);
        }, 600);
    });

    // imagen pantalla completa
    portfolioBoxes.forEach(box => {
        box.addEventListener("click", () => {
            const imgToAdd = "assets/img/portfolio/work" + box.classList.toString().substr(17) + ".jpg";
            fullscreenImg.src = imgToAdd;
            fullscreenContainer.style.display = "block";
        });
    });

    closeButton.addEventListener("click", () => {
        fullscreenContainer.style.display = "none";
    });

});