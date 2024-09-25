document.write("Hola Mundo.");
//document.getElementById("cabecera").innerHTML = "Hola Mundo desde JavaScript!"; //Con el id podemos cambiar el contenido de una etiqueta Html.
console.log("Hola Mundo desde la consola!"); //Sólo se ve en consola.
alert("Hola Mundo desde una alerta!"); //Se muestra una ventana emergente con el mensaje.
let nombre = prompt("Introduce tu nombre.");  //Sirve para introducir datos.
document.getElementById("cabecera").innerHTML = "Bienvenid@ a mi Web!" + nombre;

let num1 = parseInt(prompt("Introduce un número."));
let num2 = parseInt(prompt("Introduce otro número."));
let suma = num1 + num2;
//alert("La suma de los números introducidos es: " + suma);
let mensaje = `La suma de los números: ${num1}  y ${num2} es ${suma}`;
alert(mensaje);
let respuesta = confirm("Te gusta el fútbol?");
alert(`Tu respuesta es: ${respuesta}`);