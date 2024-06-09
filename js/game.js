const gravity = 9.8;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const game = document.getElementsByClassName("game")[0];
game.style.border = "10px solid red";
game.style.backgroundColor = "white";

const ballList = [];

for (let i = 0; i < 10; i++) {
  const randomX = Math.random() * windowWidth;
  const randomY = Math.random() * windowHeight;
  const ball = new Ball({
    position: { x: randomX, y: randomY },
    dimension: { x: 50, y: 50 },
    color: "green",
  });

  ballList.push(ball);
}

for (let ball of ballList) {
  game.appendChild(ball.getElement());
}

function Animate() {
  for (let ball of ballList) {
    ball.update();
  }
  for (let i = 0; i < ballList.length; i++) {
    for (let j = i + 1; j < ballList.length; j++) {
      let ball_first = ballList[i];
      let ball_second = ballList[j];

      let first_center = ball_first.getCenter();
      let second_center = ball_second.getCenter();

      let radiusSum = ball_first.width / 2 + ball_second.width / 2;

      if (getDistance(...first_center, ...second_center) <= radiusSum) {
        console.log("collision detected");

        let [v1x_final, v1y_final, v2x_final, v2y_final] = handleCollision(
          ...first_center,
          ...second_center,
          ...ball_first.getVelocity(),
          ...ball_second.getVelocity()
        );
        ball_first.updateVelocity(v1x_final, v1y_final);
        ball_second.updateVelocity(v2x_final, v2y_final);
      }
    }
  }

  window.requestAnimationFrame(Animate);
}

Animate();
