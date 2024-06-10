class Ball {
  constructor({ position, dimension, color }) {
    this.position = position;
    this.velocity = {
      vx: (Math.random() - 0.5) * 5,
      vy: (Math.random() - 0.5) * 5,
    };

    this.height = dimension.y;
    this.width = dimension.x;

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

    // const cellX = Math.floor(this.position.x / 100);
    // const cellY = Math.floor(this.position.y / 100);
    // console.log(cellX, cellY);
    // console.log(grid);
    // if (
    //   grid &&
    //   cellX >= 0 &&
    //   cellX < numCellsX &&
    //   cellY >= 0 &&
    //   cellY < numCellsY
    // ) {
    //   grid[cellY][cellX].push(this);
    // } else {
    //   console.log("Invalid grid coordinates");
    // }
    this.ball.style.left = this.position.x + "px";
    this.ball.style.top = this.position.y + "px";
    // this.gravity();
  }

  // this.draw();

  gravity() {
    //using  v= u +at
    this.velocity.vy += gravity * 0.000695;
  }
  updateVelocity(v1x_final, v1y_final) {
    this.velocity.vx = v1x_final;
    this.velocity.vy = v1y_final;
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
      // console.log("clicked", e);
      console.log(this.velocity.vx, this.velocity.vy);
    });
  }
}
