const gravity = 9.8;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const game = document.getElementsByClassName("game")[0];
game.style.border = "10px solid red";
game.style.backgroundColor = "white";

const ballList = [];

function generateBall(radius) {
  const randomX = Math.random() * (windowWidth - radius);
  const randomY = Math.random() * (windowHeight - radius);
  return {
    position: { x: randomX, y: randomY },
    dimension: { x: radius, y: radius },
    color: getRandomColor(),
  };
}

for (let i = 0; i < 20; i++) {
  let radius = Math.floor(Math.random() * 51) + 50;
  let ball;
  let attempts = 0;

  do {
    ball = generateBall(radius);
    attempts++;
  } while (
    // .some method return true if one ball also collides
    ballList.some((existingBall) => isColliding(existingBall, ball)) &&
    attempts < 100
  );

  if (attempts < 100) {
    ballList.push(new Ball(ball));
  } else {
    console.warn("Failed to place ball without collision after 100 attempts");
  }
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
        let mass1 = ball_first.width ** 3 * 0.001;
        let mass2 = ball_second.width ** 3 * 0.001;

        let [v1x_final, v1y_final, v2x_final, v2y_final] = handleCollision(
          ...first_center,
          ...second_center,
          ...ball_first.getVelocity(),
          ...ball_second.getVelocity(),
          mass1,
          mass2
        );
        ball_first.updateVelocity(v1x_final, v1y_final);
        ball_second.updateVelocity(v2x_final, v2y_final);
      }
    }
  }

  window.requestAnimationFrame(Animate);
}

Animate();
