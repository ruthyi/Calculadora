//Cambio de color del body
let i = 0;
function changeColor(color) {
    document.body.style.background = color;
}
function cambiar() {
    if (i == 0) {
        document.getElementById("cabecera").innerHTML = "Dark";
        document.getElementById("general").style.background='lightgray';
        document.getElementById("cal").style.color='black';   
        i++;
        changeColor('black');
    } else {
        document.getElementById("cabecera").innerHTML = "Light"; 
        document.getElementById("cal").style.color='lightgray';       
        document.getElementById("general").style.background='midnightblue';

        i = 0;
        changeColor('aliceblue');
    }
}
// Funcionalidad Calculadora
//Variables
let operandoa;
let operandob;
let operacion;

//