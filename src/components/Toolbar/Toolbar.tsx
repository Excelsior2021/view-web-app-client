// @ts-nocheck
import logo from "../../assets/images/logo.svg"
import home from "../../assets/images/icon-nav-home.svg"
import movies from "../../assets/images/icon-nav-movies.svg"
import tv from "../../assets/images/icon-nav-tv-series.svg"
import bookmarks from "../../assets/images/icon-nav-bookmark.svg"
import avatar from "../../assets/images/image-avatar.png"
import "./Toolbar.scss"
import { useState } from "react"

const navInitial = [
  { name: "home", icon: home, active: true },
  { name: "movies", icon: movies, active: false },
  { name: "tv", icon: tv, active: false },
  { name: "bookmarks", icon: bookmarks, active: false },
]

const Toolbar = ({ setSection }) => {
  const [nav, setNav] = useState(navInitial)

  const handleChangeSection = (_event, name) => {
    setSection(name)
    setNav(prevState =>
      prevState.map(element => {
        if (element.name === name) return { ...element, active: true }
        else return { ...element, active: false }
      })
    )
  }

  return (
    <header className="toolbar">
      <img className="logo" src={logo} alt="logo" />
      <ul className="nav">
        {nav.map(({ name, icon, active }) => (
          <li
            key={name}
            className="nav__item"
            onClick={event => handleChangeSection(event, name)}>
            <img
              className={active ? "nav__icon nav__icon--active" : "nav__icon"}
              src={icon}
              alt={name}
            />
          </li>
        ))}
      </ul>
      <img className="avatar" src={avatar} alt="account" />
    </header>
  )
}

export default Toolbar
