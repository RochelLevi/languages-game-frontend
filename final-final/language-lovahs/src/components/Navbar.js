import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
//
  return(
    <div className={"ui inverted right menu"}>
      <NavLink to="/home" className="item">Home</NavLink>
      <NavLink to="/login" className="item">Login</NavLink>
    </div>
  )
}

export default Navbar
