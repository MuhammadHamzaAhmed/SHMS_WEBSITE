import React from "react";
import '../css/HealthMonitoring.css'
import Cards from "./Cards";
import BasicTable from "./Table";



function HealthMonitoring(props){
    return (
        <div className="mainDash">
            <h1 className="space">Dashboard</h1>
            <Cards email={props.email}/>
            <BasicTable email={props.email}/>
        </div>
    )
}

export default HealthMonitoring;