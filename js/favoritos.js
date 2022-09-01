const anadirFavorito = (e) => {
    console.log("anadir favorito");
    let url =  e.target.getAttribute("data-url"); 
    console.log(url);
    console.log(e.target);

    if (favoritos.indexOf(url) === -1) {
        favoritos.push(url);
        localStorage.setItem("@favoritos", JSON.stringify(favoritos));
    }
};


document.querySelector("#add-favorites").addEventListener("click", anadirFavorito);

