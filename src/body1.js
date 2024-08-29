import React from 'react';
import "./Body1.css"
import image1 from "./img1.jpeg"
import image2 from "./img2.jpeg"
import image3 from "./img3.jpeg"
import group from "./group.jpeg"

function body1(){
    return(
        <div className='box'>
            <div className='grp'>
                <p className='p1'>Advancing <span style={{color : "rgba(226, 84, 32, 1)"}}>Innovation</span> with the technology </p>
                <div className='content'>
                    <p>The Science and Technology Council at IIT BHU is a student-run organization that aims to promote the understanding and application of Science and Technology among the IIT BHU community. </p>
                    <img src={image1} alt="img1" className='img1 top'></img>
                </div>
            </div>
            <img src={image1} alt="img1" className='img1 topright'></img>
            <img src={image2} alt="img2" className='img1 bottomleft'></img>
            <img src={image3} alt="img3" className='img1 bottomright'></img>
            
            
        </div>
    );
}

export default body1;