// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  movingLog: [0,0]
}
// console.log(directions);
// ======================
function turnLeft(rover){
  
    console.log("Rover turned left");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

//=====Iteration 2=====
function moveForward(rover){
  switch(rover.direction) {
    case "N":
     rover.y -= 1;
     console.log("Current position of the rover is " + "X: " + rover.x + " Y: " + rover.y);
     rover.MovingLog.push(rover.x, rover.y);
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


//Iteration 3 - Moving the rover



