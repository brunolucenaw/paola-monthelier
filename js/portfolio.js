document.addEventListener("DOMContentLoaded", () => {
    const mainNav = document.getElementById("main-nav");
    const mainLiList = Array.from(document.getElementsByClassName("main-li"));

    const mainPortfolio = document.getElementById("main-portfolio");
    const portfolioLi = document.getElementById("portfolio");
    const logo = document.getElementById("logo");

    function removerElemento(elemento) {
        elemento.style += "; display: none;";
    }

    function retraerMainMav() {
        mainNav.classList.add("main-nav-oculto");
        setTimeout(() => mainLiList.forEach(li => removerElemento(li)), 200);
        setTimeout(() => mainNav.classList.remove("main-nav"), 400);
    }

    portfolioLi.addEventListener("click", () => {
        retraerMainMav();
        setTimeout(() => {
            logo.style.height = "300px";
            setTimeout(() => {
                logo.style.position = "absolute";
            }, 250);
        }, 300);
        setTimeout(() => {
            mainPortfolio.classList.remove("main-portfolio-oculto");
            mainPortfolio.classList.add("main-portfolio");
            setTimeout(() => mainPortfolio.style.opacity = "1", 50);
        }, 600);
    });
});