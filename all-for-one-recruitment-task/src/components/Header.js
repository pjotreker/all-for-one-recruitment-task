import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Meteorological Reports App</h1>
      <hr />
      <div className="links">
        <NavLink to="/list" className="link" activeClassName="active" exact>
          Reports List
        </NavLink>
        <br/>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Report
        </NavLink>
      </div>
    </header>
  );
};

export default Header;