// @ts-nocheck
import bookmarkEmpty from "../../assets/images/icon-bookmark-empty.svg"
import bookmarkFull from "../../assets/images/icon-bookmark-full.svg"
import "./BookmarkIcon.scss"

const BookmarkIcon = ({ bookmarked }) => (
  <div className="bookmark">
    <img
      className="bookmark__icon"
      src={bookmarked ? bookmarkFull : bookmarkEmpty}
      alt="bookmark"
    />
  </div>
)

export default BookmarkIcon
