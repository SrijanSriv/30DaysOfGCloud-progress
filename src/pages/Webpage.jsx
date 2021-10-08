import React from "react";
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Description from '../components/Description';
import Playground from '../components/Playground';

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