

function encriptar(){
    let ingreso = document.querySelector(".input");
    let egreso = document.querySelector(".output");
   
    var  text = ingreso.value;
    text = text.toLowerCase();
         
    let cripto = [["e", "enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];
    
    for(let i = 0; i < cripto.length ; i++){
        if(text.includes(cripto[i][0])){
            text = text.replaceAll(cripto[i][0],cripto[i][1]); //reemplaza lo del campo [i][0] primer columna por el valor [i][1] segunda columna
            
        } 
    
    }
   
    egreso.value = text;

}