
// for (var y = 0; y < boardHeight; ++y) {
//     for (var x= 0; x < boardWidth; ++x) {
//         var cell = board[y][x];
//         console.log('cell',cell)

//         if (cell.snake > 0) {
//              cell.element.className = "snake";
//                 cell.snake -= 1;
//             } else if (cell.food > 0) {
//             cell.element.className = "food";
//             } else if(cell.snake > 0 && cell.food > 0){
//                 cell.food -= 1;
//             } else {
//                 cell.element.className = "";
//             }
//     }
// }

// switch (){
//     case (cell.snake > 0):
//         cell.element.className = "snake";
//         cell.snake -= 1;
//         break;
            
//     case (cell.food > 0):
//         cell.element.className = "food";
//         break;

//     case (cell.snake > 0 && cell.food > 0):
//         cell.food -= 1;
//         break;
//     default:
//         cell.element.className = "";
// }

// /*

// // Matrix - Board für das Spiel 
// const board = [];
// const boardWidth = 26;
// const boardHeight = 16;

// var snakeX;
// var snakeY;
// var snakeLength;
// var snakeDirection;
// var snakeFoodX;
// var snakeFoodY;



// // x und y Achse -> links nach rechts (boardWidth) oben nach unten (boardHeight)
// function gameBoard() {
//     const boardElement = document.getElementById('board');

//     for (var y = 0; y < boardHeight; ++y){
//         var row = [];
//         for (var x = 0; x < boardWidth; ++x) {
//             var cell = {
//                 snake:0,
//                 food:0
//             }; //Each cell is defined by an empty object -> gibt den Zustand jeder Zelle wieder
        
//             cell.element = document.createElement('div');

//             boardElement.appendChild(cell.element);

//             row.push(cell);
        
//         }
//         board.push(row);
//     }
//     startGame();
//     gameLoop();
// }


// function startGame() {
//     snakeX = Math.floor(boardWidth / 2);
//     snakeY = Math.floor(boardHeight / 2);
//     snakeLength = 4;
//     snakeDirection = "Right";
//     snakeFoodX = Math.floor(Math.random()* boardWidth);
//     snakeFoodY = Math.floor(Math.random()* boardHeight);


//     for (var y = 0; y < boardHeight; ++y){
//         for (var x = 0; x < boardWidth; ++x) {
//             board[y][x].snake = 0; 
//             board[y][x].food = 0;
//         }
//     }

//     board[snakeY][snakeX].snake = snakeLength;
//     board[snakeFoodY][snakeFoodX].food = 1;
// }


// function gameLoop() {

//     switch (snakeDirection) {
//         case "Up": snakeY--; break;
//         case "Down": snakeY++; break;
//         case "Left": snakeX--; break;
//         case "Right": snakeX++; break;
//     }


//     // Check for walls, and restart if we collide with any
//     if (snakeX < 0 || snakeY < 0 || snakeX >= boardWidth || snakeY >= boardHeight) {
//     startGame()
//     }

//     // Update the board at the new snake position
//     board[snakeY][snakeX].snake = snakeLength;
//     // Loop over the entire GameBoard and update every cell
//     for (var y = 0; y < boardHeight; ++y) {
//         for (var x= 0; x < boardWidth; ++x) {
//             var cell = board[y][x];
           
    
//             if (cell.snake > 0) {
//                  cell.element.className = "snake";
//                     cell.snake -= 1;
//                 } else if (cell.food > 0) {
//                 cell.element.className = "food";
//                 } else if(cell.snake > 0 && cell.food > 0){
//                     cell.food -= 1;
//                 } else {
//                     cell.element.className = "";
//                 }
//         }
//     }
   

//     setTimeout(gameLoop, 700 / snakeLength);
// }


// function enterKey(event) {
//     switch (event.key) {
//         case 'ArrowUp': snakeDirection = 'Up'; break;
//         case 'ArrowDown': snakeDirection = 'Down'; break;
//         case 'ArrowLeft': snakeDirection = 'Left'; break;
//         case 'ArrowRight': snakeDirection = 'Right'; break;
//         default: return;
//     }

//     // This prevents the arrow keys from scrolling the window
//     event.preventDefault();
// }





// */
