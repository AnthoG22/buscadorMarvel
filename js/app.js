let heroes= []
const hash = "5b54ffc9bca027040a024884ef76098a"
mname = document.querySelector("#mname")
mdescription = document.querySelector("#mdescription")
mimage = document.querySelector("#mimage")
const favoriteStorage = localStorage.getItem("@favoritos");
const favoritos = favoriteStorage === null ? [] : JSON.parse(favoriteStorage);


let pintar = (arregloDeDatos,a) => {
    for(let i in arregloDeDatos){
        let personaje = arregloDeDatos[i];
        let card = document.createElement("div");
        card.classList.add("card","column","is-6-tablet","is-one-quarter-desktop");
        card.setAttribute("data-id", personaje.id);
        card.setAttribute("data-url", personaje.resourceURI);
        card.innerHTML = `
        
        <div class="card-image">
            <figure class="image is-4by3">
            <img src="${personaje.thumbnail.path}/standard_fantastic.${personaje.thumbnail.extension}" alt="Placeholder image">
            </figure>
        </div>
        <p class="title is-4">"${personaje[a]}"</p>
        <div class="content">
            <a>@marvel</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <p>Modified: ${personaje.modified}</p>
        </div>
    `
    card.addEventListener("click", () => mostrarModal(card.dataset.id, card.dataset.url));
    document.querySelector("#resultados").append(card);
}
}


let render = (arregloDeDatos,categoria) => {
    document.querySelector("#resultados").innerHTML="";
    if(categoria == "comics"){
        let a = "title"
        pintar(arregloDeDatos,a)
        /*for(let i in arregloDeDatos){
            let personaje = arregloDeDatos[i];
            let card = document.createElement("div");
            card.classList.add("card","column","is-6-tablet","is-one-quarter-desktop");
            card.setAttribute("data-id", personaje.id);
            card.setAttribute("data-url", personaje.resourceURI);
            card.innerHTML = `
            
            <div class="card-image">
                <figure class="image is-4by3">
                <img src="${personaje.thumbnail.path}/standard_fantastic.${personaje.thumbnail.extension}" alt="Placeholder image">
                </figure>
            </div>
            <p class="title is-4">${personaje.title}</p>
            <div class="content">
                <a>@marvel</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <p>Modified: ${personaje.modified}</p>
            </div>
        `
        card.addEventListener("click", () => mostrarModal(card.dataset.id, card.dataset.url));
        document.querySelector("#resultados").append(card);
    }*/
    }
    else if(categoria=="series"){
        let a = "title"
        pintar(arregloDeDatos,a)
    }

    else{
        let a = "name"
        pintar(arregloDeDatos,a)
    }

}


const llenarModal = (data) => {
    console.log(data);

    const { name, description , thumbnail } = data.results[0];
    mname.innerText = name;
    mdescription.innerText = description;
    console.log(name);
    let img = `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`;
    mimage.setAttribute("src", img);
    };

const mostrarModal = async(id,url) => {
    
    mname.innerText = "";
    mdescription.innerText =" ";
    document.querySelector("#add-favorites").setAttribute("data-id", id);
    document.querySelector("#add-favorites").setAttribute("data-url", url);
    modal.classList.toggle("is-active");
    console.log(url);
    console.log(id);
    if (id !== undefined) {
        await fetch(`${url}?ts=1000&apikey=88e1b0804db7e3d6d3b7289e0da78e05&hash=${hash}&limit=32`, {
        method: 'GET',
        mode: 'cors',        
        })
	    .then(response => response.json())
        .then(data => llenarModal(data.data))
        
    };
    }

let renderfavoritos = async(evt) => {
        console.log(favoritos);
        document.querySelector("#resultados").innerHTML="";
        for (let i in favoritos) {
            await fetch(`${favoritos[i]}?ts=1000&apikey=88e1b0804db7e3d6d3b7289e0da78e05&hash=${hash}&limit=32`, {
                method: 'GET',
                mode: 'cors',        
                })
                .then(response => response.json())
                .then(data => personaje =data.data.results[0] )
                    console.log(personaje);
                
                    let card = document.createElement("div");
                    card.classList.add("card","column","is-6-tablet","is-one-quarter-desktop");
                    card.setAttribute("data-id", personaje.id);
                    card.setAttribute("data-url", personaje.resourceURI);
                    card.innerHTML = `
                    
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="${personaje.thumbnail.path}/standard_fantastic.${personaje.thumbnail.extension}" alt="Placeholder image">
                        </figure>
                    </div>
                    <p class="title is-4">${personaje.name}</p>
                    <div class="content">
                        <a>@marvel</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br>
                        <p>Modified: ${personaje.modified}</p>
                    </div>
                `
                card.addEventListener("click", () => mostrarModal(card.dataset.id , card.dataset.url));
                document.querySelector("#resultados").append(card);

        }

}
    
console.log(heroes);
renderfavoritos()   


