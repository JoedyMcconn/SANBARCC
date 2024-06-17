import React from "react";
import {HiBars3BottomRight} from "react-icons/hi2";

interface Props {
    openNav:()=>void
}

const Nav = ({ openNav }:Props) => {
    return <div className="navbar h-[13vh] bg-black">
        <div className="flex items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto">
            {/* Logo */}
            <div className="text-[35px] font-semibold text-white">
                <img src='/SanBarTextLogo.png' alt="San Bar Logo" className="h-[75px] w-[160px]"/>
            </div>

                {/*Phone number and Address */}
            {/*<div className="text-white font-semibold text-xl ">*/}
            {/*    <p>505-452-8000</p>*/}
            {/*    <p>9101 Broadway S.E</p>*/}
            {/*    <p>Albuquerque, NM 87105</p>*/}
            {/*</div>*/}

            {/* Nav Links*/}
            <ul className="lg:flex hidden text-white items-center space-x-6 xl:space-x-10">
                <li className="navlink"><a href='/'>Home</a></li>
                <li className="navlink"><a href='../about-us'>About Us</a></li>
                <li className="navlink"><a href='../services'>Services</a></li>
                <li className="navlink"><a href='../projects'>Projects</a></li>
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