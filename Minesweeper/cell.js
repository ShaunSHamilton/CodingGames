function Cell(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  this.neighbourCount = 0;

  this.bee = false;
  this.revealed = false;
}

Cell.prototype.show = function() {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
  if (this.revealed) {
    if (this.bee) {
      fill(127);
      ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
    } else {
      fill(200);
      rect(this.x, this.y, this.w, this.w);
      if (this.neighbourCount > 0) {
        textAlign(CENTER);
        fill(0);
        text(this.neighbourCount, this.x + this.w * 0.5, this.y + this.w - 6);
      }
    }
  }
}

Cell.prototype.countBees = function() {
  if (this.bee) {
    this.neighbourCount = -1;
    return;
  }
  let total = 0;
  for (let xoff = -1; xoff <= 1; xoff++) {
    let i = this.i + xoff;
    if (i < 0 || i >= cols) continue;

    for (let yoff = -1; yoff <= 1; yoff++) {
      let j = this.j + yoff;
      if (j < 0 || j >= rows) continue;

      let neighbour = grid[i][j];
      if (neighbour.bee) {
        total++;
      }
    }
  }
  this.neighbourCount = total;
}

Cell.prototype.contains = function(x, y) {
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.reveal = function() {
  this.revealed = true;
  if (this.neighbourCount == 0) {
    // flood fill time
    this.floodFill();
  }
}

Cell.prototype.floodFill = function() {
  for (let xoff = -1; xoff <= 1; xoff++) {
    let i = this.i + xoff;
    if (i < 0 || i >= cols) continue;

    for (let yoff = -1; yoff <= 1; yoff++) {
      let j = this.j + yoff;
      if (j < 0 || j >= rows) continue;

      let neighbour = grid[i][j];
      // Note the neighbour.bee check was not required.
      // See issue #184
      if (!neighbour.revealed) {
        neighbour.reveal();
      }
    }
  }
}
