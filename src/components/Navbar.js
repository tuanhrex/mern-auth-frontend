import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <div className="container">
                <Link className="navbar-brand" to="/">MERN Auth</Link>
                <button className="navbar-toggler" type="button" data-toggle="#navbarsExample07" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="navlink" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navlink" exact to="/about">About</NavLink>
                        </li>

                    </ul>
                    {
                        props.isAuth ?
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="navlink" to="/profile">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
                            </li>

                        </ul>
                        :
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="navlink" to="/signup">Create Account</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="navlink" to="/login">Log in</NavLink>
                            </li>

                        </ul>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
