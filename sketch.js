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
let pet = [];
let imageCounter = 0;
let button;

function preload() {
  for (let i = 0; i <= 3; i++) {
    pet[i] = loadImage("assets/pet_" + i + ".jpg")
  }
}

function setup() {
  createCanvas(400, 400);
  background(200);
  textSize(16);
  imageMode(CENTER);
  frameRate(3);

  text("click to randomize", width/2, height/2);
  button = createButton("Click to Randomize");
  button.mousePressed(buttonPressed);


  // setTimeout(changeBackground, 1000);
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
    clear();
    image(pet[imageCounter], width / 2, height / 2);

    if (imageCounter < pet.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
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
    // background(random(200, 255));
    clear();
    randomIndex = int(random(pets.length));
    image(random(pet), width / 2, height / 2);
    text(`${pets[randomIndex].name}'s favorite color is
      ${pets [randomIndex].color}`, width / 2, height - 25);

    // text(pets[randomIndex].name + "'s favorite color is " +
    // pets [randomIndex].color, 50, 50);

    pets.splice(randomIndex, 1);

  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
