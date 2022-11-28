//Cambio de color del body
let o = 0;
function changeColor(color) {
    document.body.style.background = color;
}
function cambiar() {
    if (o == 0) {
        document.getElementById("cabecera").innerHTML = "Dark";
        document.getElementById("general").style.background='lightgray';
        document.getElementById("cal").style.color='black';   
        o++;
        changeColor('black');
    } else {
        document.getElementById("cabecera").innerHTML = "Light"; 
        document.getElementById("cal").style.color='lightgray';       
        document.getElementById("general").style.background='midnightblue';

        o = 0;
        changeColor('aliceblue');
    }
}