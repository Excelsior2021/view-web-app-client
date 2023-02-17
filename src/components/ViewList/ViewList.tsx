// @ts-nocheck
import View from "../View/View"
import "./ViewList.scss"

const ViewList = ({ list, queryList, heading }) => (
  <div className="view-list">
    <h2 className="view-list__heading">{heading}</h2>
    <ul className="view-list__views">
      {queryList
        ? queryList.map(view => <View key={view.title} view={view} />)
        : list.map(view => <View key={view.title} view={view} />)}
    </ul>
  </div>
)

export default ViewList
