// Capturar elementos del DOM.
const contenedor = document.querySelector('.contenedor');
const asientos = document.querySelectorAll('.fila .asiento:not(.ocupado)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');

// Precio de la pelicula seleccionada
let precioDelTicket = +peliculaSelect.value;


//FUNCIONES
function actualizaSeleccionAsientos() {
   const asientosSeleccionados = document.querySelectorAll('.fila .asiento.seleccionado');
  // console.log(asientosSeleccionados);

   const indiceAsientos = [...asientosSeleccionados].map(function(asiento){
      return [...asientos].indexOf(asiento);
   });

   localStorage.setItem('asienstosSeleccionados', JSON.stringify(indiceAsientos));

   const contadorAsientosSeleccionados = asientosSeleccionados.length;

   contador.innerText = contadorAsientosSeleccionados;

   total.innerText = contadorAsientosSeleccionados * precioDelTicket;

}

function llenaIU(){
   const asienstosSeleccionados =  JSON.parse(localStorage.getItem('asienstosSeleccionados'));


   if(asienstosSeleccionados !== null && asienstosSeleccionados.length > 0){
      asientos.forEach((asiento,index)=>{
         if(asienstosSeleccionados.indexOf(index) > -1) {
            asiento.classList.add('seleccionado');
         }
      });
   }

   const indicePeliculaSeleccionada = localStorage.getItem('indicePeliculaSeleccionada');

   if(indicePeliculaSeleccionada) {
      peliculaSelect.selectectIndex = indicePeliculaSeleccionada;
   }

}



//EVENTOS 
contenedor.addEventListener('click', (e)=>{
   if(e.target.classList.contains('asiento') && !e.target.classList.contains('ocupado')){
    
      e.target.classList.toggle('seleccionado');
      actualizaSeleccionAsientos();
   }
});

peliculaSelect.addEventListener('change', (e)=>{
   precioDelTicket = +e.target.value;
   localStorage.setItem('indicePeliculaSeleccionada', e.target.selectedINdex);
   localStorage.setItem('precioPeliculSeleccionada', e.target.value);
   actualizaSeleccionAsientos();
});