import React from "react";
import '../css/HealthMonitoring.css'
import Cards from "./Cards";
import BasicTable from "./Table";
import {CardData} from "./Data";


function HealthMonitoring(){

    return (
        <div className="mainDash">
            <h1 className="space">Dashboard</h1>
            <Cards CardData={CardData}/>
            <BasicTable/>
        </div>
    )
}

export default HealthMonitoring;