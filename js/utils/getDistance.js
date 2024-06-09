function getDistance(x1, y1, x2, y2) {
  let dx = Math.abs(x2 - x1);
  let dy = Math.abs(y2 - y1);
  //   console.log(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));

  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}
