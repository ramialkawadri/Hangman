class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.gussedLetters = [];
    this.status = 'playing';
  }

  get puzzle() {
    let puzzle = '';
    this.word.forEach((letter) => {
      if (this.gussedLetters.includes(letter) || letter === ' ')
        puzzle += letter;
      else puzzle += '*';
    });
    return puzzle;
  }

  makeGuess(guess) {
    if (this.status !== 'playing') return;

    guess = guess.toLowerCase();
    const isUnique = !this.gussedLetters.includes(guess);
    const badGuess = !this.word.includes(guess);

    if (isUnique) {
      this.gussedLetters.push(guess);
    }

    if (isUnique && badGuess) {
      this.remainingGuesses--;
    }

    this.calculateStatus();
  }

  calculateStatus() {
    if (this.remainingGuesses === 0) {
      this.status = 'failed';
    } else {
      const finished = this.word.every(
        (letter) => this.gussedLetters.includes(letter) || letter === ' '
      );

      if (finished) {
        this.status = 'finished';
      } else {
        this.status = 'playing';
      }
    }
  }

  get statusMessage() {
    let message = `${this.status} ->`;
    if (this.status === 'playing') {
      message += ` Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === 'failed') {
      message += ` Nice try! The word was "${this.word.join('')}".`;
    } else {
      message += ' Great work! You guessed the word';
    }
    return message;
  }
}
export default Hangman;
