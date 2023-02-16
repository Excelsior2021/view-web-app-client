// @ts-nocheck
import { useState } from "react"
import search from "../../assets/images/icon-search.svg"
import "./Search.scss"

const Search = ({ setQuery }) => {
  return (
    <div className="search">
      <img className="search__icon" src={search} alt="search" />
      <input
        className="search__input"
        type="text"
        placeholder="Search for movies or TV series"
        onChange={e => setQuery(e.target.value)}></input>
    </div>
  )
}

export default Search
