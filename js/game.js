const gravity = 9.8;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const game = document.getElementsByClassName("game")[0];
game.style.border = "10px solid red";
game.style.backgroundColor = "white";

// const randomY = Math.random() * windowHeight;
// const ball = new Ball({
//   position: { x: randomX, y: 0 },
//   dimension: { x: 50, y: 50 },
//   color: "blue",
// });
const ballList = [];

for (let i = 0; i < 2; i++) {
  const randomX = Math.random() * windowWidth;
  const ball = new Ball({
    position: { x: randomX, y: 12 },
    dimension: { x: 50, y: 50 },
    color: "blue",
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

  window.requestAnimationFrame(Animate);
}
Animate();
