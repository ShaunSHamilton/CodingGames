let walls = [];
let ray;
let particle;

let xoff = 0;
let yoff = 1000;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  particle = new Particle();
  walls[5] = new Boundary(0,0,0,height);
  walls[6] = new Boundary(width,0,width,height);
  walls[7] = new Boundary(0,0,width,0);
  walls[8] = new Boundary(0,height,width,height);
}

function draw() {
  background(0);
  for (let wall of walls) {
    wall.show();
  }
  particle.update(noise(xoff)*width, noise(yoff)*height)
  particle.show();
  particle.look(walls);

  xoff += 0.01;
  yoff += 0.01;
  // let pt = ray.cast(wall);

  // if (pt) {
  //   fill(255);
  //   ellipse(pt.x,pt.y,8)
  // }
}
