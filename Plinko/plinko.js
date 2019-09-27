function Plinko(x, y, r) {
  var options = {
    restitution: 1,
    friction: 0,
    isStatic: true
  }
  this.body = Bodies.circle(x, y, r, options);
  this.body.label = "plinko";
  this.r = r;
  World.add(world, this.body);
  this.red = 100;
  this.green = 100;
  this.blue = 100;
}

Plinko.prototype.show = function() {
  noStroke();
  fill(this.red, this.green, this.blue);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  ellipse(0, 0, this.r * 2);
  pop();
}

Plinko.prototype.hit = function() {
  this.red = random(100, 200);
  this.green = random(100, 255);
  this.blue = random(50, 200);
}
