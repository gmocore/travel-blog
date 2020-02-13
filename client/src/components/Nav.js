import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { useAuth0 } from '../react-auth0-spa';


function Nav() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    // const [ active, setActive ] = React.useState(false)
    // const toggle = () => setActive(!active)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom shadow">
            <NavLink className="navbar-brand" to="#">kB</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={`nav-link`}
                        activeClassName="active"
                        exact to="/" >Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link`}
                        activeClassName="active"
                        to="/about" >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link`}
                        activeClassName="active"
                        to="/blog" >Blog</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                {!isAuthenticated && (
                    <button className="btn btn-secondary border-light" onClick={() => loginWithRedirect({})}>Log In</button>
                )}

                {isAuthenticated && <button className="btn btn-secondary border-light" onClick={() => logout()}>Log out</button>}
            </div>
        </nav>
    )
}

export default Nav
