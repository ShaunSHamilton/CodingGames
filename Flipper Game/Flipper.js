let square;
// let kitten;
// let penguin;
let photos = [];
let w = 150;


function preload() {
  square = loadImage('Black Square.jpg');
  // kitten = loadImage('file02.jpg');
  // penguin = loadImage('file09.jpg');
  for (let i = 0; i < 6; i++) {
    photos[i] = loadImage('/Images\\image_0' + i + '.jpg');
  }
}

function make2DArray(col, row) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols = 6;
let rows = 5;

function setup() {
  createCanvas(w*cols+1, w*rows+1);
  let col = floor(width / w);
  let row = floor(height / w);


  grid = make2DArray(col, row);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let photo = random(photos);
      grid[i][j] = new Photo(i * w, j * w, w, photo);
    }
  }
}

let a = 0;
let c = 0;
let previ;
let prevj;

function mousePressed() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].reveal();

        if (grid[i][j].revealed) {
          a++
          setTimeout(hide, 1500);
        }
        if (a >= 2) {
          if (grid[i][j].photo === grid[previ][prevj].photo) {
            grid[i][j].answer();
            grid[previ][prevj].answer();
            c += 2;
          }
        }
        previ = i;
        prevj = j;
      }
    }
  }
}

function hide() {
  if (a >= 2) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (grid[i][j].correct === false) {
          grid[i][j].revealed = false;
        }
      }
    }
    a = 0;
  }
}

function draw() {
  background(255);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
      if ((cols) * (rows) <= c) {
        stroke(200, 20, 100);
        textAlign(CENTER);
        textSize(50);
        text('Well Done!', width / 2, height / 2);
        text('Hit "ctrl + r" to replay', width / 2, height / 2 + 50);
      }
    }
  }
}
