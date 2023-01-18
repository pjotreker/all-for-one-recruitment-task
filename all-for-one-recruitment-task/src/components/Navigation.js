import React from 'react'
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="links">
        <NavLink to="/list" className="link" activeClassName="active">
        Reports List
        </NavLink>
        <br/>
        <NavLink to="/add" className="link" activeClassName="active">
        Add Report
        </NavLink>
    </div>
  )
}

export default Navigation;
