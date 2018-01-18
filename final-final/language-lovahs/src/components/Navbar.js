import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
//
  return(
    <div className={"ui inverted blue left menu"}>
      <NavLink to="/" className="item ui primary button">Home</NavLink>
      <NavLink to="/login" className="item">Login</NavLink>
      <NavLink to="/users/:id" className="item">Profile</NavLink>
    </div>
  )
}

export default Navbar
