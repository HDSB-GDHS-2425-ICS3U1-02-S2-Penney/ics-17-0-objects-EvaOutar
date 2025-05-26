/**** SETUP CODE ****/

// Call the init function when the HTML window loads
window.onload = init;

function init() {
  // Init function that sets up our canvas. 
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  // Start the first frame request to begin the game loop
  window.requestAnimationFrame(gameLoop);

}

/**** OBJECT CREATION FUNCTIONS ****/

// Write the circle object function here



function circle(x,y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
}

const objs = []
let currentcircle = 0;

function createcircle() {
  objs[currentcircle] = new circle(randomInteger(0,480) , randomInteger(0, 480), getRandomcolor());

  ctx.beginPath();
  ctx.arc(objs[currentcircle].x, objs[currentcircle].y,10, 0, Math.PI * 2);
  ctx.fillStyle = objs[currentcircle].color;
  ctx.fill();
}


function randomInteger(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function  getRandomcolor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/**** GAMELOOP ****/

function gameLoop(timestamp) {

  // Call the createCircle function here.
  createcircle()


  // This causes the game to loop every frame (Do not change this)
  window.requestAnimationFrame(gameLoop);
}



