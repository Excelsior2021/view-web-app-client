// @ts-nocheck
import BookmarkIcon from "../BookmarkIcon/BookmarkIcon"
import ViewDetails from "../ViewDetails/ViewDetails"
import "./RecommendedView.scss"

const RecommendedView = ({ view }) => (
  <li className="recommended-view">
    <img
      className="recommended-view__thumbnail"
      src={view.thumbnail.regular.small}
      alt={view.title}
    />
    <BookmarkIcon bookmarked={view.isBookmarked} />
    <div className="recommended-view__details">
      <ViewDetails view={view} />
    </div>
  </li>
)
export default RecommendedView
