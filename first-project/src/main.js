const board = [];
    const boardWidth = 26;
    const boardHeight = 16;

    var snakeX;
    var snakeY;
    var snakeLength;
    var snakeDirection;

// x und y Achse -> links nach rechts (boardWidth) oben nach unten (boardHeight)
    function gameBoard() {
        const boardElement = document.getElementById('board');

        for (var y = 0; y < boardHeight; ++y) {
            var row = [];
            for (var x = 0; x < boardWidth; ++x) {
                var cell = {};
                
                cell.element = document.createElement('div');

                boardElement.appendChild(cell.element);
    
                row.push(cell);
            }
            board.push(row);
        }

        startGame();
        gameLoop();
    }

    function placeApple() {
        var appleX = Math.floor(Math.random() * boardWidth);
        var appleY = Math.floor(Math.random() * boardHeight);

        board[appleY][appleX].apple = 1;
    }
        
    function startGame() {
        snakeX = Math.floor(boardWidth / 2);
        snakeY = Math.floor(boardHeight / 2);
        snakeLength = 4;
        snakeDirection = 'right';

        // Clear the board
        for (var y = 0; y < boardHeight; ++y) {
            for (var x = 0; x < boardWidth; ++x) {
                board[y][x].snake = 0;
                board[y][x].apple = 0;
            }
        }

        board[snakeY][snakeX].snake = snakeLength;

        placeApple();
    }

    function gameLoop() {

        switch (snakeDirection) {
            case 'up':    snakeY--; break;
            case 'down':  snakeY++; break;
            case 'left':  snakeX--; break;
            case 'right': snakeX++; break;
        }

        if (snakeX < 0 || snakeY < 0 || snakeX >= boardWidth || snakeY >= boardHeight) {
            startGame();
        }

        if (board[snakeY][snakeX].snake > 0) {
            startGame();
        }

        if (board[snakeY][snakeX].apple === 1) {
            snakeLength++;
            board[snakeY][snakeX].apple = 0;
            placeApple();
        }

        board[snakeY][snakeX].snake = snakeLength;

        for (var y = 0; y < boardHeight; ++y) {
            for (var x = 0; x < boardWidth; ++x) {
                var cell = board[y][x];

                if (cell.snake > 0) {
                    cell.element.className = 'snake';
                    cell.snake -= 1;
                }
                else if (cell.apple === 1) {
                    cell.element.className = 'apple';
                }
                else {
                    cell.element.className = '';
                }
            }
        }

        setTimeout(gameLoop, 900 / snakeLength);
    }

    function enterKey(event) {
        switch (event.key) {
            case 'ArrowUp': snakeDirection = 'up'; break;
            case 'ArrowDown': snakeDirection = 'down'; break;
            case 'ArrowLeft': snakeDirection = 'left'; break;
            case 'ArrowRight': snakeDirection = 'right'; break;
            default: break;
        }

        event.preventDefault();
    }

