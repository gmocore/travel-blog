import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useAuth0 } from '../react-auth0-spa';


function Nav() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const [ active, setActive ] = React.useState(false)
    const toggle = () => setActive(!active)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom shadow">
            <Link className="navbar-brand" to="#">kB</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${active ? "active" : ""}`} to="/" onClick={toggle}>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${active ? "active" : ""}`} to="/about" onClick={toggle}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${active ? "active" : ""}`} to="/blog" onClick={toggle}>Blog</Link>
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
