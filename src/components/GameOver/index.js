import './GameOver.css';

export const GameOver = ( { retry }) => {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={retry}>Recomeçar</button>
    </div>
  )
}

export default GameOver;