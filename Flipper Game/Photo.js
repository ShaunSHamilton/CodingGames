function Photo(x, y, w, photo) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.photo = photo;

  // if (random(1) < 0.5) {
  //   this.photo = true;
  // } else {
  //   this.photo = false;
  // }
  this.revealed = false;
  this.correct = false;
}

Photo.prototype.show = function() {
  stroke(1);
  noFill();
  rect(this.x, this.y, this.w, this.w);
  if (this.revealed) {
    image(this.photo, this.x, this.y, this.w, this.w);
    // if (this.photo) {
    //   image(kitten, this.x, this.y, this.w, this.w);
    // } else {
    //   noFill();
    //   noStroke();
    //   image(penguin, this.x, this.y, this.w, this.w);
    // }
    if (this.correct) {
      image(square, this.x, this.y, this.w, this.w);
      this.revealed = true;
    }
  }
}

Photo.prototype.contains = function(x, y) {
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w)
}

Photo.prototype.reveal = function() {
  this.revealed = true;
}

Photo.prototype.answer = function() {
  this.correct = true;
}
