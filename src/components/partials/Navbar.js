import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="container shadow-bottom">
            <span className="f-3 m-3 none-decoration">
                <Link className="light-blue none-decoration" to="/">Cat List</Link>
            </span>
        </nav>
    )
}

export default Navbar
