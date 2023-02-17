// @ts-nocheck
import BookmarkIcon from "../BookmarkIcon/BookmarkIcon"
import PlayModal from "../PlayModal/PlayModal"
import ViewDetails from "../ViewDetails/ViewDetails"
import "./View.scss"

const View = ({ view }) => (
  <li className="view">
    <div className="view__play-modal">
      <PlayModal />
    </div>
    <img
      className="view__thumbnail"
      src={view.thumbnail.regular.small}
      alt={view.title}
    />
    <BookmarkIcon bookmarked={view.isBookmarked} />
    <div className="view__details">
      <ViewDetails view={view} />
    </div>
  </li>
)
export default View
