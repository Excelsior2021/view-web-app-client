import { useState, Dispatch } from "react"
import { actionType } from "../../types/types"
import logo from "../../assets/images/logo.svg"
import home from "../../assets/images/icon-nav-home.svg"
import movies from "../../assets/images/icon-nav-movies.svg"
import tv from "../../assets/images/icon-nav-tv-series.svg"
import bookmarks from "../../assets/images/icon-nav-bookmark.svg"
import avatar from "../../assets/images/image-avatar.png"
import "./Toolbar.scss"

type toolbarType = {
  dispatch: Dispatch<actionType>
}

const navInitial = [
  { section: "home", icon: home, active: true },
  { section: "movies", icon: movies, active: false },
  { section: "tv", icon: tv, active: false },
  { section: "bookmarks", icon: bookmarks, active: false },
]

const Toolbar = ({ dispatch }: toolbarType) => {
  const [nav, setNav] = useState(navInitial)

  const handleChangeSection = (
    _event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    section: string
  ) => {
    dispatch({ type: "SECTION", section })
    setNav(prevState =>
      prevState.map(element => {
        if (element.section === section) return { ...element, active: true }
        else return { ...element, active: false }
      })
    )
  }

  return (
    <header className="toolbar">
      <div className="toolbar__container">
        <img className="logo" src={logo} alt="logo" />
        <nav className="nav">
          <ul className="nav__list">
            {nav.map(({ section, icon, active }) => (
              <li
                key={section}
                className="nav__item"
                onClick={event => handleChangeSection(event, section)}>
                <a href="#" className="nav__link">
                  <img
                    className={
                      active ? "nav__icon nav__icon--active" : "nav__icon"
                    }
                    src={icon}
                    alt={section}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#" className="avatar_link">
          <img className="avatar" src={avatar} alt="account" />
        </a>
      </div>
    </header>
  )
}

export default Toolbar
