import React from "react";
import Navbar from './Navbar';
import Banner from './Banner';
import Description from './Description';
import Playground from './Playground';

const Webpage = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
        <Description/>
        <Playground/>
        </>
    );
};

export default Webpage;