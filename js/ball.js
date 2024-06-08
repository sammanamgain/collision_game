class Ball {
  constructor({ position, dimension, color }) {
    console.log(position.x, dimension, color);
    this.position = position;
    this.velocity = { vx: 0, vy: 0 };

    this.height = dimension.height || 50;
    this.width = dimension.width || 50;
    this.color = color || "white";
    this.draw();
  }

  draw() {
    this.ball = document.createElement("div");
    this.ball.style.width = this.width + "px";
    this.ball.style.height = this.height + "px";
    this.ball.style.position = "absolute";
    this.ball.style.top = this.position.y + "px";
    this.ball.style.left = this.position.x + "px";
    this.ball.style.backgroundColor = `${this.color}`;
    this.ball.style.borderRadius = "50%";
    this.event();
  }

  update() {
    if (this.position.x >= windowWidth) {
      this.velocity.vx = 0;
    } else {
      this.position.x += this.velocity.vx;
    }
    if (
      this.position.y +
        this.velocity.vy +
        gravity * 0.00695 +
        this.height +
        10 >=
      windowHeight
    ) {
      // here 0.7 is dumping facotr
      this.velocity.vy *= -0.7;
    } else {
      this.position.y += this.velocity.vy;
    }
    this.ball.style.left = this.position.x + "px";
    this.ball.style.top = this.position.y + "px";

    this.gravity();
  }
  // this.draw();

  gravity() {
    //using  v= u +at
    this.velocity.vy += gravity * 0.000695;
  }

  getElement() {
    return this.ball;
  }

  event() {
    this.ball.addEventListener("click", (e) => {
      console.log("clicked", e);
    });
  }
}
