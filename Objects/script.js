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

newObject = createObject("name");

console.log(isEmpty(newObject));

