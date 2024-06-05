const header = document.querySelector("h2");


let myOBject = {
    vendas: [2,4,6,8,10]
}

var newDiv = document.createElement("div");
newDiv.setAttribute("id", "main");


var ulList = document.createElement("ul");



myOBject.vendas.map(function(value){
    return value*2;
}).forEach(newValue => {
    var listItem = document.createElement("li");
    listItem.textContent = newValue;
    ulList.appendChild(listItem);
})

newDiv.appendChild(ulList);

document.querySelector("body").appendChild(newDiv);

