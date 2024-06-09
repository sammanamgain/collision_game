class Ball {
  constructor({ position, dimension, color }) {
    this.position = position;
    this.velocity = { vx: Math.random() * 10, vy: Math.random() * 10 };

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
    // collision at right side of screen
    if (this.position.x + this.velocity.vx + this.width >= windowWidth) {
      this.velocity.vx *= -1;
    } else {
      this.position.x += this.velocity.vx;
    }
    // collision at left side of screen
    // adding velocity as it will be negative after colliding with right side of wall
    if (this.position.x + this.velocity.vx <= 0) {
      this.velocity.vx *= -1;
    } else {
      this.position.x += this.velocity.vx;
    }
    // collsion at button of screen
    if (
      this.position.y +
        this.velocity.vy +
        gravity * 0.00695 +
        this.height +
        10 >=
      windowHeight
    ) {
      // here 0.7 is dumping facotr // i have removed 0.7 as it is elastic collision
      this.velocity.vy *= -1;
    } else {
      this.position.y += this.velocity.vy;
    }
    // collision at top of screen // velocity of y is negative after colliding with button of screen
    if (this.position.y + this.velocity.vy <= 0) {
      this.position.y = 0;
      this.velocity.vy *= -1;
    }

    this.ball.style.left = this.position.x + "px";
    this.ball.style.top = this.position.y + "px";

    this.gravity();
  }
  // this.draw();

  gravity() {
    //using  v= u +at
    this.velocity.vy += gravity * 0.00695;
  }
  updateVelocity(v1x_final, v2x_final) {
    this.velocity.vy = v1x_final;
    this.velocity.vy = v2x_final;
    this.update();
  }

  getElement() {
    return this.ball;
  }
  getCenter() {
    return [
      this.position.x + this.width / 2,
      this.position.y + this.height / 2,
    ];
  }

  getVelocity() {
    return [this.velocity.vy, this.velocity.vx];
  }

  event() {
    this.ball.addEventListener("click", (e) => {
      console.log("clicked", e);
    });
  }
}
