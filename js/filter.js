let arreglo = [];
let buscarCategoria = async(categoria) => {
    let arreglo = []
    if (categoria == "favoritos"){
        renderfavoritos();
    }
    else{
        await fetch(`https://gateway.marvel.com:443/v1/public/${categoria}?ts=1000&apikey=88e1b0804db7e3d6d3b7289e0da78e05&hash=${hash}&limit=42`, {
        method: 'GET',
        mode: 'cors',        
        })
	        .then(response => response.json())
            .then(data => arreglo = data.data.results)
        render(arreglo,categoria)
        console.log(categoria);
    }

}

let buscar = async(evt) => {
    
    let arreglo=[];
    let name = document.querySelector("#inputBusqueda").value.toLowerCase();
    await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=1000&apikey=88e1b0804db7e3d6d3b7289e0da78e05&hash=${hash}&limit=42`, {
    method: 'GET',
    mode: 'cors',        
    })
	.then(response => response.json())
    .then(data => arreglo = data.data.results)
    render(arreglo)

    
};


document
    .querySelector("#personajes")
    .addEventListener("click", () => buscarCategoria("characters"));

document
    .querySelector("#comics")
    .addEventListener("click", () => buscarCategoria("comics"));

document
    .querySelector("#series")
    .addEventListener("click", () => buscarCategoria("series"));

document
    .querySelector("#favoritos")
    .addEventListener("click", () => buscarCategoria("favoritos"));


document.querySelector("#busqueda button").addEventListener("click", buscar);

document.querySelector("#inputBusqueda").addEventListener("keyup", buscar);



