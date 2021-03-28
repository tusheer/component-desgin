import Navbar from 'components/Navbar';
import ShadowBox from 'components/ShadowBox';
import React from 'react';
import SigninFrom from './SigninForm';

const Signin = () => {
    return (
        <React.Fragment>
            <Navbar />
            <ShadowBox>
                <React.Fragment>
                    <h1 className='text-3xl text-center  text-gray-800 mb-5'>Signin your account</h1>
                    <SigninFrom />
                </React.Fragment>
            </ShadowBox>
        </React.Fragment>
    );
};

export default Signin;
