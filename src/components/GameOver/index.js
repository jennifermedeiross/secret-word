import './GameOver.css';

export const GameOver = ( { retry, score }) => {
  return (
    <div className='gameOver'>
      <h1>Fim de jogo!</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Recomeçar</button>
    </div>
  )
}

export default GameOver;