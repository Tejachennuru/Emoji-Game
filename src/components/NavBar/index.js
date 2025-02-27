import './index.css'

const NavBar = ({score, topscore, isGameOver}) => (
  <nav className="navbar">
    <div className="logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo-img"
      />
      <h1 className="game-title">Emoji Game</h1>
    </div>
    {!isGameOver && ( // Conditionally render scores
      <div id="scores" className="scores-section">
        <p className="score_text">Score: {score}</p>
        <p className="score_text">Top Score: {topscore}</p>
      </div>
    )}
  </nav>
)

export default NavBar
