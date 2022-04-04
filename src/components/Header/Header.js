import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <h1>Juice Store</h1>
            <div>
            <Link to='/home'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/deshboard'>Deshboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </nav>
        
        
            
            
    );
};

export default Header;