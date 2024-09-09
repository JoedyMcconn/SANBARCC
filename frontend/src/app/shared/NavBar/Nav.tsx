import React from "react";
import {HiBars3BottomRight} from "react-icons/hi2";

interface Props {
    openNav:()=>void
}

const Nav = ({ openNav }:Props) => {
    return <div className="navbar h-[13vh] bg-black z-[999]">
        <div className="flex items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto">

            {/* Logo */}
            <div className="text-[35px] font-semibold text-white">
                <img src='/SanBarTextLogo1.webp' alt="San Bar Logo" className="h-[75px] w-[160px]"/>
            </div>

            {/* Nav Links*/}
            <ul className="lg:flex hidden text-white items-center space-x-6 xl:space-x-10">
                <li className="navlink"><a href='/'>Home</a></li>
                <li className="navlink"><a href='../about-us'>About Us</a></li>
                <li className="navlink"><a href='../services'>Contract Services</a></li>
                <li className="navlink"><a href="../Safety-Products">Retail Services</a></li>
                <li className="navlink"><a href='../job-opportunities'>Job Opportunities</a></li>
                <li className="contactUs"><a href='../contact-us'>Contact Us</a></li>
            </ul>
            {/*Burger menu */}
            <HiBars3BottomRight
                onClick={openNav}
                className="w-[2rem] text-white h-[2rem] lg:hidden"/>

        </div>
    </div>
}

export default Nav;