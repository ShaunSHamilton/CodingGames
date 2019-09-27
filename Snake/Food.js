class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;

  }

  show() {
    push();
    fill(255, 255, 0);
    noStroke();
    ellipse(this.x + res / 2, this.y + res / 2, res, res);
    pop();
  }

  intersects() {
    return (dist(this.x, this.y, snake.x, snake.y) < 5);
  }

}
