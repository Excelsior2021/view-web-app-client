// @ts-nocheck
import TrendingView from "../TrendingView/TrendingView"
import "./Trending.scss"

const Trending = ({ trending }) => (
  <div className="trending">
    <h2 className="trending__heading">trending</h2>
    <ul className="trending__views">
      {trending.map(view => (
        <TrendingView key={view.title} view={view} />
      ))}
    </ul>
  </div>
)

export default Trending
