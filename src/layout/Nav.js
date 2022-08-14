import React from "react"
import { NavLink } from "react-router-dom"

const navs = [
  {
    name: "Home",
    path: "/home"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  }
]

const Nav = () => 
<>
<nav className="bg-purple-600 text-purple-200 p-4 shadow">
  <ul className="flex space-x-4 justify-end">
    {navs.map(nav => (
      <li key={nav.name}>
        <NavLink to={nav.path} className={({isActive}) => isActive?
          'border-b-2 border-white': ""}>
          {nav.name}
        </NavLink>
      </li>
    ))}
  </ul>
</nav>

</>


export default Nav;