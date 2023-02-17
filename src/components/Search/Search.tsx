// @ts-nocheck
import { useState } from "react"
import search from "../../assets/images/icon-search.svg"
import "./Search.scss"

const Search = ({ dispatch, placeholder }) => {
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
