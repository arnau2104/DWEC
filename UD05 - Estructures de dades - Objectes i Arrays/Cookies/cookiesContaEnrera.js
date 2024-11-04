let crearCookie = document.getElementById('crearCookie');
let veureCookie = document.getElementById('veureCookie');
let temporitzador = document.getElementById('temporitzador');
let valorCookie = document.getElementById('valorCookie');

let time = new Date();
duracion = 30;
time.setSeconds(duracion);
temporitzador.innerHTML = time.getSeconds();


function funcCrearCookie() {
    let nom = document.getElementById('nom').value;

    let expirationDate = new Date();
expirationDate.setSeconds(expirationDate.getSeconds() + duracion);

    document.cookie = "nom = " + nom + "; expires = " + expirationDate.toUTCString() + ";";
};

function restart() {
    temporitzador.innerHTML = duracion;
    valorCookie.hidden = true;
}

function funcTemporitzador() {
        let seconds = time.getSeconds();
        seconds = seconds - 1;
        if(seconds == 0) {
            temporitzador.innerHTML = "0"
            setTimeout(restart, 2000 );
        }else {
        time.setSeconds(seconds);
        
        temporitzador.innerHTML =seconds;
        }
   
};

let contaeEnrera;
crearCookie.addEventListener('click', function(){
    funcCrearCookie();
    restart;
    contaeEnrera = setInterval(funcTemporitzador,1000);
    veureCookie.hidden = false;
        
});

veureCookie.addEventListener('click', function(){
    valorCookie.hidden = false;
    valorCookie.innerHTML = document.cookie;
    console.log(document.cookie);
})