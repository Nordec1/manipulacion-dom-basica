1 // Que es una variable y para que sirve?

/* Respuesta:
    Es un espacio reservado en memoria que nos permite almacenar informacion. 
    Podemos almacenar diferentes tipos de datos para usarlos en nuestro codigo. En JS existe tres formas de crear una 
    variable var, let, const. en ES6 nacen let & const. Pero ya casi no se usa var, en la actualidad es mejor usar
    Let y const
*/

// Cual es la diferencia entre declarar y inicializar una variable?

/* Respuesta:
    Cuando declaramos una variable solo la estamos creando con tal nombre. Mientras que inicializar o (renicializar)
    es asignarle un valor a esa variable.
*/

//EJEMPLO:

//Declarar una variable
var nombre;
//Inicializar la variable
nombre = 'Agustin';
//Podemos generar este proceso en una sola linea de codigo 
var nombre = 'Agustin';


//Cual es la diferencia entre sumar numeros y concatenar strings?
//Cual operador me permite sumar y concatenar?

/* Respuesta:
    El operador que nos permite sumar o concatenar es el +. Cuando sumamos numeros estamos haciendo una operacion
    matematica con dos tipos de datos Numbers. Mientras que al concatenar strings estamos uniendo (concatenar)
    dos tipos de datos strings que son cadenas de textos.
*/


2 // Determina el nombre y tipo de dato para almacenar en variables la siguiente informacion:

// Respuesta:

Nombre: 'String'
Apellido: 'String'
NombreDeUsuarionEnPlatzi: 'String'
Edad: 'Number'
CorreoElectronico: 'String'
MayorDeEdad: 'Boolean'
DineroAhorrado: 'Number'
Deudas: 'Number'


3 //Traduce a codigo JavaScript las variables del ejemplo anterior y deja tu codigo en los comentarios.

let nombre = 'Luciano';
let apellido = 'Cedron';
let username = 'pepito';
let edad = 21;
let mail = 'lucianocedron007@gmail.com';
let esMayorDeEdad = true;
let dineroAhorrado = 25000;
let deudas = 15000;


4 // Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:


//Nombre completo (nombre y apellido)

let nombreCompleto = nombre + ' ' + apellido;

console.log(`Mi nombre completo es ${nombreCompleto}`);

//Dinero real (dinero ahorrado menos deudas)

let dineroTotal = dineroAhorrado - deudas;

console.log(`Mi dinero total es $${dineroTotal}`);



//FUNCIONES//

1 // Responde las siguientes preguntas.

// Que es una funcion?

/* Respuesta: 
    Las funciones nos permiten encapsular (guardar) bloques de codigo para reutilizarlos
    y ejecutarlos en el futuro.
*/

// Cuando me sirve usar una funcion en mi codigo?

/* Respuesta: 
    Nos sirve cuando tenemos variables o bloques de codigo muy parecidos (con cambios que podrian ser parametros
    y argumentos) que podemos encapsular para reutilzar mas de una vez en el futuro.

    Tambien nos sirve para ordenar y mejorar la legibilidad de nuestro codigo.
*/

// Cual es la diferencia entre parametros y argumentos en una funcion?

/* Respuesta: 
    Las funciones reciben parametros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.
*/

//EJEMPLO ABAJO

function myFunction(peso, dolar){ //Aca la funcion esta recibiendo los parametros (Peso y Dolar).
    //Todo mi codigo aqui
}

myFunction(200 * 310); //Y aca le pasamos los argumentos (200 * 300) cuando ejecutamos la funcion.


2 // Convierte el siguiente codigo en una funcion, pero cambiando cuando sea necesario las variables constantes
//por parametros y argumentos en una funcion:

let name = "Juan David";
let lastname = "Castro Gallego";
let completeName = name + lastname;
let nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

//Mi solucion

function nombreCompleto(name, lastname){
    return name + ' ' + lastname;
}

function saludo (name, lastname, username){
    const completeName = nombreCompleto(name, lastname);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");
}

saludo('Luciano Agustin', 'Cedron', 'Chuchi');


//Condicionales 

1 //Que es un condicional?

/* Respuesta: 
    Son la forma en que ejecutamos un bloque de codigo u otro dependiendo de alguna condicion o validacion.
*/ 


//Que tipos de condicionales existen en JavaScript y cuales son sus diferencias?

/* Respuesta:
    IF (else y else if), Switch
    El condicional IF (con el else y else if) nos permite hacer validaciones completamente distintas (si asi queremos)
    en cada validacion o condicional. En cambio, en el switch todos los cases se comparan con la misma variable o
    condicion que definimos en el switch.
*/


//Puedo combinar funciones y condicionales?

/* Respuesta: 
    Si, las funciones pueden encapsular cualquier bloque de codigo incluyendo los condicionales.
*/

2 // Replica el comportamiento del siguiente codigo que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un annio");
       break;
   case "ExpertPlus":
       console.log("Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un annio");
       break;
}


// IF, (else y else if): 

if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis.");

} else if(tipoDeSuscripcion == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes.");

}else if(tipoDeSuscripcion == 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un annio.");

}else if(tipoDeSuscripcion == 'ExpertPlus'){
    console.log("Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un annio.");

}else{
    console.log("Este tipo de Suscipcion no existe.");
}

3 // Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo
//con if (sin else ni else if).


function conseguirTipoDeSuscripcion(suscripcion){
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis.");
        return;
    }

    if(suscripcion == 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes.");
        return;
    }

    if(suscripcion == 'Expert'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un annio.");
        return;
    }

    if(suscripcion == 'ExpertPlus'){
        console.log("Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un annio.");
        return;
    }

    console.warn("Ese tipo de suscripcion no existe");
};


//💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafio a comentar como replicar este
//comportamiento con arrays u objetos y un solo condicional. 😏

//Objeto

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis.',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes.',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un annio.',
    expertPlus: 'Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un annio.'
}

function conseguirTiposDeSuscripcion(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(`Si elegiste el plan ${suscripcion} en el cual ${tiposDeSuscripciones[suscripcion]}`);
        return;
    };

    console.warn("Ese tipo de suscripcion no existe");
};

//Objecto con For in

let userSuscripcion = 'expert';

for(let key in tiposDeSuscripciones){
    if(userSuscripcion == key){
        console.log(`Si elegiste el plan ${key} en el cual ${tiposDeSuscripciones[key]}`);
    };
};


//Array

const tiposDeSuscripcion = [
    'Free',
    'Basic',
    'Expert',
    'ExpertPlus'
];

const infoDeSuscripcion = [
    'Solo puedes tomar los cursos gratis.',
    'Puedes tomar casi todos los cursos de Platzi durante un mes.',
    'Puedes tomar casi todos los cursos de Platzi durante un annio.',
    'Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un annio.'
];

let userSuscripcion = 'Basic';

for(let i = 0; i < tiposDeSuscripcion.length; i++){
    if (userSuscripcion == tipoDeSuscripcion[i]){
        console.log(`Si elegiste el plan ${tiposDeSuscripcion[i]} en el cual ${infoDeSuscripcion[i]}`);
    };
};


//Ciclos

1 // Que es un clico?

/* Respuesta: 
    La forma de ejecutar un bloque de codigo hasta que se cumpla cierta funcion.
    El bucle continuara ejecutandose hasta que la condicion devuelva false.
*/


//Que tipos de ciclos existen en JavaScript?

/* Respuesta:
    Existen tres tipos de clicos. For, while y do while
*/


//Que es un ciclo infinito y por que es un problema?

/* Respuesta:
    Es cuando la validacion de nuestros condicionales nunca se cumplen y termina toteando (dañando) la aplicacion
    (e.j. cuando el navegador ya no puede mas de tanta ejecucion de ese bloque de codigo).
*/


//Puedo mezclar ciclos y condicionales?

/* Respuesta:
    Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar mas condicionales dentro del
    ciclo.
*/


2 //Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

//Ciclo while
//

let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
};

//
//


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//
//

let i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
};

//
//


3 //Escribe un codigo en JavaScript que le pregunte a los usuarios cuanto es 2 + 2. Si responden bien,
//mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. 

let respuesta;

while (respuesta != '4'){
    let pregunta = prompt('Cuanto es 2 + 2?');
    respuesta = pregunta;

    if(respuesta == '4'){
        alert('Felicitaciones, estas en lo correcto es ' + respuesta);
    };
};


//Condicionales 

1 // Que es un Array?

/* Respuesta:
    Es una lista de elementos.
*/


//Que es un objeto?

/* Respuesta:
    Es una lista de elementos pero cada elemento tiene un nombre clave.
*/


//Cuando es mejor usar objetos o arrays?

/* Respuesta:
    Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas (la regla se puede incumplir).
    Pero mientras que un objeto, cuando los nombres de cada elemento son importantes para nuestro algoritmo. 
*/


//Puedo mezclar arrays con objetos o incluso objetos con arrays?

/* Respuesta:
    Si, los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.
*/


2 //Crea una funcion que pueda recibir cualquier array como parametro e imprima su primer elemento.

let frutas = ["Manzana", "Pera", "Pepino", "Banana"];

function readArray(array){
   console.log(array[0]);
};

readArray(frutas);


3 // Crea una funcion que pueda recibir cualquier array como parametro e imprima todos sus elementos
//uno por uno (no se vale imprimir el array completo).

let frutas = ["Manzana", "Pera", "Pepino", "Banana"];

function readArray(array){
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} ${array[i]}`);
    };
};

readArray(frutas);


4 //Crea una funcion que pueda recibir cualquier objeto como parametro e imprima todos sus elementos
//uno por uno (no se vale imprimir el objeto completo).

let miAuto = {
    marca: 'Toyota',
    modelo: 'mustang',
    nitro: 'tiene nitro',
    tipo: 'camioneta',
    annio: '1968'
};

function readObject(object){
    for(let key in object){
        console.log(object[key]);
    };
};

readObject(miAuto);


//Otra solucion

function imprimirElementoPorElementoObjeto(object){
    const arr = Object.values(object);
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    };
};

imprimirElementoPorElementoObjeto(miAuto);