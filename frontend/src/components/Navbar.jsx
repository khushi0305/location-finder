import React from 'react'
import { NavLink } from 'react-router-dom';
import useAppContext from '../AppContext';

const Navbar = () => {
  const {loggedIn, logout} = useAppContext();
  const showLoginOptions = () => {
    if(loggedIn){
      return (<li className='nav-item'>
        <button className='btn btn-dark' onClick= {logout}>Logout</button>
      </li>
      );
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container">
        <a className="navbar-brand" href="#">
          <b>CityScope</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/browse">
                Browse Location
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/details">
                Place Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/place">
                Add Place
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/find">
                Find Place
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user">
                User Manager
              </NavLink>
            </li>
            {showLoginOptions()}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar