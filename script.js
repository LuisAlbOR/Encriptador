const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".copiar")

//let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];

//para verificar en consola del navegador
//console.table(matrizCodigo)

//Creación de la funcion del boton encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

//Creación de la funcion para encriptar
function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    //Ciclo for para verificar las letras a encriptar
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    return stringEncriptado

}

//Creación de la funcion del boton desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

//Creación de la funcion para desencriptar
function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    //Ciclo for para verificar las letras a encriptar
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

    return stringDesencriptado

}

//probando funcion de copiar
function copiar(){
    mensaje.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
}