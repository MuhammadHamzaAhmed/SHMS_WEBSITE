import React from "react";
import Service from './Service'
import '../css/Card.css'
import img_1 from '../../images/Monitoring.png'
import img_2 from '../../images/Reports.png'
import img_3 from '../../images/NewsLetter.png'
import img_4 from '../../images/Tutorial.png'
import img_5 from '../../images/Notification.png'
function Services(){
    console.log("working")
    return(
        <div className='cards'>
            <h1>Smart Health Monitoring System Services</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Service
                            src={img_1}
                            text='Monitor your health on daily basis'
                            label='Monitoring'
                            path='/Services'
                        />
                        <Service
                            src={img_2}
                            text='Get reports of your health status'
                            label='Reports'
                            path='/Services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <Service
                            src={img_3}
                            text='Get notified for daily health record'
                            label='Notification'
                            path='/Services'
                        />
                        <Service
                            src={img_4}
                            text='Join our news letter to get updates'
                            label='News Letter'
                            path='/Services'
                        />
                        <Service
                            src={img_5}
                            text='Watch Easy tutorials'
                            label='Tutorials'
                            path='/Services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;
