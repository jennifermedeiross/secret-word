import './Game.css';

export const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Encerrar o jogo</button>
    </div>
  )
}

export default Game;
