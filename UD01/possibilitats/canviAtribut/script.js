let alonso = document.getElementById('alonso');
console.dir(alonso);

function canviarImatge() {
    if(alonso.src.match("alo")) {
        alonso.src = "./imatges/mercedes.jpg";
        console.log("1");
    } else {
        alonso.src = "./imatges/alonso.jpg";
        console.log("2");
    }

    alonso.
    
    console.log("3");
};

function canviarTamany() {
   
        alonso.offsetWidth = 500;
    
}
