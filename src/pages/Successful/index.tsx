import SuccessfulSVG from 'assets/img/successful.svg';
import Navbar from 'components/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';
import './Successful.css';
const Successful = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='w-11/12 md:my-14 my-8  md:w-6/12 mx-auto   p-4 flex flex-col items-center successful-divition'>
                <img className='max-h-96' src={SuccessfulSVG} alt='login successfull' />
                <h2 className='text-green text-3xl text-center my-8'>login successfully</h2>
                <Link to='/'>
                    <button className='bg-green focus:outline-none text-gray-50 rounded-md h-10 px-6'>Go Back</button>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Successful;
