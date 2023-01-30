import { Navigate, NavLink } from "react-router-dom"


const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/metrics"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            metrics
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}


export default Header