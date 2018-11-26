// Rover Object Goes Here
// ======================
var directions = ['N', 'E', 'S', 'W'];
// console.log(directions);
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}

//switch statement
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