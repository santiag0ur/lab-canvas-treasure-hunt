// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid(startGridx, startGridy) {
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  for (let i = 0; i < 11; i++) {
    context.beginPath();
    context.moveTo(startGridx + i * 50, startGridy);
    context.lineTo(startGridx + i * 50, startGridy + 500);
    context.stroke();
  }
  for (let i = 0; i < 11; i++) {
    context.beginPath();
    context.moveTo(startGridx, startGridy + i * 50);
    context.lineTo(startGridx + 500, startGridy + i * 50);
    context.stroke();
  }
}

//Iteration2
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    if (this.row == 0) {
    } else {
      this.row = this.row - 1;
    }
  }
  moveRight() {
    // Increase by 1 the value of player.col
    if (this.col == 9) {
    } else {
      this.col = this.col + 1;
    }
  }
  moveDown() {
    // Increase by 1 the value of player.row
    if (this.row == 9) {
    } else {
      this.row = this.row + 1;
    }
  }
  moveLeft() {
    if (this.col == 0) {
    } else {
      this.col = this.col - 1;
    }
  }
}

//Iteration3
function drawPlayer() {
  let playerImg = new Image();
  playerImg.src = './images/character-down.png';
  playerImg.addEventListener('load', () => {
    context.drawImage(playerImg, player.col * 50, player.row * 50);
  });
}

//Iteration4
class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  setRandomPosition() {
    this.col = (9 * Math.random()) << 0;
    this.row = (9 * Math.random()) << 0;
  }
}
function drawTreasure() {
  let treasureImg = new Image();
  treasureImg.src = './images/treasure.png';
  treasureImg.addEventListener('load', () => {
    context.drawImage(
      treasureImg,
      treasure1.col * 50,
      treasure1.row * 50,
      50,
      50
    );
  });
}

//Iteration5
window.addEventListener('keydown', (event) => {
  event.preventDefault();
  console.log('keydown');

  switch (event.keyCode) {
    case 37:
      console.log('left');
      player.moveLeft();
      drawEverything();
      break;
    case 38:
      console.log('up');
      player.moveUp();
      drawEverything();
      break;
    case 39:
      console.log('right');
      player.moveRight();
      drawEverything();
      break;
    case 40:
      console.log('down');
      player.moveDown();
      drawEverything();
      break;
  }
});
/*window.addEventListener('keyup', (event) => {
  console.log('up');
});*/

/*window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();
};
*/
//React based on the key pressed

function drawEverything() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid(0, 0);
  drawPlayer();
  drawTreasure();
}

drawEverything();
const treasure1 = new Treasure(9, 9);
treasure1.setRandomPosition();

const player = new Character(0, 0); // (0,0) = Initial position

console.log(player.col, player.row);
player.moveDown(); // Increase by 1 the value of player.row
console.log(player.col, player.row);
player.moveDown(); // Increase by 1 the value of player.row
console.log(player.col, player.row);
player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row); // => 1,2

player.moveDown(); // Increase by 1 the value of player.row
console.log(player.col, player.row);
player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row);

drawPlayer();
drawTreasure();
console.log(treasure1.col);
console.log(treasure1.row);
