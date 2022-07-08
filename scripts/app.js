const puzzleEl = document.getElementById('puzzle');
const guessesEl = document.getElementById('guesses');
let game1;

const renderGame = function (hangman) {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = hangman.statusMessage;
  const puzzle = hangman.puzzle;
  for (let i = 0; i < puzzle.length; ++i) {
    const letterEl = document.createElement('span');
    letterEl.textContent = puzzle[i];
    puzzleEl.appendChild(letterEl);
  }
};

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  renderGame(game1);
});

const startGame = async () => {
  const puzzle = await getPuzzle(2);
  game1 = new Hangman(puzzle, 5);
  renderGame(game1);
};

startGame();
document.getElementById('reset').addEventListener('click', startGame);
