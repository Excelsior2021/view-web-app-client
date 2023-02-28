import View from "../View/View"
import { videoObjectType } from "../../types/types"
import "./ViewList.scss"

type viewListProps = {
  list: videoObjectType[]
  queryList?: videoObjectType[] | null
  heading: string | null
}

const ViewList = ({ list, queryList, heading }: viewListProps) => (
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
