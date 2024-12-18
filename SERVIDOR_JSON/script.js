const urlPalabras = "http://localhost:3000/palabras";

const url = window.location.pathname;
if(url.includes("palabras-list.html")){
    cargarPalabras();
}else if (url.includes("palabras-edit.html")){
    const parametros = new URLSearchParams(window.location.search);
    const palabraId = parametros.get("id");
    if(palabraId) {
        cargarPalabra(palabraId);
    }
}

document.getElementById("palabra-form")?.addEventListener('submit', guardarPalabra);

async function guardarPalabra(e) {
    e.preventDefault();

    const id = new URLSearchParams(window.location.search).get("id");
    const metodo = id ? "PUT" : "POST";
    
    const urlGuardar = id ? `${urlPalabras}/${id}` : urlPalabras;

     const palabra = {
        id: "0",
        palabra: document.getElementById("palabra").value,
        dificultad : +document.getElementById("dificultad").value
     }

     fetch(`${urlPalabras}`)
     .then((response)=> response.json())
     .then((data)=>{
        if(data && data.length > 0){
       let idAux = palabra.id = +data[data.length - 1].id + 1;
       palabra.id = idAux + "";
        }else {
            palabra.id = "1";
        }
        return fetch(`${urlGuardar}`, {
            method: metodo,
            body: JSON.stringify(palabra),
            headers: {
                "Content-Type": "aplication/json"
            }
        });
     })
     .then(()=> window.location.href = "palabras-list.html")
     .catch((error)=> console.log("Error al guardar la palabra: ", error));

}

async function cargarPalabras() {
    try {
        const response = await fetch(urlPalabras);
        const palabras = await response.json();
        const listadoPalabras = document.getElementById("listado-palabras");

        if(palabras.length === 0) {
            listadoPalabras.innerHTML = "<p>No hay palabras registradas.</p>";
        }else {
            listadoPalabras.innerHTML = palabras.map((palabra)=>{
                return `<div class="palabras">
                    <p>${palabra.palabra} - ${palabra.dificultad}</p>
                    <button class="eliminar" onclick="eliminarPalabra(${palabra.id})">Eliminar </button>
                    <button class="editar" onclick="editarPalabra(${palabra.id})">Editar </button>
                </div>`
            }).join("");
        }
    }catch(error) {
        console.log("Error al cargar las palabras: ", error);
    }
}

async function cargarPalabra(id) {
    fetch(urlPalabras)
    .then((respose)=> respose.json())
    .then((data)=>{
        const palabra = data.find((palabraP)=>palabraP.id == id)
        document.getElementById("palabra").value = palabra.palabra;
        document.getElementById("dificultad").value = palabra.dificultad;
    })
    .catch((error)=> console.log("Error al cargar la palabra", error));
}


async function eliminarPalabra(id) {
    const urlDelete = `${urlPalabras}/${id}`;
    // console.log(urlDelete);

    fetch(`${urlDelete}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "aplication/json"
        }
    })
    .then((response)=>response.json())
    .then(()=>cargarPalabras())
    .catch((error)=> console.log("Error al eliminar la palabra: ", error ))
}


async function editarPalabra(id) {
    window.location.href = `palabras-edit.html?id=${id}`;
}