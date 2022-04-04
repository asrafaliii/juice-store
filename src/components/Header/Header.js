import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-light">
            <nav className='container nav-container'>
                <h1 className='text-danger'>Juice Store</h1>
                <div className='nav-link text-decoration-none'>
                    <Link to='/home'>Home</Link>
                    <Link to='/reviews'>Reviews</Link>
                    <Link to='/deshboard'>Deshboard</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </nav>
        </div>
        
        
        
        
            
            
    );
};

export default Header;