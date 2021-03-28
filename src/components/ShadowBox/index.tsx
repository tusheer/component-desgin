import React from 'react';
import './ShadowBox.css';
interface ShoadowProps {
    children: React.ReactChild;
}

const ShadowBox: React.FC<ShoadowProps> = ({ children }) => {
    return <div className='w-11/12 md:my-24 my-10 rounded-lg md:w-6/12 mx-auto shadowinthebox md:p-10 p-6'>{children}</div>;
};

export default ShadowBox;
