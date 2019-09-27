class Obsticle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

  }

  show() {
    push();
    fill(frameCount % 255);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    pop();

  }

  intersects() {
    if ((this.x <= snake.x) && (snake.x <= (this.x + this.w)) && (this.y <= snake.y) && (snake.y <= (this.y + snake.h))) {
      return true;
    } else {
      return false;
    }
  }
}
