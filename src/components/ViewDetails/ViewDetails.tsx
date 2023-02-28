import { videoObjectType } from "../../types/types"
import movie from "../../assets/images/icon-category-movie.svg"
import tv from "../../assets/images/icon-category-tv.svg"
import "./ViewDetails.scss"

type viewDetailsType = {
  view: videoObjectType
}

const ViewDetails = ({ view }: viewDetailsType) => (
  <div className="view-details">
    <div className="view-details__details">
      <p className="view-details__detail">{view.year}</p>
      <p className="view-details__detail">•</p>
      <img
        className="view-details__detail view-details__detail--icon"
        src={view.category === "Movie" ? movie : tv}
        alt="catergory"
      />
      <p className="view-details__detail">{view.category}</p>
      <p className="view-details__detail">•</p>
      <p className="view-details__detail">{view.rating}</p>
    </div>
    <p className="view-details__title">{view.title}</p>
  </div>
)

export default ViewDetails
