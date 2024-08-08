import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{background:"lightgray"}}>
    <div style={{textAlign:'center'}}>
        <h1>Welcome to Vignani</h1>
    </div>
    <div>
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/aboutas">About As</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
    </div>
    </div>
  )
};

export default Layout;