import React from "react";
import Comman from "./Comman";
import web from '../images/about.webp';
const About = ()=>{

    return(
        <>
        <Comman name="Welcome to About Page" imgsrc={web} visit='/contact' btnname="Contact Now"/>
        </>
    )
}
export default About;