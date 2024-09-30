let num1;
let num2;

do {
    num1 = parseInt(prompt("Ingrese un numero: "));
} while (isNaN(num1)/*isNaN mientras no sea el numero seleccionado*/);
do {
    num2 = parseInt(prompt("Ingrese otro numero: "));

} while (isNaN(num2));
let suma = num1 + num2;
alert("La suma es: " + suma);