import ViewDetails from "../ViewDetails/ViewDetails"
import BookmarkIcon from "../BookmarkIcon/BookmarkIcon"
import PlayModal from "../PlayModal/PlayModal"
import { videoObjectType } from "../../types/types"
import "./TrendingView.scss"

type trendingViewType = {
  view: videoObjectType
}

const TrendingView = ({ view }: trendingViewType) => (
  <li className="trending-view">
    <div className="trending-view__play-modal">
      <PlayModal />
    </div>
    <img
      className="trending-view__thumbnail"
      src={view.thumbnail.trending?.small}
      alt={view.title}
    />
    <BookmarkIcon bookmarked={view.isBookmarked} />
    <div className="trending-view__details">
      <ViewDetails view={view} />
    </div>
  </li>
)

export default TrendingView
