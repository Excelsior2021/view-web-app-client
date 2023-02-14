import logo from "../../assets/images/logo.svg"
import home from "../../assets/images/icon-nav-home.svg"
import movies from "../../assets/images/icon-nav-movies.svg"
import tv from "../../assets/images/icon-nav-tv-series.svg"
import bookmarks from "../../assets/images/icon-nav-bookmark.svg"
import avatar from "../../assets/images/image-avatar.png"
import "./Toolbar.scss"

const nav = [
  { name: "home", icon: home },
  { name: "movies", icon: movies },
  { name: "tv", icon: tv },
  { name: "bookmarks", icon: bookmarks },
]

const Toolbar = () => (
  <header className="toolbar">
    <img className="logo" src={logo} alt="logo" />
    <ul className="nav">
      {nav.map(({ name, icon }) => (
        <li key={name} className="nav__item">
          <img className="nav__icon" src={icon} alt={name} />
        </li>
      ))}
    </ul>
    <img className="avatar" src={avatar} alt="account" />
  </header>
)

export default Toolbar
