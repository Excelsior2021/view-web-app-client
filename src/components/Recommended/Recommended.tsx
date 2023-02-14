// @ts-nocheck
import RecommendedView from "../RecommendedView/RecommendedView"
import "./Recommended.scss"

const Recommended = ({ recommended }) => (
  <div className="recommended">
    <h2 className="recommended__heading">recommended for you</h2>
    <ul className="recommended__views">
      {recommended.map(view => (
        <RecommendedView view={view} />
      ))}
    </ul>
  </div>
)

export default Recommended
