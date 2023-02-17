// @ts-nocheck
import { useReducer } from "react"
import Search from "./components/Search/Search"
import Toolbar from "./components/Toolbar/Toolbar"
import Trending from "./components/Trending/Trending"
import data from "./data/data.json"
import ViewList from "./components/ViewList/ViewList"

const trending = data.filter(({ isTrending }) => isTrending)
const recommendedData = data.filter(({ isTrending }) => !isTrending)
const movies = data.filter(({ category }) => category.toLowerCase() === "movie")
const tv = data.filter(({ category }) => category.toLowerCase() === "tv series")
const bookmarks = data.filter(({ isBookmarked }) => isBookmarked)

const initialState = {
  trending,
  viewList: recommendedData,
  section: "home",
  viewListHeading: "recommended for you",
  placeholder: "Search movies or TV series",
  showTrending: true,
}

const viewsReducer = (state, action) => {
  switch (action.type) {
    case "QUERY": {
      if (!action.query) {
        let viewListHeading
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
            viewListHeading = "bookmarks"
            break
        }
        return {
          ...state,
          queryViewList: null,
          viewListHeading,
          showTrending: true,
        }
      }
      let queryViewList
      if (state.section === "home")
        queryViewList = data.filter(({ title }) =>
          title.toLowerCase().includes(action.query.toLowerCase())
        )
      else
        queryViewList = state.viewList.filter(({ title }) =>
          title.toLowerCase().includes(action.query.toLowerCase())
        )
      return {
        ...state,
        queryViewList,
        viewListHeading: `Found ${queryViewList.length} ${
          queryViewList.length === 1 ? "result" : "results"
        } for '${action.query}'`,
        showTrending: false,
      }
    }
    case "SECTION": {
      let viewList
      let viewListHeading
      let placeholder
      let viewListBookmarks
      let viewListHeadingBookmarks
      switch (action.section) {
        case "home":
          viewList = recommendedData
          viewListHeading = "recommended for you"
          placeholder = "Search movies or TV series"
          break
        case "movies":
          viewList = movies
          viewListHeading = "movies"
          placeholder = "Search movies"
          break
        case "tv":
          viewList = tv
          viewListHeading = "tv series"
          placeholder = "Search TV series"
          break
        case "bookmarks":
          viewList = bookmarks
          viewListHeading = "bookmarks"
          placeholder = "Search bookmarked views"
          break
      }
      return {
        ...state,
        section: action.section,
        viewList,
        queryViewList: null,
        viewListHeading,
        placeholder,
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
        <Search dispatch={dispatch} placeholder={state.placeholder} />
        {state.showTrending && state.section === "home" && (
          <Trending trending={trending} />
        )}
        <ViewList
          list={state.viewList}
          queryList={state.queryViewList}
          heading={state.viewListHeading}
        />
      </main>
    </div>
  )
}

export default App
