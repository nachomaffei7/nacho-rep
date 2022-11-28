
let yosoy = "Hola, soy Ignacio, "
let nombre = "Programación" + " Fácil.";
let saludo = "les doy la bienvenida a ";
let fraseCompleta = yosoy + saludo + nombre;

console.log(fraseCompleta);

let frase = "JavaScript " + "es un lenguaje " + "esencial para crear " + " sitios web poderosos.";
console.log(frase);

let numeroString1 = "10 ";
let numeroString2 = "20 ";
let numeroString3 = "30 ";
let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;
console.log(concatenaNumeros);

let nombre2 = prompt("Indica tu nombre:");
let edad = prompt("Introduce tu edad:");
let sexo = prompt("Sexo:")

if (edad >= 20 && sexo == 'mujer'|| sexo =='femenino')
    alert(nombre2+ ", sos mujer mayor de 20, podes entrar.");
else if(edad >= 18 && sexo == 'varon'|| sexo =='masculino')    
     alert(nombre2+", sos varon mayor de 18, podes entrar")
else
     alert("No podes entrar.");
    


