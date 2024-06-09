class Ball {
  constructor({ position, dimension, color }) {
    console.log("dimension", dimension);
    this.position = position;
    this.velocity = { vx: Math.random() * 10, vy: Math.random() * 10 };

    this.height = dimension.y;
    this.width = dimension.x;
    console.log(this.width);
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
    // Handle horizontal collisions
    // right side collision
    if (this.position.x + this.velocity.vx + this.width >= windowWidth) {
      this.velocity.vx *= -1;
      this.position.x = windowWidth - this.width;
    }
    // left side collision
    else if (this.position.x + this.velocity.vx <= 0) {
      this.velocity.vx *= -1;
      this.position.x = 0;
    } else {
      this.position.x += this.velocity.vx;
    }

    // Handle vertical collisions
    // bottom side collision
    if (
      this.position.y +
        this.velocity.vy +
        gravity * 0.00695 +
        this.height +
        10 >=
      windowHeight
    ) {
      this.velocity.vy *= -1;
      this.position.y = windowHeight - this.height - 10;
    }
    // top side collision
    else if (this.position.y + this.velocity.vy <= 0) {
      this.velocity.vy *= -1;
      this.position.y = 0;
    } else {
      this.position.y += this.velocity.vy;
    }

    this.gravity();

    this.ball.style.left = this.position.x + "px";
    this.ball.style.top = this.position.y + "px";
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
