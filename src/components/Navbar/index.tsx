import Logo from 'assets/img/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className='h-20 navbar sticky top-0'>
            <div className='h-full container mx-auto px-5 flex justify-between items-center bg-white '>
                <Link to='/'>
                    <img src={Logo} alt='logo' />
                </Link>

                <div className='flex '>
                    <Link to='/signin'>
                        <button className='bg-green focus:outline-none text-gray-50 rounded-md h-10 px-6'>Signin</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
