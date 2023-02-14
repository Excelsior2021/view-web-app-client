import { useState } from "react"
import Search from "./components/Search/Search"
import Toolbar from "./components/Toolbar/Toolbar"
import Trending from "./components/Trending/Trending"
import data from "./data/data.json"
import photo from "./assets/thumbnails/beyond-earth/trending/small.jpg"

const trendingData = data.filter(({ isTrending }) => isTrending)

const App = () => {
  const [trending, setTrending] = useState(trendingData)
  return (
    <>
      <Toolbar />
      <main className="main">
        <Search />
        <Trending trending={trending} />
      </main>
    </>
  )
}

export default App
