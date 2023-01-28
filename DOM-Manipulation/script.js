const container = document.querySelector("#container");
const newDiv = document.createElement("div");
newDiv.classList.add('paragraph-div');
const paragraph = document.createElement("p");
paragraph.textContent = "Hey, I'm red";

container.appendChild(newDiv);
newDiv.appendChild(paragraph);
