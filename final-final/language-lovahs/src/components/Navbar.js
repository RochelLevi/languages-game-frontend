import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
//
  return(
    <div className={"ui inverted blue right menu"}>
      <NavLink to="/" className="item">Home</NavLink>
      <NavLink to="/login" className="item">Login</NavLink>
      <NavLink to="/users/:id" className="item">Profile</NavLink>
    </div>
  )
}

export default Navbar
