import './Game.css';

export const Game = ({ 
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {
  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação atual: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className='tip'>
        Dica: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className='letterContainer'>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
        </form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
      </div>

      <div className="wrongLetterContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((wrongLetter, i) => (
          <span key={i}> {wrongLetter} |</span>
        ))}
      </div>
    </div>
  )
}

export default Game;
