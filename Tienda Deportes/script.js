function capturaArticulos() {

    const inici = Date.now();

    while((Date.now() - inici) < 3000) {
        console.log("cargando...");
    }

    return [
        {id: 1, nombre: "Pelota de futbol", precio:20},
        {id: 2, nombre: "Raqueta de tenis", precio:50}
    ]
}

function mostrarAriculos() {
    const articulos = document.getElementById("articulos");

    articulos.innerHTML = "<p>Cargando articulos...</p>";

    const articulosRecuperados = capturaArticulos(); // Llamada bloqueante
    
    articulos.innerHTML = articulosRecuperados
                            .map((a)=>`<p>${a.nombre} - ${a.precio}€</p>`)
                            .join("")
}

mostrarAriculos();