import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <div>BookStore</div>
            </Link>
            <Link to="/cart">
                <div>Cart</div>
            </Link>
        </header>
    )
}

export default Header