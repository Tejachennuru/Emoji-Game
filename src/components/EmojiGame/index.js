import './index.css'
import {useState} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

const EmojiGame = ({emojisList}) => {
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [clickedEmojis, setClickedEmojis] = useState([])
  const [isGameOver, setIsGameOver] = useState(false)
  const [isWin, setIsWin] = useState(false)

  const shuffledEmojisList = () =>
    [...emojisList].sort(() => Math.random() - 0.5)

  const onEmojiClick = emojiId => {
    if (clickedEmojis.includes(emojiId)) {
      setIsGameOver(true)
      setIsWin(false)
    } else {
      const newClickedEmojis = [...clickedEmojis, emojiId]
      setClickedEmojis(newClickedEmojis)
      setScore(newClickedEmojis.length)
      setTopScore(prevTopScore =>
        Math.max(prevTopScore, newClickedEmojis.length),
      )

      if (newClickedEmojis.length === emojisList.length) {
        setIsGameOver(true)
        setIsWin(true)
      }
    }
  }

  const resetGame = () => {
    setScore(0)
    setClickedEmojis([])
    setIsGameOver(false)
    setIsWin(false)
    setTopScore(prevTopScore => Math.max(prevTopScore, score)) // ✅ Updates top score after losing
  }

  return (
    <div className="EmojiGame">
      <NavBar score={score} topscore={topScore} isGameOver={isGameOver} />
      <div className="bodySection">
        {isGameOver ? (
          <WinOrLoseCard isWin={isWin} score={score} resetGame={resetGame} />
        ) : (
          <ul className="CardSection">
            {shuffledEmojisList().map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojidetail={eachEmoji}
                onEmojiClick={onEmojiClick}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default EmojiGame
