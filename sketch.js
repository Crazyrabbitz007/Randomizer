// my words and colors
let words = [{
  name: "Pretentious",
  color: "Royal Purple"
}, {
  name: "Envious",
  color: "Dark Green"
}, {
  name: "Beautiful",
  color: "Warm Orange"
}, {
  name: "Ferocious",
  color: "Deep Blue"
}, {
  name: "Teeny",
  color: "Radiant Yellow"
}, {
  name: "Berserk",
  color: "Dark Red"
}, {
  name: "Groovy",
  color: "Bright Green"
}, {
  name: "Meaty",
  color: "Brown"
}, {
  name: "Hospitable",
  color: "Hot Pink"
}];

let randomIndex;
let animating = false;
let places = [];
let imageCounter = 0;
let button;

function preload() {
  for (let i = 1; i <= 10; i++) {
    places[i] = loadImage("assets/places_" + i + ".jpg")
  }
}

function setup() {
  createCanvas(400, 400);
  background(200);
  textSize(16);
  imageMode(CENTER);
  frameRate(120);
  r = random(255);
  g = random(255);
  b = random(255);

  text("Click to Find Meaning in Something", width / 5, height / 2);
  button = createButton("Click to Find Meaning in Something");
  button.mousePressed(buttonPressed);
}

function draw() {


  if (animating == true) {
    clear();
    image(places[imageCounter], width / 2, height / 2);

    if (imageCounter < places.length - 2) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 1;
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

  if (words[0]) {
    // background(random(200, 255));
    clear();
    randomIndex = int(random(words.length));
    image(random(places), width / 2, height / 2);
    fill(r,g,b);
    text(`${words[randomIndex].name}
    and your color is
    ${words [randomIndex].color}`, width / 2, height - 200);

    words.splice(randomIndex, 1);

  } else {
    background(random(200, 255));
    text("You have found meaning in these words and images.", 10, 50);
    text("Now find the meaning in yourself.", 25, 100)
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
