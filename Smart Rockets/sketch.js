var population;
// Each rocket is alive till *lifespan* frames
var lifespan = 400;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.2;

// Dimensions of barrier
var rx = 100;
var ry = 150;
var rw = 450;
var rh = 10;

function setup() {
  createCanvas(800, 600);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);

}

function draw() {
  background(0);
  population.run();
  // Displays count to window
  lifeP.html(count);

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
  }
  // Renders barrier for rockets
  fill(255);
  rect(rx, ry, rw, rh);
  // Renders target
  ellipse(target.x, target.y, 16, 16);
}
