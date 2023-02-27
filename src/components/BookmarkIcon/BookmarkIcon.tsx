import bookmarkEmpty from "../../assets/images/icon-bookmark-empty.svg"
import bookmarkFull from "../../assets/images/icon-bookmark-full.svg"
import "./BookmarkIcon.scss"

type bookmarkIconType = {
  bookmarked: boolean
}

const BookmarkIcon = ({ bookmarked }: bookmarkIconType) => (
  <div className="bookmark">
    <button className="bookmark__button">
      <img
        className="bookmark__icon"
        src={bookmarked ? bookmarkFull : bookmarkEmpty}
        alt="bookmark"
      />
    </button>
  </div>
)

export default BookmarkIcon
