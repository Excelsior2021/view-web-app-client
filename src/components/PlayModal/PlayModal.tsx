import playButton from "../../assets/images/icon-play.svg"
import "./PlayModal.scss"

const PlayModal = () => (
  <div className="play-modal">
    <button className="play-modal__button">
      <img className="play-modal__icon" src={playButton} alt="play button" />
      <span className="play-modal__text">view</span>
    </button>
  </div>
)

export default PlayModal
