import React, {useState}from "react";
import {covid19DB} from "../../Model/Database";
import TipCards from "./TipCards";
import {CovidData} from "./Data";
import HeartTable from "./HeartTable";
import '../css/HealthMonitoring.css'


function Covid19(props){
    const [rows, setRow] = useState([])
    covid19DB(props.email, setRow)
    return (
        <div className="mainDash">
            <h1 className="space">Dashboard</h1>
            <TipCards data={CovidData} detail={"COVID-19 prevention tips"}/>
            <HeartTable rows={rows}/>
        </div>
    )
}

export default Covid19;