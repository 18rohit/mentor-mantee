import React from "react";
import Header from '../components/Header';
import About from '../components/About';
import Contact from '../components/Contact';

import Slides from '../components/Slides';



function LandingPage(){
    return(
        <div>
            <Header/>
            <Slides/>
            <div id="about">
                <About/>
            </div>
            <div id="contactus"><Contact/></div>
        </div>
    );
};

export default LandingPage;