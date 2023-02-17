// @ts-nocheck
import ViewDetails from "../ViewDetails/ViewDetails"
import BookmarkIcon from "../BookmarkIcon/BookmarkIcon"
import PlayModal from "../PlayModal/PlayModal"
import "./TrendingView.scss"

const TrendingView = ({ view }) => (
  <li className="trending-view">
    <div className="trending-view__play-modal">
      <PlayModal />
    </div>
    <img
      className="trending-view__thumbnail"
      src={view.thumbnail.trending.small}
      alt={view.title}
    />
    <BookmarkIcon bookmarked={view.isBookmarked} />
    <div className="trending-view__details">
      <ViewDetails view={view} />
    </div>
  </li>
)

export default TrendingView
