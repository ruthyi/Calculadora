let contParentesis = 0;
let operacion ="";
let num1 = 0;
let clickIgual = 0;
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');

function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}
function porciento(a, b) {
    return (a * b) / 100;
}
function potenciacion(a, b) {
    return Math.pow(a, b);
}
function radical(a) {
    return Math.sqrt(a);
}

function resultado() {
    switch (operacion) {
        case '+':
            return sumar(num1, parseFloat(displayValorActual.textContent));
            break;
        case '-':
            return restar(num1, parseFloat(displayValorActual.textContent));
            break;
        case '*':
            return multiplicar(num1, parseFloat(displayValorActual.textContent));
            break;
        case '/':
            return dividir(num1, parseFloat(displayValorActual.textContent));
            break;
        case '%':
            return porciento(num1, parseFloat(displayValorActual.textContent));
            break;
        case '^':
            return potenciacion(num1, parseFloat(displayValorActual.textContent));
            break;
        case '√':
            return radical(parseFloat(displayValorActual.textContent));
            break;
        default:
            return 0;
            break;
    }
}
const punto = document.querySelector(".punto");
punto.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        displayValorAnterior.innerHTML += "."
    } else if (operacion !== "" && clickIgual === 0) {
        displayValorActual.innerHTML += "."
    } else {
        clickIgual = 0;
        displayValorAnterior.innerHTML = "."
        displayValorActual.innerHTML = ""
    }
});

const siete = document.querySelector(".siete");
siete.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        displayValorAnterior.innerHTML += "7"
    } else if (operacion !== "" && clickIgual === 0) {
        displayValorActual.innerHTML += "7"
    } else {
        clickIgual = 0;
        displayValorAnterior.innerHTML = "7"
        displayValorActual.innerHTML = ""
    }
});

const ocho = document.querySelector(".ocho");
ocho.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        displayValorAnterior.innerHTML += "8"
    } else if (operacion !== "" && clickIgual === 0) {
        displayValorActual.innerHTML += "8"
    } else {
        clickIgual = 0;
        displayValorAnterior.innerHTML = "8"
        displayValorActual.innerHTML = ""
    }
});

const nueve = document.querySelector(".nueve");
nueve.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        displayValorAnterior.innerHTML += "9"
    } else if (operacion !== "" && clickIgual === 0) {
        displayValorActual.innerHTML += "9"
    } else {
        clickIgual = 0;
        displayValorAnterior.innerHTML = "9"
        displayValorActual.innerHTML = ""
    }
});
const cuatro = document.querySelector(".cuatro");
cuatro.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        displayValorAnterior.innerHTML += "4"
    } else if (operacion !== "" && clickIgual === 0) {
        displayValorActual.innerHTML += "4"
    } else {
        clickIgual = 0;
        displayValorAnterior.innerHTML = "4"
        displayValorActual.innerHTML = ""
    }
});

const cinco = document.querySelector(".cinco");
cinco.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        displayValorAnterior.innerHTML += "5"
    } else if (operacion !== "" && clickIgual === 0) {
        displayValorActual.innerHTML += "5"
    } else {
        clickIgual = 0;
        displayValorAnterior.innerHTML = "5"
        displayValorActual.innerHTML = ""
    }
});

const seis = document.querySelector(".seis");
seis.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        displayValorAnterior.innerHTML += "6"
    } else if (operacion !== "" && clickIgual === 0) {
        displayValorActual.innerHTML += "6"
    } else {
        clickIgual = 0;
        displayValorAnterior.innerHTML = "6"
        displayValorActual.innerHTML = ""
    }
});

const uno = document.querySelector(".uno");
uno.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        displayValorAnterior.innerHTML += "1"
    } else if (operacion !== "" && clickIgual === 0) {
        displayValorActual.innerHTML += "1"
    } else {
        clickIgual = 0;
        displayValorAnterior.innerHTML = "1"
        displayValorActual.innerHTML = ""
    }
});

const dos = document.querySelector(".dos");
dos.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        displayValorAnterior.innerHTML += "2"
    } else if (operacion !== "" && clickIgual === 0) {
        displayValorActual.innerHTML += "2"
    } else {
        clickIgual = 0;
        displayValorAnterior.innerHTML = "2"
        displayValorActual.innerHTML = ""
    }
});

const tres = document.querySelector(".tres");
tres.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        displayValorAnterior.innerHTML += "3"
    } else if (operacion !== "" && clickIgual === 0) {
        displayValorActual.innerHTML += "3"
    } else {
        clickIgual = 0;
        displayValorAnterior.innerHTML = "3"
        displayValorActual.innerHTML = ""
    }
});


const cero = document.querySelector(".cero");
cero.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        displayValorAnterior.innerHTML += "0"
    } else if (operacion !== "" && clickIgual === 0) {
        displayValorActual.innerHTML += "0"
    } else {
        clickIgual = 0;
        displayValorAnterior.innerHTML = "0"
        displayValorActual.innerHTML = ""
    }
});

//Operaciones 

const suma = document.querySelector(".suma");
suma.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        num1 = parseFloat(displayValorAnterior.textContent);
        displayValorAnterior.innerHTML += "+";
        operacion = "+";
    } else if (operacion === "" && clickIgual === 1) {
        num1 = parseFloat(displayValorActual.textContent);
        displayValorAnterior.innerHTML = displayValorActual.textContent + "+";
        displayValorActual.innerHTML = "";
        operacion = "+";
        clickIgual = 0;
    } else {
        displayValorAnterior.innerHTML = resultado() + "+";
        num1 = parseFloat(displayValorAnterior.textContent)
        displayValorActual.innerHTML = "";
        operacion = "+";
    }
});

const resta = document.querySelector(".resta");
resta.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        num1 = parseFloat(displayValorAnterior.textContent);
        displayValorAnterior.innerHTML += "-";
        operacion = "-";
    } else if (operacion === "" && clickIgual === 1) {
        num1 = parseFloat(displayValorActual.textContent);
        displayValorAnterior.innerHTML = displayValorActual.textContent + "-";
        displayValorActual.innerHTML = "";
        operacion = "-";
        clickIgual = 0;
    } else {
        displayValorAnterior.innerHTML = resultado();
        num1 = parseFloat(displayValorAnterior.textContent)
        displayValorAnterior.innerHTML += "-";
        displayValorActual.innerHTML = "";
        operacion = "-";
    }
});

const multiplicacion = document.querySelector(".multiplicacion");
multiplicacion.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        num1 = parseFloat(displayValorAnterior.textContent);
        displayValorAnterior.innerHTML += "*";
        operacion = "*";
    } else if (operacion === "" && clickIgual === 1) {
        num1 = parseFloat(displayValorActual.textContent);
        displayValorAnterior.innerHTML = displayValorActual.textContent + "*";
        displayValorActual.innerHTML = "";
        operacion = "*";
        clickIgual = 0;
    } else {
        displayValorAnterior.innerHTML = resultado();
        num1 = parseFloat(displayValorAnterior.textContent)
        displayValorAnterior.innerHTML += "*";
        displayValorActual.innerHTML = "";
        operacion = "*";
    }
});

const division = document.querySelector(".division");
division.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        num1 = parseFloat(displayValorAnterior.textContent);
        displayValorAnterior.innerHTML += "/";
        operacion = "/";
    } else if (operacion === "" && clickIgual === 1) {
        num1 = parseFloat(displayValorActual.textContent);
        displayValorAnterior.innerHTML = displayValorActual.textContent + "/";
        displayValorActual.innerHTML = "";
        operacion = "/";
        clickIgual = 0;
    } else {
        displayValorAnterior.innerHTML = resultado();
        num1 = parseFloat(displayValorAnterior.textContent)
        displayValorAnterior.innerHTML += "/";
        displayValorActual.innerHTML = "";
        operacion = "/";
    }
});

const porcentaje = document.querySelector(".porcentaje");
porcentaje.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        num1 = parseFloat(displayValorAnterior.textContent);
        displayValorAnterior.innerHTML += "%";
        operacion = "%";
    } else if (operacion === "" && clickIgual === 1) {
        num1 = parseFloat(displayValorActual.textContent);
        displayValorAnterior.innerHTML = displayValorActual.textContent + "%";
        displayValorActual.innerHTML = "";
        operacion = "%";
        clickIgual = 0;
    } else {
        displayValorAnterior.innerHTML = resultado();
        num1 = parseFloat(displayValorAnterior.textContent)
        displayValorAnterior.innerHTML += "%";
        displayValorActual.innerHTML = "";
        operacion = "%";
    }
});

const potencia = document.querySelector(".potencia");
potencia.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0) {
        num1 = parseFloat(displayValorAnterior.textContent);
        displayValorAnterior.innerHTML += "^";
        operacion = "^";
    } else if (operacion === "" && clickIgual === 1) {
        num1 = parseFloat(displayValorActual.textContent);
        displayValorAnterior.innerHTML = displayValorActual.textContent + "^";
        displayValorActual.innerHTML = "";
        operacion = "^";
        clickIgual = 0;
    } else {
        displayValorAnterior.innerHTML = resultado();
        num1 = parseFloat(displayValorAnterior.textContent)
        displayValorAnterior.innerHTML += "^";
        displayValorActual.innerHTML = "";
        operacion = "^";
    }
});

const raiz = document.querySelector(".raiz");
raiz.addEventListener('click', function () {
    if (operacion === "" && clickIgual === 0 && displayValorAnterior.textContent === "") {
        displayValorAnterior.innerHTML = "√";
        operacion = "√";
    } else if (operacion === "" && clickIgual === 0 && displayValorAnterior.textContent !== "" && displayValorAnterior.textContent !== " √ ") {
        num1 = displayValorAnterior.textContent;
        displayValorAnterior.innerHTML = "√" + num1;
        operacion = "√";
        displayValorActual.innerHTML = num1
        displayValorActual.innerHTML = resultado();
        num1 = 0;
    }
});







const igual = document.querySelector(".igual");
igual.addEventListener("click", function () {
    displayValorAnterior.innerHTML += displayValorActual.textContent;
    displayValorActual.innerHTML = resultado();
    clickIgual = 1;
    operacion = "";
});

const ac = document.querySelector(".ac");
ac.addEventListener("click", function () {
    displayValorAnterior.innerHTML = "";
    displayValorActual.innerHTML = "";
    clickIgual = 0;
    operacion = "";
    num1 = 0;
});

const ce = document.querySelector(".ce");
ce.addEventListener("click", function () {

    let aux = displayValorAnterior.textContent;
    console.log(aux);
    aux = aux.substring(0, aux.length - 1);
    console.log(displayValorAnterior.textContent.length);

    if (displayValorActual.textContent.length >= 1) {

        if (displayValorActual.textContent.length > 1) {
            let aux = displayValorActual.textContent;
            aux = aux.substring(0, aux.length - 1);
            displayValorActual.innerHTML = aux;
            console.log(aux);
        } else {
            displayValorActual.innerHTML = "";
        }

    } else if (operacion!=="") {
        let aux = displayValorAnterior.textContent;
        aux = aux.substring(0, aux.length - 1);
        displayValorAnterior.innerHTML = aux;
        operacion = ""
    }else{
        let aux = displayValorAnterior.textContent;
        aux = aux.substring(0, aux.length - 1);
        displayValorAnterior.innerHTML = aux;
    }

});





