function handleCollision(x1, y1, x2, y2, u1x, u1y, u2x, u2y) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  let angle = Math.atan2(dy, dx);
  console.log(u1x, u1y, u2x, u2y);

  console.log("angle in degree", (angle * 180) / Math.PI);
  // rotating along the axis of collision
  let u1x_collision = u1x * Math.cos(angle) + u1y * Math.sin(angle);
  let u1y_collision = u1y * Math.cos(angle) - u1x * Math.sin(angle);
  let u2x_collision = u2x * Math.cos(angle) + u2y * Math.sin(angle);
  let u2y_collision = u2y * Math.cos(angle) - u2x * Math.sin(angle);
  // calculating the velocity after collision

  let m1 = (m2 = 10);
  let vx1_collision_final =
    (u1x_collision * (m1 - m2) + 2 * m2 * u2x_collision) / (m1 + m2);
  let vx2_collision_final =
    (u2x_collision * (m1 - m2) + 2 * m1 * u1x_collision) / (m1 + m2);
  let vy1_collision_final = u1y_collision;
  let vy2_collision_final = u2y_collision;

  // rotating back
  let v1x_final =
    vx1_collision_final * Math.cos(-angle) +
    vy1_collision_final * Math.sin(-angle);
  let v1y_final =
    vy1_collision_final * Math.cos(-angle) -
    vx1_collision_final * Math.sin(-angle);
  let v2x_final =
    vx2_collision_final * Math.cos(-angle) +
    vy2_collision_final * Math.sin(-angle);
  let v2y_final =
    vy2_collision_final * Math.cos(-angle) -
    vx2_collision_final * Math.sin(-angle);

  console.log(v1x_final, v1y_final, v2x_final, v2y_final);

  return [v1x_final, v1y_final, v2x_final, v2y_final];
}
