elementDiv = document.querySelector("#content");

/*const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
}

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let para3 = document.createElement('p');

para1.textContent = `The cat's name is ${ cat["name"] }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;

cat.greeting();

cat["color"] = 'black';
para3.textContent = `The cat's color is ${cat["color"]}.`;

elementDiv.appendChild(para1);
elementDiv.appendChild(para2);
elementDiv.appendChild(para3);*/

//yearSplit é um número se tiver separado, senão é setado para FALSE.
function Band(name, nationality, genre, NumMembers, yearFormed,
    yearSplit=false, albums = []){
    this.name = name;
    this.nationality = nationality;
    this.genre = genre;
    this.NumMembers = NumMembers;
    this.yearFormed = yearFormed;
    this.yearSplit = yearSplit;
    this.albums = albums;
}

function Album(name, releaseDate){
    this.name = name;
    this.releaseDate = releaseDate;
}

let albumOne = new Album("Pão", 001);
let albumTwo = new Album("Comida", 002);

let newBand = new Band("Os comilões", "Suecos", "Death-Metal", 3, 1990, false, [albumOne, albumTwo]);

let bandInfo1 = document.createElement('p');
let bandInfo2 = document.createElement('p');
bandInfo1.textContent = `Nome da banda: ${newBand.name} | Nacionalidade: ${newBand.nationality} | 
                        Genero: ${newBand.genre}`;

elementDiv.appendChild(bandInfo1);

for (key in newBand["albums"]){
    bandInfo2.textContent += `Album Nome: ${newBand["albums"][key]["name"]} | Ano: ${newBand["albums"][key].releaseDate+" "}`;
}

elementDiv.appendChild(bandInfo2);

