/*
    Task 1: Variáveis.
*/ 
let admin, 
    name;

name = "John";

admin = name

//alert(admin)

/*
    Task 2: Números
*/

const myInt = 5,
    myFloat = 3.1415;

console.log(typeof myInt);
console.log(typeof myFloat) ; //O tipo a ser retornado é 'Number'

const decimais = 1.4444444444;

const arrendodado = decimais.toFixed(2); //Arredonda para ficar com 2 casas decimais.

console.log(arrendodado);

let stringValue = "123";

console.log(typeof stringValue);

console.log(stringValue+4); //Não vai dar 127 e sim 1234 por ser String.

let intValue = Number(stringValue) + 4; //Acontece a conversão e a soma é realizada

console.log("Conversão:" + intValue) ;

/*
    Assignement Odin
*/ 

let myVariable = 9999;

mensage = `Concatenação: ${myVariable}`;

console.log(mensage)