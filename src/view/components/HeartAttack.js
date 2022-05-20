import React, {useState} from "react";
import '../css/HealthMonitoring.css'

import HeartTable from "./HeartTable";
import {HeartData} from "./Data";
import TipCards from "./TipCards";
import {hearAttackDB} from "../../Model/Database";

function HeartAttack(props){
    const [rows, setRow] = useState([])
    hearAttackDB(props.email, setRow)
    return (
        <div className="mainDash">
            <h1 className="space">Dashboard</h1>
            <TipCards data={HeartData} detail={"Heart Attack Prevention Tips"}/>
            <HeartTable rows={rows}/>
        </div>
    )
}

export default HeartAttack;