var tree = [];
var walkers = [];
var maxWalkers = 100;
var iterations = 500;
var radius = 7;
var hu = 0;
var shrink = 0.9991;

function setup() {
  createCanvas(1000, 600);
  colorMode(HSB);

  // Tree is created...
  for (var i = 0; i < width; i++) {
    tree[i] = new Walker(i*radius, height);
  }
  radius *= shrink;
  for (var i = 0; i < maxWalkers; i++) {
    walkers[i] = new Walker();
    radius *= shrink;
  }
}

function draw() {
  background(0);

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
  }

  for (var i = 0; i < walkers.length; i++) {
    walkers[i].show();
  }

  for (var n = 0; n < iterations; n++) {
    for (var i = walkers.length - 1; i >= 0; i--) {
      walkers[i].walk();
      if (walkers[i].checkStuck(tree)) {
        walkers[i].setHue(hu % 360);
        hu += 1;
        tree.push(walkers[i]);
        walkers.splice(i, 1);
      }
    }
  }

  var r = walkers[walkers.length - 1].r;
  while (walkers.length < maxWalkers && radius > 1) {
    radius *= shrink;
    walkers.push(new Walker());
  }

}
