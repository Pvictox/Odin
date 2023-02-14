displayDiv = document.querySelector("#display");

function createObject(){
    object = {};
    args = Array.from(arguments);
    if (args.length > 0){
      args.forEach(argumento => {
        object[argumento] = argumento;
      });
    }
    return object;
}

let isEmpty = (object) =>{
    let numKeys = 0;
    for (key in object){
        numKeys+=1;
    }
    
    if (numKeys ===0){
        return true;
    }else{
        return false;
    }
}

let multiplyFunction = (object = undefined, factor) =>{
    if (object !== undefined){
        for (key in object){
            if (typeof(object[key]) == 'number'){
                console.log("entrou");
                object[key] = object[key]*factor;
            }
        }
        return object;
    }
    return object;
}

let sumSalary = (salaryObject) =>{
    let sum = 0;
    for (key in salaryObject){
        sum+=salaryObject[key];
    }
    return sum;
}

let showObject = (object) =>{
    console.log(object);
    for (key in object){
        paragraph = document.createElement("p");
        paragraph.textContent = key +":"+ object[key];
        displayDiv.appendChild(paragraph);
    }
}

/*
        Criação Básica
userObject = createObject("name", "surname");
userObject["name"] = "John";
userObject["surname"] = "Smith";
userObject["name"] = "Pete";
delete userObject.name;

showObject(userObject); 
*/

salaryObject = {
    "Maria": 100,
    "Carlos": 150,
    "João": 200,
    "Laissa": 300,
    "Payment": "Credit"
}

emptySalaryObject = {}
//console.log(sumSalary(emptySalaryObject));

multiplyFunction(salaryObject, 2);
showObject(salaryObject);

console.log()