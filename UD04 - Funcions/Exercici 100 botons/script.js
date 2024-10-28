let index;
let botoclick;
var newButton;
var newContent;
let intents = 0;
let container = document.getElementById('cont');
let aleatori = Math.floor(Math.random() * 100);


for(let  i = 1; i<=100;i++) {
     index = i;
    newButton = document.createElement("button");
    newButton.innerHTML = `boto ${index}`;
    newButton.id = index;
    container.appendChild(newButton); //añade texto al boton creado.

    newButton.addEventListener('click', function(){
        botoclick = parseInt(this.id);
        joc();
    });

    

};



function joc(){
    intents ++;

    if(intents <= 5){
        if(botoclick == aleatori){
            console.log('Has guanyat');
        }else if(botoclick < aleatori){
            for(let i = botoclick -1; i >=1; i--){
                let botopereliminar = document.getElementById(i);
                if(botopereliminar){
                botopereliminar.remove();
                }
            }
        }else if(botoclick > aleatori){
            for(let i = botoclick +1; i <=100; i++){
                let botopereliminar = document.getElementById(i);
                if(botopereliminar){
                botopereliminar.remove();
                }
        }
        
    }
    if(intents === 5 && botoclick !== aleatori){
        console.log('looser era ' + aleatori);
    }

}

}