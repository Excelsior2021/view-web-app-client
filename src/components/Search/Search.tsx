import { useState, Dispatch } from "react"
import { actionType, videoObjectType } from "../../types/types"
import search from "../../assets/images/icon-search.svg"
import "./Search.scss"

type searchType = {
  dispatch: Dispatch<actionType>
  placeholder: string
  query: videoObjectType[] | null
}

const Search = ({ dispatch, placeholder, query }: searchType) => {
  const [queryValue, setQueryValue] = useState("")
  return (
    <div className="search">
      <img className="search__icon" src={search} alt="search" />
      <input
        className="search__input"
        type="text"
        value={query ? queryValue : ""}
        placeholder={placeholder}
        onChange={e => {
          dispatch({ type: "QUERY", query: e.target.value })
          setQueryValue(e.target.value)
        }}></input>
    </div>
  )
}

export default Search
