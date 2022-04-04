import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className="logo">
                    <Link to='/'><img src="./logo.png" alt="" /></Link>
                </div>
                <div className="navbar">
                    <Link to='/'>Home</Link>
                    <Link to='/reviews'>Reviews</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;