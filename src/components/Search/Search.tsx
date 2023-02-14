import search from "../../assets/images/icon-search.svg"
import "./Search.scss"

const Search = () => (
  <div className="search">
    <img className="search__icon" src={search} alt="search" />
    <input
      className="search__input"
      type="text"
      placeholder="Search for movies or TV series"></input>
  </div>
)

export default Search
