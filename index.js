// Code your solution in this file!
const head = 42;
function distanceFromHqInBlocks(location){
    return Math.abs(location - head);
}
distanceFromHqInBlocks(location);

function distanceFromHqInFeet(location){
    return Math.abs(location - head) * 264;
}
distanceFromHqInFeet(50);

function distanceTravelledInFeet(start,stop){
    return Math.abs(start - stop)*264

}
distanceTravelledInFeet(38,34);

function calculatesFarePrice(start, destination) {
  function dist(start, destination) {
    return Math.abs((destination - start) * 264);
  }

  const distance = dist(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}

console.log(calculatesFarePrice(43, 44)); // output: 0.528
