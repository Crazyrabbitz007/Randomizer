// my pets
let pets = [{
  name: "Scruffy",
  color: "Brown"
}, {
  name: "Boxy",
  color: "Light Brown"
}, {
  name: "Mandy",
  color: "Black and White"
}, {
  name: "Blue",
  color: "Deep Blue"
}];

let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(70);

  randomIndex = int(random(pets.length));

console.log(pets[randomIndex].name);
text(pets[randomIndex].name,50,50);

pets.splice(randomIndex,1);
console.log(pets);

  // console.log("initial array is ");
  // console.log(pets);
  //
  // pets.splice(4,1);
  // console.log("array after splice")
  // console.log(pets);

}

function draw() {

}
