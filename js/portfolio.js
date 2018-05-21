document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const mainNav = document.getElementById("main-nav");
    const mainLiList = Array.from(document.getElementsByClassName("main-li"));

    const mainPortfolio = document.getElementById("main-portfolio");
    const portfolioLi = document.getElementById("portfolio");
    const logo = document.getElementById("logo");

    const portfolioBoxes = Array.from(document.getElementsByClassName("portfolio-box"));
    const portfolioImages = Array.from(document.getElementsByClassName("portfolio-img"));

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

    function expandirImg() {

    }

    // imagen pantalla completa
    portfolioBoxes.forEach(box => {
        // const newBox = box.cloneNode(true);
        // box.addEventListener("click", () => {
        //     box.parentNode.insertBefore(newBox, box.nextSibling);
        //     newBox.classList.remove("portfolio-box");
        //     newBox.classList.add("portfolio-box-fullscreen");
        // });
        
        // newBox.firstChild.addEventListener("click", e => {
        //     if (newBox.classList.contains("portfolio-box-fullscreen")) {
        //         container.addEventListener("click", e => {
        //             if (e.target === newBox.firstChild) {
        //                 if (newBox.style.display === "block") {
        //                     newBox.style.display = "none";
        //                     // COMO HACER QUE DESAPAREZCA??????????????????????
        //                 }
        //             }
        //         });
        //     }
        // });

        // new approach showing img inside div 
    });
});