import './index.css'

const WinOrLoseCard = ({isWin, score, resetGame}) => {
  const imageUrl = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const resultText = isWin ? 'You Won' : 'You Lose'
  const scoreText = isWin ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="result-container">
        <h1 className="result-text">{resultText}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="play-again-btn" onClick={resetGame}>
          Play Again
        </button>
      </div>
      <div>
        <img src={imageUrl} alt="win or lose" className="result-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
