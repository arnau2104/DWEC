const urlPalabras = "http://localhost:3000/palabras";

const url = window.location.pathname;
if(url.includes("palabras-list.html")){
    cargarPalabras();
}

document.getElementById("palabra-form")?.addEventListener('submit', guardarPalabra);

async function guardarPalabra(e) {
    e.preventDefault();

    const metodo = "POST";
    
    const url = urlPalabras;

     const palabra = {
        id: 0,
        palabra: document.getElementById("palabra").value,
        dificultad : +document.getElementById("dificultad").value
     }

     fetch(`${urlPalabras}`)
     .then((response)=> response.json())
     .then((data)=>{
        if(data && data.length > 0){
        palabra.id = +data[data.length - 1].id + 1;
        }else {
          palabra.id = +1;  
        }
        return fetch(`${url}`, {
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