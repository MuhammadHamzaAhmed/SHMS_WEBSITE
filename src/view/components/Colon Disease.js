import React, {useState} from "react";
import TipCards from "./TipCards";
import {ColonData} from "./Data";
import HeartTable from "./HeartTable";
import {colonDiseaseDB} from "../../Model/Database";
import '../css/HealthMonitoring.css'

function ColonDisease(props){
    const [rows, setRow] = useState([])
    colonDiseaseDB(props.email, setRow)
    return (
        <div className="mainDash">
            <h1 className="space">Dashboard</h1>
            <TipCards data={ColonData} detail={"Colon Diseases prevention tips"}/>
            <HeartTable rows={rows}/>
        </div>
    )
}

export default ColonDisease;