import React, {useState} from "react";
import '../css/Dashboard.css'
import SideBar from "../components/SideBar";
import HealthMonitoring from "../components/HealthMonitoring";
import HeartAttack from "../components/HeartAttack";
import Diabetes from "../components/Diabetes";
import Ulcer from "../components/Ulcer";

function Dashboard(){
    const [selected, setSelected] = useState(0)
    var selectedChild;
    if(selected === 0){
        selectedChild = <HealthMonitoring/>
    }else if(selected === 1) {
        selectedChild = <HeartAttack/>
    }else if(selected === 2){
        selectedChild = <Diabetes/>
    }else{
        selectedChild = <Ulcer/>
    }
    return (
        <>
            <div className="App">
                <div className="AppGlass">
                    <SideBar selected={selected} setSelected={setSelected}/>
                    {selectedChild}
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;