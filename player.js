class Player{
  constructor(){
    this.r = 50;
    this.x = 50;
    this.y = height - 50;
    this.vy = 0;
    this.gravity = 2;
  }

  jump(){
    this.vy = -5;
  }

  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show(){
    image(pImg, this.x, this.y, this.r, this.r);
  }
}
