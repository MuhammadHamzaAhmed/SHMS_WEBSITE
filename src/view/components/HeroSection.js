import React, {useState} from "react";
import '../../App.css';
import {Button} from "./Button";
import '../css/HeroSection.css';


function HeroSection(props) {
    const button = useState(props.display)
    return (
        <div className='hero-container' style={{ backgroundImage:`url(${props.back})`}}>
            <h1>{props.heading}</h1>
            <p>{props.para}</p>
        </div>
    );
}

export default HeroSection
