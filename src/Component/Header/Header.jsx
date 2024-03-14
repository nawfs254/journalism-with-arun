// import React from 'react';
import { SiLivejournal } from "react-icons/si";
import Banner from "../Banner/Banner";

const Header = () => {
    return (
        <>
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center mx-10 my-5">
            <span className="flex items-center gap-2"><SiLivejournal className="text-blue-400 w-6 h-6"/><h1 className="text-2xl md:text-3xl font-bold text-blue-400 text-center">Jouranlism With Arun</h1></span>
            <div className="mid">
                <ul className="navmenu flex gap-4 lg:gap-10 items-cente flex-wrap justify-center">
                    <li className="transition hover:text-blue-400 hover:font-medium cursor-pointer"><a href="#about">About</a></li>
                    <li className="transition hover:text-blue-400 hover:font-medium cursor-pointer"><a href="#courses">Course</a></li>
                    <li className="transition hover:text-blue-400 hover:font-medium cursor-pointer"><a href="#reviews">Reviews</a></li>
                    <li className="transition hover:text-blue-400 hover:font-medium cursor-pointer">Blog</li>
                </ul>
            </div>

            <div className="flex gap-5">
                <button className="btn-primary transition border-blue-600 border-2 hover:bg-blue-400 p-3 rounded-md w-28 text-black">Sign Up</button>
                <button className="btn-primary transition border-blue-600 border-2 hover:bg-blue-400 p-1 md:p-3 rounded-md w-28 text-black">log In</button>
            </div>
        </div>
        <Banner></Banner>
        </>
    );
};

export default Header;