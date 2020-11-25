function getexpirydate( nodies){

    var fecha;
    
    hui = new Date();
    
    fechan=Date.parse(hui);
    
    hui.setTime(fechan+nodies*24*60*60*1000);
    
    fecha = hui.toUTCString();
    
    return fecha;
    
    }
    
    function getcookie(nomcookie) {
    
    var cookies=""+document.cookie;
    
    var index1=cookies.indexOf(nomcookie);
    
    if (index1==-1 || nomcookie=="") return "";
    
    var index2=cookies.indexOf(";",index1);
    
    if (index2==-1) index2=cookies.length;
    
    return unescape(cookies.substring(index1+nomcookie.length+1,index2));
    
    }
    
    function setcookie(nombre,valor){
    
    cookies=nombre+"="+escape(valor)+";max-age= 60*60*24";
    
    document.cookie=cookies;
    
    if(!getcookie(nombre)){
    
    return false;
    
    }
    
    else{
    
    return true;
    
    }
    
    }
    
    contador= getcookie("cont");
    
    if(isNaN(contador)){
    
    y=setcookie("cont",0,1);
    
    contador=0;
    
    }
    
    contador++;
    if (contador==10){
        contador=0; 
        var eliminarCookie = function (nomcookie){
            log("eliminarCookie: "+ nomcookie);
            return document.cookie = nomcookie + '=;max-age=60;';
        }
    }
    
    document.write("Has entrat a esta página "+contador+ " vegades");
    
    y=setcookie("cont",contador,1);