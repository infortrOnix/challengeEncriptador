function desencriptar(){
    let ingreso = document.querySelector(".input");
    let egreso = document.querySelector(".output");
   
    var  text = egreso.value;
    text = text.toLowerCase();
         
   // let cripto = [["e", "enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];
    let descripto = [["enter", "e"],["imes","i"],["ai","a"],["ober", "o"],["ufat","u"]];
    
    for(let i = 0; i < descripto.length ; i++){
        if(text.includes(descripto[i][0])){
            text = text.replaceAll(descripto[i][0],descripto[i][1]); //reemplaza lo del campo [i][0] primer columna por el valor [i][1] segunda columna
            
        } 
    
    }
    
   
    ingreso.value = text;

}