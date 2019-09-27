let video;
const vScale = 16;
const ellipseSize = 10;
const numParticles = 100;

let particles = [];
let slider;
let alignSlider, cohesionSlider, separationSlider;

function setup() {
  createCanvas(640, 360);
  alignSlider = createSlider(0, 2, 1, 0.1);
  cohesionSlider = createSlider(0, 2, 1, 0.1);
  separationSlider = createSlider(0, 2, 1, 0.1);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);

  for (let i = 0; i < numParticles; i++) {
    particles[i] = new Particle(200, 200);
  }
  slider = createSlider(0, 255, 127);
  background(51);
}

function draw() {
  video.loadPixels();
  for (let particle of particles) {
    particle.edges();
    particle.flock(particles);
    particle.update();
    particle.show();
  }
}
