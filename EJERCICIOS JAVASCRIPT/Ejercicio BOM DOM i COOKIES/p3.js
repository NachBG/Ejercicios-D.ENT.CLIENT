var arr = ['Aceitunas', 'Macarrones', 'Brocoli', 'Ensaimada', 'Longanizas', 'Botifarres', 'Miel', 'Yougurts', 'Platanos', 'Cacahuetes' ]; 
function ordena(){
    
    var opcion = confirm("Clica Aceptar o Cancelar");
    
    if(opcion == true){
        arr.sort();
        document.getElementById("comida").innerHTML= arr;
    }
    else{
        echo (" se queda igual");
    }
   
}




