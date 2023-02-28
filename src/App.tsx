import { useReducer } from "react"
import Search from "./components/Search/Search"
import Toolbar from "./components/Toolbar/Toolbar"
import Trending from "./components/Trending/Trending"
import ViewList from "./components/ViewList/ViewList"
import data from "./data/data.json"
import { stateType, actionType } from "./types/types"

const trending = data.filter(({ isTrending }) => isTrending)
const recommendedData = data.filter(({ isTrending }) => !isTrending)
const movies = data.filter(({ category }) => category.toLowerCase() === "movie")
const tv = data.filter(({ category }) => category.toLowerCase() === "tv series")
const bookmarks = data.filter(({ isBookmarked }) => isBookmarked)
const bookmarksMovies = movies.filter(({ isBookmarked }) => isBookmarked)
const bookmarksTV = tv.filter(({ isBookmarked }) => isBookmarked)

const initialState = {
  trending,
  viewList: recommendedData,
  section: "home",
  viewListHeading: "recommended for you",
  viewListHeadingBookmarks: null,
  placeholder: "search movies or tv series",
  showTrending: true,
  queryViewList: null,
}

const viewsReducer = (state: stateType, action: actionType): stateType => {
  switch (action.type) {
    case "QUERY": {
      if (!action.query) {
        let viewListHeading
        let viewListHeadingBookmarks = null
        switch (state.section) {
          case "home":
            viewListHeading = "recommended for you"
            break
          case "movies":
            viewListHeading = "movies"
            break
          case "tv":
            viewListHeading = "tv series"
            break
          case "bookmarks":
            viewListHeading = "bookmarked movies"
            viewListHeadingBookmarks = "bookmarked tv series"
            break
          default:
            return state
        }
        return {
          ...state,
          queryViewList: null,
          viewListHeading,
          viewListHeadingBookmarks,
          showTrending: true,
          query: false,
        }
      }
      let queryViewList = null
      if (state.section === "home")
        queryViewList = data.filter(({ title }) =>
          title.toLowerCase().includes(action.query.toLowerCase())
        )
      else if (state.section === "bookmarks")
        queryViewList = bookmarks.filter(({ title }) =>
          title.toLowerCase().includes(action.query.toLowerCase())
        )
      else
        queryViewList = state.viewList.filter(({ title }) =>
          title.toLowerCase().includes(action.query.toLowerCase())
        )
      return {
        ...state,
        queryViewList,
        viewListHeading: `found ${queryViewList.length} ${
          queryViewList.length === 1 ? "result" : "results"
        } for '${action.query}'`,
        showTrending: false,
        query: true,
      }
    }
    case "SECTION": {
      let viewList
      let viewListHeading
      let placeholder
      let viewListBookmarks
      let viewListHeadingBookmarks = null
      switch (action.section) {
        case "home":
          viewList = recommendedData
          viewListHeading = "recommended for you"
          placeholder = "search movies or tv series"
          break
        case "movies":
          viewList = movies
          viewListHeading = "movies"
          placeholder = "search movies"
          break
        case "tv":
          viewList = tv
          viewListHeading = "tv series"
          placeholder = "search tv series"
          break
        case "bookmarks":
          viewList = bookmarksMovies
          viewListHeading = "bookmarked movies"
          placeholder = "search bookmarked views"
          viewListBookmarks = bookmarksTV
          viewListHeadingBookmarks = "bookmarked tv series"
          break
        default:
          return state
      }
      return {
        ...state,
        section: action.section,
        viewList,
        viewListBookmarks,
        queryViewList: null,
        viewListHeading,
        viewListHeadingBookmarks,
        placeholder,
        showTrending: true,
        query: false,
      }
    }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(viewsReducer, initialState)

  return (
    <div className="app">
      <Toolbar dispatch={dispatch} />
      <main className="main">
        <Search
          dispatch={dispatch}
          placeholder={state.placeholder}
          query={state.queryViewList}
        />
        {state.showTrending && state.section === "home" && (
          <Trending trending={trending} />
        )}
        <ViewList
          list={state.viewList}
          queryList={state.queryViewList}
          heading={state.viewListHeading}
        />
        {state.viewListBookmarks && !state.query && (
          <ViewList
            list={state.viewListBookmarks}
            heading={state.viewListHeadingBookmarks}
          />
        )}
      </main>
    </div>
  )
}

export default App
