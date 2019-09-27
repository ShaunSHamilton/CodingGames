class SnakeBody {
  constructor(frontx, fronty, stepsBehind) {
    if (keyCodes[counter - 1 - stepsBehind] === UP_ARROW) {
      this.x = frontx;
      this.y = fronty + res;
    } else if (keyCodes[counter - 1 - stepsBehind] === DOWN_ARROW) {
      this.x = frontx;
      this.y = fronty - res;
    } else if (keyCodes[counter - 1 - stepsBehind] === LEFT_ARROW) {
      this.x = frontx + res;
      this.y = fronty;
    } else if (keyCodes[counter - 1 - stepsBehind] === RIGHT_ARROW) {
      this.x = frontx - res;
      this.y = fronty;
    } else {
      this.x = frontx;
      this.y = fronty + res;
    }
    this.stepsBehind = stepsBehind;
  }

  move(keyCodes) {
    if (keyCodes[counter - 1 - this.stepsBehind] === UP_ARROW) {
      this.y -= snake.vel;
    } else if (keyCodes[counter - 1 - this.stepsBehind] === DOWN_ARROW) {
      this.y += snake.vel;
    } else if (keyCodes[counter - 1 - this.stepsBehind] === LEFT_ARROW) {
      this.x -= snake.vel;
    } else if (keyCodes[counter - 1 - this.stepsBehind] === RIGHT_ARROW) {
      this.x += snake.vel;
    }
    // this.col = floor(this.x/res % (cols));
    // this.row = floor(this.y/res % (rows));
  }

  show() {
    push();
    noStroke();
    fill(0, 255, 0);
    rect(this.x, this.y, res, res);
    pop();

  }
}
