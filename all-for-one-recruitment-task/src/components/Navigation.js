import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/sass/Navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation-links">
        <NavLink to="/list" className="navigation-link" activeClassName="active">
            REPORTS LIST
        </NavLink>
        <br/>
        <NavLink to="/add" className="navigation-link" activeClassName="active">
            ADD REPORT
        </NavLink>
    </div>
  )
}

export default Navigation;
