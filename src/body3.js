import React from 'react';
import "./Body3.css"
import sponsor from './sponsors';
import icon from "./Icon.png"


const verticals=["Helm","Aerodynamics","Vehicle Dynamics","Structures","Marketing","Web Team"];


function createVertical(element){
    return(
        <p className='vertical'>{element}</p>
    );
}

function action(){
    alert("Congrats now you will get regular updates from SAE");
}

function body3(){
    return(
        <div className='class'>
            <div className='one'>
                <h1>Our Sponsors</h1>
                <div className='sponsor'>
                    <img src={sponsor[0]} className='firstSponsor'></img>
                    <img src={sponsor[1]} className='secondSponsor'></img>
                    <img src={sponsor[2]} className='thirdSponsor'></img>
                </div>
            </div>
            <div className='two'>
                <h1>Meet Our Team</h1>
                <div className='rowncol'>
                    <div className='col1'>
                        {verticals.map(createVertical)}
                    </div>
                    <div className='col2'>
                        <img src="https://s3-alpha-sig.figma.com/img/dc74/d0d3/48af714503f2cd58fd2f26ad4a045bee?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=knN0wJGyuKoWkoh-FzjjWJOWxQsMEM2rRQ0JnHUrwtmGFEQelIjBcwUc7BWrbqLWaLy3Ly-IkO8lsnGUydnUrPB47a~MmCPxBAaQsu6UvdNfHsrzIOMZZRwVIei2p-b8CS6grmZasEQ1NUC0qPH3cmBgDc91fwjYppgSm-P9A270hdmYbAkEO~81DfEQYjHcCCVemdpJ68Ct3v1tXhB1wVISNJ4pf6VCxwpEA2bPToHThbfVlP5LG9RqXx0FcFv9DLlT3t8zfm5AfmvOJUkS7MXlTh~xqbHM4FIOFevClxlYmp7ISNAOH0DhtEbKNdhF4Ut8RVcUI64~a7u5r5zlCQ__"></img>
                    </div>
                </div>
            </div>
            <div className='three'>
                <div className='addressnicon'>
                    <div className='icon'>
                        <img src={icon} style={{width : "270px", height: "200px"}}></img>
                        <div className='car'></div>
                    </div>
                    <div className='address'>
                        <h1><span className='span'>SAE</span> Collegiate Club</h1>
                        <p>Technical Assistance Centre</p>
                        <p>Mechanical engineering department</p>
                        <p>IIT (BHU)Varanasi. India</p>
                        <p>PIN: 221005</p>
                    </div>
                </div>
                <div className='icons'>
                    <h1>Socials</h1>
                        <div>
                            <a href="https://www.instagram.com/saecollegiateclubiitbhu/" >
                                <i class="fa-brands fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/SAEIITBHU/" >
                                <i class="fa-brands fa-facebook-f"></i>
                                <span> Facebook</span>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/company/sae-collegiate-club-iit-varanasi/?originalSubdomain=in" >
                                <i class="fa-brands fa-linkedin-in"></i>
                                <span> LinkedIn</span>
                            </a>
                         </div>
                        <div>
                            <a href="mailto: saecollegiateclub.iitbhu@gmail.com" >
                                <i class='bx bxl-gmail'></i>
                                <span> Email</span>
                            </a>
                        </div>
                </div>
                <div className='email'>
                    <p>Stay up to date</p>
                    <input placeholder='Your email address'></input>
                    <i class="fa-regular fa-paper-plane" onClick={action}></i>
                </div>
                <a href="#"><i className="fa-solid fa-circle-up fa-2xl"></i></a>
            </div>
        </div>
    );
}
export default body3;