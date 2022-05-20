import React, {useState} from "react";
import '../../App.css';
import '../css/HeroSection.css';


function HeroSection(props) {
    return (
        <div className='hero-container' style={{ backgroundImage:`url(${props.back})`}}>
            <h1>{props.heading}</h1>
            <p>{props.para}</p>
        </div>
    );
}

export default HeroSection
