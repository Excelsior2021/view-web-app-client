// @ts-nocheck
import bookmarkEmpty from "../../assets/images/icon-bookmark-empty.svg"
import bookmarkFull from "../../assets/images/icon-bookmark-full.svg"

import "./TrendingView.scss"
import ViewDetails from "../ViewDetails/ViewDetails"
import BookmarkIcon from "../BookmarkIcon/BookmarkIcon"

const TrendingView = ({ view }) => {
  return (
    <li className="trending-view">
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
}

export default TrendingView
