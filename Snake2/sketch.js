let res = 20;
let grid;
let x;
let y;
let width = 600;
let height = 600;
let cols = width / res;
let rows = height / res;
let snake;
let food = [];
let snakeBody = [];
let stepsBehind = 1;
let keyCodes = [];
let keyCodes2 = [];


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
  snakeBody[0] = new SnakeBody(snake.x, snake.y, stepsBehind);
  food[0] = new Food(floor(random(cols)) * res, floor(random(rows)) * res);

}

function draw() {
  background(0);

  snake.show();
  snake.move(keyPressed());
  food[0].show();

  if (food[0].intersects()) {
    newFood();
    stepsBehind += 1;
    snakeBody[snakeBody.length] = new SnakeBody(snakeBody[snakeBody.length - 1].x, snakeBody[snakeBody.length - 1].y, stepsBehind);
  }
  for (let body of snakeBody) {
    body.show();

    body.move(keyPressed2());
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
  // If snake.col or snake.row changes...
  //if ((snake.col != snake.prevCol) || (snake.row != snake.prevRow)) {
  if ((snake.x / res % 1 == 0) && (snake.y / res % 1 == 0)) {
    keyCodes[counter] = keyCode;
    counter++
  }
  return keyCodes;
}
let counter2 = 0;

function keyPressed2() {
  for (let bodies of snakeBody) {
    if ((bodies.x / res % 1 == 0) && (bodies.y / res % 1 == 0)) {
      keyCodes2[counter] = keyCode;
      counter2++
    }
  }
  return keyCodes2;
}

function newFood() {
  food.splice();
  food[0] = new Food(floor(random(cols)) * res, floor(random(rows)) * res);
}
