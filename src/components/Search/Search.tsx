import { Dispatch } from "react"
import { actionType } from "../../types/types"
import search from "../../assets/images/icon-search.svg"
import "./Search.scss"

type searchType = {
  dispatch: Dispatch<actionType>
  placeholder: string
}

const Search = ({ dispatch, placeholder }: searchType) => {
  return (
    <div className="search">
      <img className="search__icon" src={search} alt="search" />
      <input
        className="search__input"
        type="text"
        placeholder={placeholder}
        onChange={e =>
          dispatch({ type: "QUERY", query: e.target.value })
        }></input>
    </div>
  )
}

export default Search
