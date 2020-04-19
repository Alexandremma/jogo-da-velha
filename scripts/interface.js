document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

});

function handleClick(event) {
    
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alertWinner();
        }, 10);

        mostrarRestartButton();
    }

    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    
    if (symbol != '') {
        square.innerHTML = `<div class='${symbol}'></div>`;
    }
}

function alertWinner() {
    if (playerTime == 0) {
        alert('O Hambúrguer ganhou!');
    } else {
        alert('A Pizza ganhou!');
    }
}

function mostrarRestartButton() {
    let restartContainer = document.getElementById("restartContent");

    restartContainer.innerHTML = '<button id="restartGame" onclick="resetGame()">Restart Game</button>';
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

    let restartContainer = document.getElementById("restartContent");

    restartContainer.innerHTML = '';

    updateSquares();
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.innerHTML = '';
    });
}