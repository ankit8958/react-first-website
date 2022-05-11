import React from "react";
import web from '../images/app1.png';
import { NavLink } from "react-router-dom";
import Comman from "./Comman";
const Home = () => {

    return (
        <>
            <Comman name="Grow Your Business With" imgsrc={web} visit='/service' btnname="Get Started"/>
        </>
    )
}
export default Home;