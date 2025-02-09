let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            statusDisplay.textContent = `Player ${board[a]} wins!`; // Fixed: Display the winner correctly.
            return;
        }
    }

    if (!board.includes('')) {
        gameOver = true;
        statusDisplay.textContent = "It's a draw!";
    }
};

const handleClick = (index) => {
    if (board[index] || gameOver) return;
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    checkWinner();  // Check for winner before switching player.
    if (!gameOver) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player after checking for winner
        statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    }
};

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleClick(index));
});
