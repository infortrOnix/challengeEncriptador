
//script encriptar

const textoEncriptar = document.querySelector(".area-in").value;
const textoDesencriptar = document.querySelector(".area-out");
//console.log(textoEncriptar);


function IniciarEncriptado(){

    console.log(textoEncriptar);
    const textoEncriptado = encriptar(textoEncriptar);
    textoDesencriptar.value = textoEncriptado;
}

function encriptar(textoParaEncriptar){
    let matrizCode = [["a", "ai"],["e", "enter"],["i", "imes"],["o", "ober"],["u", "ufat"]];

    for(let i=0; 1< matrizCode.length; i++){
        if(textoParaEncriptar.include(matrizCode[i][0])){
            textoParaEncriptar = textoParaEncriptar.replaceAll(matrizCode[i][0], matrizCode[i][1]);
            return textoParaEncriptar;
        }
    }
}

