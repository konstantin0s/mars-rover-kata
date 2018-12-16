// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [0,0]
}
// console.log(directions);
// ======================
function turnLeft(rover){
  
    console.log("Rover turned left");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch(rover.direction) {
    case "N":
     rover.y -= 1;
     console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
     rover.travelLog.push(rover.x, rover.y);
    break;
    case "E":
       
    break;
    case "S":

    break;
    case "W":
  
    break;
    default: 
    // console.log("Add a direction");
    break;
  }
  // console.log("The direction of the rover is: ");
  // return;
  console.log("moveForward was called!");
}




 //Iteration 2 - turning the rover with a switch statement
function moveRover(directions) {
   switch(directions) {
    case "N":
     moveForward();
    break;
    case "E":
    turnRight();
    break;
    case "S":
     moveForward();
    break;
    case "W":
    turnLeft();
    break;
    default: 
    // console.log("Add a direction");
    break;
  }
  // console.log("The direction of the rover is: ");
  // return;
}


//Iteration 3 - Moving the rover



