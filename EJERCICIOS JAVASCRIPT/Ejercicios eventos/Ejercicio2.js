function start(){
    document.getElementById("capa1") .style.opacity = '0.5';
}

function dragleave(){

    var x = document.getElementById("capa1").style.opacity = "100%";
}

function cambioColor(){
   
    document.getElementById("capa2").style.background= "red";
}

function dragrelease(){

    document.getElementById("capa2").style.background= "white";
}

function ondrag(capa){
    capa.preventDefault();
}

function final(){
    document.getElementById("capa1").remove();
    document.getElementById("capa2").style.background="yellow";
    document.getElementById("capa2").innerHTML="Lo has logrado!!";
}

document.getElementById("capa1").addEventListener("drag", start, false);
document.getElementById("capa1").addEventListener("dragend",dragleave,false);

document.getElementById("capa2").addEventListener("dragenter",cambioColor,false);
document.getElementById("capa2").addEventListener("dragleave",dragrelease,false);
document.getElementById("capa2").addEventListener("dragover",ondrag,false);
document.getElementById("capa2").addEventListener("drop",final,false);
