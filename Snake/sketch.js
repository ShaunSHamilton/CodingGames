let res = 20;
let grid;
let x;
let y;
let w;
let h;
let width = 600;
let height = 600;
let cols = width / res;
let rows = height / res;
let snake;
let food = [];
let obsticle = [];
let keyCodes = [];
let score = 0;
let obs = 0;



function range(num) {
  let arr = [];
  for (let a = 0; a < num; a++) {
    arr[a] = a;
  }
  return arr;
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(width, height);

  grid = make2DArray(cols, rows);

  snake = new Snake(width / 2, height / 2, cols, rows, res);
  food[0] = new Food(floor(random(cols)) * res, floor(random(rows)) * res);
  createP("Score: " + score);
}

function draw() {
  background(0);

  snake.show();
  snake.move(keyPressed());
  food[0].show();

  for (let ob of obsticle) {
    ob.show();
    if (ob.intersects()) {
      gameOver();
    }
  }

  if (food[0].intersects()) {
    newFood();
    obsticle[obs] = new Obsticle(floor(random(cols)) * res, floor(random(rows)) * res, res, res * 4);
    obs++
  }

  push();
  stroke(255);
  strokeWeight(2);
  noFill();
  for (let i in range(cols)) {
    for (let j in range(rows)) {
      grid[i][j] = rect(i * res, j * res, res, res);
    }
  }
  pop();


  if (counter > cols * rows) {
    keyCodes.splice(0, 1);
    counter--;
  }
}

let counter = 0;

function keyPressed() {
  if ((snake.x / res % 1 == 0) && (snake.y / res % 1 == 0)) {
    keyCodes[counter] = keyCode;
    counter++
  }
  return keyCodes;
}

function newFood() {
  food.splice();
  score++
  food[0] = new Food(floor(random(cols)) * res, floor(random(rows)) * res);
}

function gameOver() {
  keyCode = 18;
  push();
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(50);
  text('GAME OVER!', width / 2, height / 2);
  pop();

  setTimeout(refresh, 2000);
}

function refresh() {
  food = [];
  obsticle = [];
  obs = 0;
  counter = 0;
  keyCodes = [];
  score = 0;
  setup();
}
