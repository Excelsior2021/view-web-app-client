import { useState } from "react"
import Search from "./components/Search/Search"
import Toolbar from "./components/Toolbar/Toolbar"
import Trending from "./components/Trending/Trending"
import data from "./data/data.json"
import Recommended from "./components/Recommended/Recommended"

const trendingData = data.filter(({ isTrending }) => isTrending)
const recommendedData = data.filter(({ isTrending }) => !isTrending)

const App = () => {
  const [trending, _setTrending] = useState(trendingData)
  const [recommended, _setrecommended] = useState(recommendedData)

  return (
    <>
      <Toolbar />
      <main className="main">
        <Search />
        <Trending trending={trending} />
        <Recommended recommended={recommended} />
      </main>
    </>
  )
}

export default App
