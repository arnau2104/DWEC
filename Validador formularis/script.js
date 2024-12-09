// Capturem els elements del DOM
const form = document.getElementById("form");
const nomUsuari = document.getElementById("nomUsuari");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const edat = document.getElementById("edat");
const nivellAngles = document.getElementById("nivellAngles");
const termesCondicions = document.getElementById("termesCondicions");



// Functions
function mostraError(input, missatge) {
    const formControl = input.parentElement;
    
    formControl.className = 'form-control error';
    const label = formControl.querySelector("label");
    const small = formControl.querySelector("small");
    small.innerText = label.innerText + ' ' + missatge; 
}

function mostraCorrecte(input, missatge) {
    const formControl = input.parentElement;

    formControl.className = 'form-control correcte';
}

function esEmailValid(input) {
    // javascript validació email regex
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase()); // retorna true o flase

    if(re.test(String(input.value).toLowerCase())) {
        mostraCorrecte(input);
    }else {
        mostraError(input, 'no té el fromat correcte');
    }
}

function esObligatori(inputArray) {

    inputArray.forEach((input) => {
        console.log(input);

          if(input.value === '') {
            mostraError(input, ' es obligatori');
          }else {
            mostraCorrecte(input);
            }
    });
}

function comprovaLongitud(input, min, max) {
    if(input.value.length < min) {
        mostraError(input, `ha de tenir amlenys ${min} caràcters`);
    }else if (input.value.length > max) {
        mostraError(input, `ha de tenir màxim ${max} caràcters`);
    }else {
        mostraCorrecte(input);
    }
}

function comprovaContrasenyesIguals(input1,input2) {
    if(input1.value != input2.value) {
        mostraError(input2, ': no coincideixen');
    }
}

// Events
form.addEventListener('submit' , (e)=> {
    e.preventDefault();
   
    esObligatori([nomUsuari, email, edat,nivellAngles,termesCondicions, password, password2]);

    comprovaLongitud(nomUsuari, 3, 15);
    comprovaLongitud(password, 4, 10);

    esEmailValid(email);

    comprovaContrasenyesIguals(password,password2);

    if(!termesCondicions.checked) {
        mostraError(termesCondicions, 'han de ser acceptats');
    }
   
});

nomUsuari.addEventListener('keyup', (e)=> {
    esObligatori([nomUsuari]);
    comprovaLongitud(nomUsuari, 3, 15);
});

email.addEventListener('keyup', (e)=> {
    esObligatori([ email]);
    esEmailValid(email);
});

password.addEventListener('keyup' , (e)=> {
    esObligatori([ password]);
    comprovaLongitud(password, 4, 10);
});

password2.addEventListener('keyup', (e)=> {
    esObligatori([ password2]);
    comprovaContrasenyesIguals(password,password2);
});

nivellAngles.addEventListener('change', (e)=> {
    esObligatori([nivellAngles]);
    if(nivellAngles.value == '') {
        mostraError(nivellAngles, 'es obligatori')
    }

})


/*Reptes

1: els misatges d'error han de desapareixer una vegada l'error esta solventat
2: Afegeix un camp numeric per l'edat. Afegeix la validacio d'obligatori
*/