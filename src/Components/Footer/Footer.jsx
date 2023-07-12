import React, { useEffect } from "react";
import './footer.scss';
import './footer.css';
import video2 from '../../Assets/images/video2.mp4';
import { BsFillSendFill } from'react-icons/bs';
import { MdTravelExplore } from'react-icons/md';
import { BsTwitter } from'react-icons/bs';
import { AiFillYoutube, AiFillInstagram } from'react-icons/ai';
import { BiLogoFacebook, BiLogoTripAdvisor } from'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';

import Aos from "aos";
import 'aos/dist/aos.css';

const Footer =() =>{


    // scroll animation

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div data-aos="fade-up" className="inputDiv flex">
                        <input type="text" placeholder="Enter Email Address"/>
                        <button className="btn flex" type="submit">
                           SEND <BsFillSendFill className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div data-aos="fade-up" className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdTravelExplore className="icon"/> Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cupiditate aperiam nihil saepe! Praesentium voluptates est doloribus nobis quibusdam dolor explicabo, repellat fuga perspiciatis vero odit eligendi ut culpa sed?
                        </div>

                        <div data-aos="fade-up" className="footerSocials">
                            <BsTwitter className="icon"/>
                            <AiFillYoutube className='icon'/>
                            <AiFillInstagram className='icon'/>
                            <BiLogoFacebook className='icon'/>
                            <BiLogoTripAdvisor className='icon'/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* gp 1 */}
                        <div data-aos="fade-up" data-aos-duration='4000' className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                Services
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                Agency
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                Payment
                            </li>
                        </div>

                        {/* gp 2 */}
                        <div data-aos="fade-up" data-aos-duration='4000' className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                RentCars
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                HostelWorld
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                TripAdvisor
                            </li>
                        </div>

                        {/* gp 3 */}
                        <div data-aos="fade-up"  data-aos-duration='4000' className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                London
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                Paris
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                MontReal
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                New York
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' />
                                Dakar
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>CORYRIGHTS RESERVED - FOUNAGHE 2023</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;