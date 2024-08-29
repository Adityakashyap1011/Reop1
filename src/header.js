import React from 'react';
import "./heading.css"
import image from "./image.png"

function Header(){
    return(
        <div className='header'>
            <div className='container'>
                <img src={image} alt="SAE"></img>
                <nav className="navbar">
                    <ul>
                        <li><a href='#'>HOME</a></li>
                        <li><a href='#'>ABOUT</a></li>
                        <li><a href='#'>EVENTS</a></li>
                        <li><a href='#'>BLOGS</a></li>
                        <li><a href='#'>PROJECTS</a></li>
                    </ul>
                </nav>
                <button>Trident</button>
            </div>
            <div className='text'>
                <h1>Team Trident</h1>
                <p>SAE(Society of Automotive Engineers) aims to give a platform to people who wish to learn about and build automobiles. Our teams take part in various RC and automotive events all round the year....</p>
            </div>
        </div>
    );
}

export default Header;