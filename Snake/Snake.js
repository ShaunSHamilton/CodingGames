class Snake {
  constructor(x, y, cols, rows, res) {
    this.x = x;
    this.y = y;
    this.col = this.x/res % (cols);
    this.row = this.y/res % (rows);
    this.snakeSize = res;
    this.prevCol = 0;
    this.prevRow = 0;

    this.vel = 5;
  }

  move(keyCodes) {
    this.prevCol = floor(this.x/res % (cols));
    this.prevRow = floor(this.y/res % (rows));
    if (keyCodes[counter-1] === UP_ARROW) {
      this.y -= this.vel;
    } else if (keyCodes[counter-1] === DOWN_ARROW) {
      this.y += this.vel;
    } else if (keyCodes[counter-1] === LEFT_ARROW) {
      this.x -= this.vel;
    } else if (keyCodes[counter-1] === RIGHT_ARROW) {
      this.x += this.vel;
    }
    this.col = floor(this.x/res % (cols));
    this.row = floor(this.y/res % (rows));
    if (this.x > width) {
      this.x = -res;
    } else if (this.x < -res) {
      this.x = width;
    } else if (this.y > height) {
      this.y = -res;
    } else if (this.y < -res) {
      this.y = width;
    }
  }

  // intersects() {
  //   return (dist(this.x,this.y,food[0].x,food[0].y) < res/2);
  // }

  show() {
    push();
    stroke(0);
    fill(0,255,0);
    rect(this.x, this.y, this.snakeSize, this.snakeSize);
    pop();
  }
}
