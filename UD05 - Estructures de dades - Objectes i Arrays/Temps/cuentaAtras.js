let tiempo = document.getElementById("tiempo");
let start = document.getElementById("start");

let time = new Date();
duracion = 10;
time.setSeconds(duracion);
tiempo.innerHTML =  time.getSeconds();

function cuentaAtras() {
    let seconds = time.getSeconds();
    seconds = seconds - 1;
    if(seconds == 0) {
        tiempo.innerHTML = "0"
        
        setTimeout(restart, 2000 );


    }else {
    time.setSeconds(seconds);
    
    tiempo.innerHTML =seconds;
    }
};

function restart() {
    start.hidden = false
    tiempo.innerHTML = duracion;
}

let cuenta;
start.addEventListener('click', function(){
    start.hidden = true;
   cuenta =  setInterval(cuentaAtras,1000);
});

