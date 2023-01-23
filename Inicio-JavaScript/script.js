/*
let admin, 
    name;

name = "John";

admin = name

//alert(admin)


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

let myVariable = 9999;

mensage = `Concatenação: ${myVariable}`;

console.log(mensage)*/


// ============== FUNÇÕES =============== 

/*
let ask = (question, yes_function, no_function) => confirm(question) ? yes_function():no_function();    
  
ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);*/

let add7 = (number) => number+7;

let valor = add7(4);
console.log(valor);

let multiply = (value1, value2) => value1*value2;

valor = multiply(7,7);
console.log(valor)

let capitalize = (string_value) => {
    let primeira_maiuscula = string_value[0].toUpperCase();
    string_value = string_value.toLowerCase();
    retorno_String = string_value.replace(string_value[0], primeira_maiuscula);
    return retorno_String;
}

let frase = "pedro";

console.log(capitalize(frase));

let lastLetter = (frase_value) => frase_value[frase_value.length-1];

palavra = "alcançar";

console.log(lastLetter(palavra));