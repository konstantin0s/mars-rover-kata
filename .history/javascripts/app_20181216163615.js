// Rover Object Goes Here
// ======================
var rover = {
  direction: "E",
  x: 0,
  y: 0,
  travelLog: [0,0]
}

var grid = [
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null, null],
  [null, null, null, null, null,null, null, null, null, null],
];

// console.log(directions);
// ======================

function turnRight(rover){
  switch(rover.direction) {
    // case "N":
    //     rover.direction = "E";
    // break;
    case "N":
    rover.x += 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
   break;

    // case "E":
    // rover.direction = "S";
    // break;
    case "E":
    rover.y += 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
   break;
    // case "S":
    // rover.direction = "W";
    // break;
    case "S":
    rover.x -= 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
   break;
    // case "W":
    // rover.direction = "N";
    // break;
    case "W":
    rover.y -= 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
   break;
    default: 
    console.log("Add a direction");
    break;
  }
  console.log("The current position of the rover is: " + rover.direction);
}


function turnLeft(rover) {
  switch(rover.direction) {
    // case "N":
    //     rover.direction = "W";
    // break;
    case "N":
    rover.x -= 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
   break;
    // case "E":
    // rover.direction = "N";
    // break;
    case "E":
    rover.y -= 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
   break;
    // case "S":
    // rover.direction = "E";
    // break;
    case "S":
    rover.x += 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
   break;
    // case "W":
    // rover.direction = "S";
    // break;
    case "W":
    rover.y += 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
   break;
    default: 
    console.log("Add a direction");
    break;
  }
  console.log("The current position of the rover is: " + rover.direction);
}


function moveBackwords(rover){
  switch(rover.direction) {
    case "N":
     rover.y += 1;
     console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
     rover.travelLog.push(rover.x, rover.y);
    break;
    case "E":
     rover.x -= 1;
     console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
     rover.travelLog.push(rover.x, rover.y);
    break;
    case "S":
    rover.y -= 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
    break;
    case "W":
    rover.x += 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
    break;
    default: 
    console.log("Add a direction");
    break;
  } 


}

//====Iteration 3 ====
function moveForward(rover){
  switch(rover.direction) {
    case "N":
     rover.y -= 1;
     console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
     rover.travelLog.push(rover.x, rover.y);
    break;
    case "E":
     rover.x += 1;
     console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
     rover.travelLog.push(rover.x, rover.y);
    break;
    case "S":
    rover.y += 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
    break;
    case "W":
    rover.x -= 1;
    console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
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






