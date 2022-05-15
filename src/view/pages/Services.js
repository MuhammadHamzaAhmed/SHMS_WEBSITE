import React from "react";
import HeroSection from "../components/HeroSection";
import img_1 from '../../images/Monitoring.png'
import img_2 from '../../images/Reports.png'
import img_3 from '../../images/NewsLetter.png'
import img_4 from '../../images/Tutorial.png'
import img_5 from '../../images/Notification.png'
import Footer from "../components/Footer";

function Services() {
    return (
        <>
            <HeroSection back={img_1} heading={'Monitor'} para={'Help you monitor your health'} display={true}/>
            <HeroSection back={img_2} heading={'Report'} para={'Get Daily Report of your health health'} display={false}/>
            <HeroSection back={img_3} heading={'Notification'} para={'Get notification to improve health'} display={false}/>
            <HeroSection back={img_5} heading={'News Letter'} para={'Join our news letter to get regular updates'} display={false}/>
            <HeroSection back={img_4} heading={'Tutorial'} para={'Watch step by step guide the working of smart health monitoring system'} display={false}/>
            <Footer/>
        </>
    )
}

export default Services;
