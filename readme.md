# Ball Simulation Project

## Author
- Name: Samman Babu Amgain
- Roll No: 27
- Group: N

## Project Overview
This project simulates a number of balls within a rectangular boundary box, utilizing Object-Oriented Programming (OOP) principles with ES5 or ES6. The simulation includes ball collision detection and responses, ensuring realistic movement and interactions.

## Features
- **Rectangular Boundary Box**: Defines the limits within which the balls move.
- **Instance Generation**: Balls are generated randomly within the box using OOP.
- **Collision Detection**:
 - **Boundary Walls**: Balls detect and bounce back when hitting the walls.
 - **Inter-ball Collisions**: Balls detect and bounce back upon colliding with each other, maintaining correct directions.
 - **Non-overlapping**: Balls do not overlap after collisions.
 - **Boundary Constraint**: Balls remain within the boundary limits.
 - **Variable Directions**: Each ball starts with a different initial direction upon initialization.
- **DOM Manipulation**: The entire simulation is implemented using DOM.

### Extra Features
- **Variable Ball Count, Speed, and Sizes**: Each ball has random speed and size.
- **Elastic Collision Implementation**: Collisions account for speed, mass, and angle of balls.
- **Stress Test**: The simulation supports up to 500 balls with minimal lag on tested devices.

### Elastic Collision Implementation
The following formula is used to calculate elastic collisions between two balls:

```javascript
let dx = x2 - x1;
let dy = y2 - y1;

let distance = Math.sqrt(dx * dx + dy * dy);

let angle = Math.atan2(dy, dx);

// Rotating along the axis of collision
let u1x_collision = u1x * Math.cos(angle) + u1y * Math.sin(angle);
let u1y_collision = u1y * Math.cos(angle) - u1x * Math.sin(angle);
let u2x_collision = u2x * Math.cos(angle) + u2y * Math.sin(angle);
let u2y_collision = u2y * Math.cos(angle) - u2x * Math.sin(angle);

// Calculating the velocity after collision
let vx1_collision_final = (u1x_collision * (m1 - m2) + 2 * m2 * u2x_collision) / (m1 + m2);
let vx2_collision_final = (u2x_collision * (m2 - m1) + 2 * m1 * u1x_collision) / (m1 + m2);
let vy1_collision_final = u1y_collision;
let vy2_collision_final = u2y_collision;

// Rotating back
let v1x_final = vx1_collision_final * Math.cos(-angle) + vy1_collision_final * Math.sin(-angle);
let v1y_final = vy1_collision_final * Math.cos(-angle) - vx1_collision_final * Math.sin(-angle);
let v2x_final = vx2_collision_final * Math.cos(-angle) + vy2_collision_final * Math.sin(-angle);
let v2y_final = vy2_collision_final * Math.cos(-angle) - vx2_collision_final * Math.sin(-angle);
```


### Demonstration

A demonstration of the simulation with 500 balls can be found [here](https://sammanamgain.github.io/collision_game_500ball/). This link showcases the simulation running with minimal lag.

The source code for the demo can be found in the [ball-simulation-demo](https://github.com/sammanamgain/collision_game_500ball) repository.
