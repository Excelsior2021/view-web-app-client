import { useEffect, useState, useReducer } from "react"
import Search from "./components/Search/Search"
import Toolbar from "./components/Toolbar/Toolbar"
import Trending from "./components/Trending/Trending"
import data from "./data/data.json"
import ViewList from "./components/ViewList/ViewList"

const trendingData = data.filter(({ isTrending }) => isTrending)
const recommendedData = data.filter(({ isTrending }) => !isTrending)
const movies = data.filter(({ category }) => category.toLowerCase() === "movie")
const tv = data.filter(({ category }) => category.toLowerCase() === "tv series")
const bookmarks = data.filter(({ isBookmarked }) => isBookmarked)

const initialState = {}

const App = () => {
  const [trending, _setTrending] = useState(trendingData)
  const [viewList, setViewList] = useState(recommendedData)
  const [section, setSection] = useState("movies")
  const [viewListHeading, setViewListHeading] = useState("recommended for you")
  const [query, setQuery] = useState("")

  // const [state, dispatch] = useReducer()

  useEffect(() => {
    setViewList(
      data.filter(({ title }) =>
        title.toLowerCase().includes(query.toLowerCase())
      )
    )
    if (query)
      setViewListHeading(
        `Found ${viewList.length} ${
          viewList.length === 1 ? "result" : "results"
        } for '${query}'`
      )
    else setViewListHeading("recommended for you")
  }, [viewList])

  useEffect(() => {
    switch (section) {
      case "home":
        setViewList(recommendedData)
        setViewListHeading("recommended for you")
        break
      case "movies":
        console.log("test")
        setViewList(movies)
        setViewListHeading("movies")
        break
      case "tv":
        setViewList(tv)
        setViewListHeading("tv series")
        break
      case "bookmarks":
        setViewList(bookmarks)
        setViewListHeading("bookmarked")
        break
    }
  }, [section, viewList])

  return (
    <>
      <Toolbar setSection={setSection} />
      <main className="main">
        <Search setQuery={setQuery} />
        {!query && section === "home" && <Trending trending={trending} />}
        <ViewList list={viewList} heading={viewListHeading} />
      </main>
    </>
  )
}

export default App
