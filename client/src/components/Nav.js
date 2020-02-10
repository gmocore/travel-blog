import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useAuth0 } from '../react-auth0-spa';


function Nav() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    // const activeClass = (e) => {
    //     console.log(document.getElementsByTagName('a'))
    //     const link = e.target;
    //     if (link === e.currentTarget) {
    //         console.log(true)
    //         link.classList.add('active')
    //     } 
        
    // }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom shadow">
            <Link className="navbar-brand" to="#">kB</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={activeClass}>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" onClick={activeClass}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog" onClick={activeClass}>Blog</Link>
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
