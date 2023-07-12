import React, { useEffect } from "react";
import './main.scss'
import img from '../../Assets/images/img.jpg';
import img2 from "../../Assets/images/img2.jpg"
import img3 from "../../Assets/images/img3.jpg"
import img4 from "../../Assets/images/img4.jpg"
import img5 from "../../Assets/images/img5.webp"
import img6 from "../../Assets/images/img6.jpg"
import img7 from "../../Assets/images/img7.jpg"
import img8 from "../../Assets/images/img8.jpg"
import img9 from "../../Assets/images/img9.jpg"
import { GrLocation } from 'react-icons/gr';
import { BsClipboardCheck } from 'react-icons/bs';

import Aos from "aos";
import 'aos/dist/aos.css';

// array nammed data

const Data = [
    {
        id: 1,
        imgSrc: img,
        destination: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis iure quo quis enim nemo, eveniet, nobis nisi qui inventore at ipsam sed corporis facere eius incidunt velit rerum esse.'
    },
    {
        id: 2,
        imgSrc: img2,
        destination: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis iure quo quis enim nemo, eveniet, nobis nisi qui inventore at ipsam sed corporis facere eius incidunt velit rerum esse.'
    },
    {
        id: 3,
        imgSrc: img3,
        destination: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis iure quo quis enim nemo, eveniet, nobis nisi qui inventore at ipsam sed corporis facere eius incidunt velit rerum esse.'
    },
    {
        id: 4,
        imgSrc: img4,
        destination: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis iure quo quis enim nemo, eveniet, nobis nisi qui inventore at ipsam sed corporis facere eius incidunt velit rerum esse.'
    },
    {
        id: 5,
        imgSrc: img5,
        destination: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis iure quo quis enim nemo, eveniet, nobis nisi qui inventore at ipsam sed corporis facere eius incidunt velit rerum esse.'
    },
    {
        id: 6,
        imgSrc: img6,
        destination: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$850',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis iure quo quis enim nemo, eveniet, nobis nisi qui inventore at ipsam sed corporis facere eius incidunt velit rerum esse.'
    },
    {
        id: 7,
        imgSrc: img7,
        destination: 'Angkor wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis iure quo quis enim nemo, eveniet, nobis nisi qui inventore at ipsam sed corporis facere eius incidunt velit rerum esse.'
    },
    {
        id: 8,
        imgSrc: img8,
        destination: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis iure quo quis enim nemo, eveniet, nobis nisi qui inventore at ipsam sed corporis facere eius incidunt velit rerum esse.'
    },
    {
        id: 9,
        imgSrc: img9,
        destination: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis iure quo quis enim nemo, eveniet, nobis nisi qui inventore at ipsam sed corporis facere eius incidunt velit rerum esse.'
    },

]




const Main =() =>{

    // scroll animation

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="main container section">
            <div data-aos="fade-right" className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">

                {
                    Data.map(({id, imgSrc, destination, location, grade, fees, description}) =>{

                        return(
                            <div data-aos="fade-up" key={id} className="singleDestination">

                                <div className="imgDiv">
                                    <img src={imgSrc} alt={destination} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destination}
                                    </h4>
                                    <span className="continent flex">
                                        <GrLocation className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>
                                                {grade}
                                                <small> +1 </small>
                                            </span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="descript">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <BsClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </section>
    )
}

export default Main;