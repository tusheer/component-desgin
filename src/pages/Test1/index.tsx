import Navbar from 'components/Navbar';
import ShadowBox from 'components/ShadowBox';
import React from 'react';
import Text1From from './Text1From';

const Test1 = () => {
    return (
        <React.Fragment>
            <Navbar />
            <ShadowBox>
                <Text1From />
            </ShadowBox>
        </React.Fragment>
    );
};

export default Test1;
