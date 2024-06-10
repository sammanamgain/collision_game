function getDistance(x1, y1, x2, y2) {
  let dx = Math.abs(x2 - x1);
  let dy = Math.abs(y2 - y1);
  //   console.log(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));

  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}
function isColliding(ball1, ball2) {
  const dx = ball1.position.x - ball2.position.x;
  const dy = ball1.position.y - ball2.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < 20 + ball1.width / 2 + ball2.width / 2;
}
