import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <p><Link to='/'>Al Mizan</Link> | 2022 ©Copyright | All rights reserved</p>
        </div>
    );
};

export default Footer;