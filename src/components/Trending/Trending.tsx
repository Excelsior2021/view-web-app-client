import TrendingView from "../TrendingView/TrendingView"
import { videoObjectType } from "../../types/types"
import "./Trending.scss"

type trendingType = {
  trending: videoObjectType[]
}

const Trending = ({ trending }: trendingType) => (
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
