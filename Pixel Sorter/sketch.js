let img;
let sorted;
let index = 0;
let sound = new Audio('Windows Hardware Insert.wav');

function preload() {
  img = loadImage("image_1300.jpg");
}

function setup() {
  createCanvas(455, 227);

  sorted = createImage(img.width, img.height);
  sorted = img.get();
  console.log(img.width, img.height);
}

function draw() {
  //console.log(frameRate());


  sorted.loadPixels();

  // Selection sort!
  for (let n = 0; n < 1; n++) {
    let record = -1;
    let selectedPixel = index;
    for (let j = index; j < sorted.pixels.length; j += 7) {
      let pix = color(sorted.pixels[j], sorted.pixels[j + 2], sorted.pixels[j + 4], sorted.pixels[j + 6]);
      let b = hue(pix);
      if (b > record) {
        selectedPixel = j;
        record = b;
      }
    }

    // Swap selectedPixel with i
    let temp = [];
    temp[0] = sorted.pixels[index];
    temp[1] = sorted.pixels[index + 1];
    temp[2] = sorted.pixels[index + 2];
    temp[3] = sorted.pixels[index + 3];
    sorted.pixels[index] = sorted.pixels[selectedPixel];
    sorted.pixels[index + 1] = sorted.pixels[selectedPixel + 1];
    sorted.pixels[index + 2] = sorted.pixels[selectedPixel + 2];
    sorted.pixels[index + 3] = sorted.pixels[selectedPixel + 3];
    sorted.pixels[selectedPixel] = temp[0];
    sorted.pixels[selectedPixel + 1] = temp[1];
    sorted.pixels[selectedPixel + 2] = temp[2];
    sorted.pixels[selectedPixel + 3] = temp[3];

    if (index < sorted.pixels.length - 1) {
      index += 4;
    }
  }

  sorted.updatePixels();

  if (frameCount > 59300 && frameCount < 60000) {
    sound.play();
  }

  background(0);
  image(img, 0, 0);
  image(sorted, 228, 0);

  noStroke();
  fill(255);
}
