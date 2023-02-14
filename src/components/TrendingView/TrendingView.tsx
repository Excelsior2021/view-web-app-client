// @ts-nocheck
import movie from "../../assets/images/icon-category-movie.svg"
import tv from "../../assets/images/icon-category-tv.svg"
import bookmarkEmpty from "../../assets/images/icon-bookmark-empty.svg"
import bookmarkFull from "../../assets/images/icon-bookmark-full.svg"

import "./TrendingView.scss"

const TrendingView = ({ view }) => {
  return (
    <li className="trending-view">
      <img
        className="trending-view__thumbnail"
        src={view.thumbnail.trending.small}
        alt={view.title}
      />
      <div className="trending-view__bookmark-container">
        <img
          className="trending-view__bookmark"
          src={view.isBookmarked ? bookmarkFull : bookmarkEmpty}
          alt=""
        />
      </div>
      <div className="trending-view__info">
        <div className="trending-view__details">
          <p className="trending-view__detail">{view.year}</p>
          <p className="trending-view__detail">•</p>
          <img
            className="trending-view__detail"
            src={view.category === "Movie" ? movie : tv}
            alt="catergory"
          />
          <p className="trending-view__detail">{view.category}</p>
          <p className="trending-view__detail">•</p>
          <p className="trending-view__detail">{view.rating}</p>
        </div>
        <p className="trending-view__title">{view.title}</p>
      </div>
    </li>
  )
}

export default TrendingView
