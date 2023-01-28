const container = document.querySelector("#container");
const newDiv = document.createElement("div");
newDiv.classList.add('paragraph-div');
const paragraph = document.createElement("p");
paragraph.textContent = "Hey, I'm red";
paragraph.style.color = 'red';
container.appendChild(newDiv);
newDiv.appendChild(paragraph);

//Blue h3 saying 'I'm blue h3'
const blueHeader = document.createElement("h3");
blueHeader.textContent = "I'm blue h3";
blueHeader.style.color = 'blue';
container.appendChild(blueHeader);

const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("id", "pink-div");
pinkDiv.style.backgroundColor = "pink";
pinkDiv.style.border = "2px solid black";

const headerPink = document.createElement("h1");
headerPink.classList.add("header-pink");
headerPink.textContent = "I'm in a div";
pinkDiv.appendChild(headerPink);

const pinkParagraph = document.createElement("p");
pinkParagraph.classList.add("pink-para");
pinkParagraph.textContent = "Me too";
pinkDiv.appendChild(pinkParagraph)

container.appendChild(pinkDiv);