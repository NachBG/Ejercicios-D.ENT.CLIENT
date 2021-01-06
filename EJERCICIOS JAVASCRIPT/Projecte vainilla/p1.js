
//funcion para que al pulsar CTRl + F10 o al pasar 5 segundos carga otra pantalla


window.addEventListener("keyup",
function(teclaf10){
    if (teclaf10.ctrlKey == true && teclaf10.key == 'F10'){
        mostrar();
    }
    function mostrar(){
        window.location = "/p1formu.html";

    }
},
false

);setTimeout(function(){
    window.location = "/p1formu.html" },5000);