const animals = ['Cat', 'Dog', 'Cow', 'Bunny'];

let toUpper = (string) => string.toUpperCase();

let animals_Upper = animals.map(toUpper);

console.log(animals_Upper);