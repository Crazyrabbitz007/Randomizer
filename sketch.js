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
let animating = false;

function setup() {
  createCanvas(400, 400);
  background(200);
  textSize(16);

  text("click to randomize", 50, 50);

  setTimeout(changeBackground, 1000);
  // randomIndex = int(random(pets.length));
  //
  // console.log(pets[randomIndex].name);
  // text(pets[randomIndex].name, 50, 50);
  //
  // pets.splice(randomIndex, 1);
  // console.log(pets);

  // console.log("initial array is ");
  // console.log(pets);
  //
  // pets.splice(4,1);
  // console.log("array after splice")
  // console.log(pets);

}

function draw() {


  if (animating == true) {
    ellipse(random(width), random(height), random(50, 200));
  }
}

function changeBackground() {
  if (counter <= 5) {
    counter++;
    console;
    log(counter)
    background(random(255), random(255), random(255));
    setTimeout(changeBackground, 1000);
  } else {

  }
}

function randomizer() {
  animating = false;

  if (pets[0]) {
    background(random(200, 255));
    randomIndex = int(random(pets.length));
    text(`${pets[randomIndex].name} 's favorite color inspect
      ${pets [randomIndex].color}`, 50, 50);
    // text(pets[randomIndex].name + "'s favorite color is " +
    // pets [randomIndex].color, 50, 50);

    pets.splice(randomIndex, 1);

  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
