import './Game.css';

export const Game = ({ verifyLetter }) => {
  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação atual: 000</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className='tip'>
        Dica: <span>Dica...</span>
      </h3>

      <div className='wordContainer'>
        <span className='letter'>A</span>
        <span className='blankSquare'></span>
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
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
  )
}

export default Game;
