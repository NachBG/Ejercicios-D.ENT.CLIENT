function temporizador(temps,res,reject){

    const promesa = new Promise ((resolve,reject) =>{
        
        setTimeout(()=>{
            resolve=("tiempo concluido");
            document.getElementById("mostrar").innerHTML="Tiempo concluido";

        },temps);
    
      

        
        setTimeout(()=>{
            reject=("El tiempo no va bien");
            document.getElementById("mostrar").innerHTML="El tiempo no va bien";

        },temps*2);
    })
}
temporizador(5000);