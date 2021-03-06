// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  trackRover: [0,0]
}
// console.log(directions);
// ======================
function turnLeft(rover){
  
    console.log("Rover turned left");
}

function turnRight(rover){
  console.log("Rover turned right");
}

function moveBackwords(rover){
  console.log("Rover turned backwards");
}

//====Iteration 3 ====
function moveForward(rover){
  switch(rover.direction) {
    case "N":
     rover.y -= 1;
     console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
     rover.trackRover.push(rover.x, rover.y);
    break;
    case "E":
     rover.x += 1;
     console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
     rover.trackRover.push(rover.x, rover.y);
    break;
    case "S":
    rover.y += 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.trackRover.push(rover.x, rover.y);
    break;
    case "W":
    rover.x -= 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.trackRover.push(rover.x, rover.y);
    break;
    default: 
    console.log("Add a direction");
    break;
  }
  // console.log("The direction of the rover is: ");
  // return;
  // console.log("moveForward was called!");
}




 //=== Iteration 4 ===
function moveRover(directions) {
  for (var i = 0; i < directions.length; i++) {
   var addDirection = directions[i];
   switch(addDirection) {
    case "F":
     moveForward(rover);
    break;
    case "R":
    turnRight(rover);
    break;
    case "B":
     moveBackwords(rover);
    break;
    case "L":
    turnLeft(rover);
    break;
    default: 
    console.log("Add a direction");
    break;
  }
}
  // console.log("The direction of the rover is: ");
  // return;
}

//=== Iteration 5 ===





