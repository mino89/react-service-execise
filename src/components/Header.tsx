import { NavLink } from "react-router-dom"
import Styles from "../Styles/components/header.module.scss"
import Logo from "../logo.svg"
const Header = () => {


  return (
    <header className={Styles.header}>
      <img src={Logo}  className={Styles.logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/metrics"
            >
              metrics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}


export default Header