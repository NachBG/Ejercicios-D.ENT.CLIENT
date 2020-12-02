
var imagen = document.getElementById('imagen');
 document.addEventListener('onkeyup', imagenKey);
  function imagenKey(imagen) {
    var event =  Event(altKey, keyCode);    

      if(event.altKey && event.keyCode === 123){
       document.getElementById("imagen").style.backgroundImage = '<img src = "fondoo.jpg" />'; 
      }
}
