import './index.css'

const EmojiCard = ({emojidetail, onEmojiClick}) => {
  const {id, emojiName, emojiUrl} = emojidetail

  return (
    <li className="emojiCard">
      <button
        type="button"
        className="emoji-button"
        onClick={() => onEmojiClick(id)}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
