import React, {useState, useEffect} from "react";
import '../css/Dashboard.css'
import SideBar from "../components/SideBar";
import HealthMonitoring from "../components/HealthMonitoring";
import HeartAttack from "../components/HeartAttack";
import Covid19 from "../components/Covid-19";
import ColonDisease from "../components/Colon Disease";
import RightSide from "../components/RightSide";
import {useNavigate} from 'react-router-dom'
import Settings from "../components/Settings";

function Dashboard(props){
    props.setNav(false)
    let [user, setUser] = useState(props.user)
    let navigate = useNavigate()
    useEffect(()=>{
        if(user.name === ""){
            // eslint-disable-next-line react-hooks/exhaustive-deps
            user = JSON.parse(window.localStorage.getItem('user'))
            setUser(user)
        }
    }, [])
    useEffect(()=>{
        window.localStorage.setItem('user', JSON.stringify(user))
    })
    const [selected, setSelected] = useState(0)
    let selectedChild;
    if(selected === 0){
        selectedChild = <HealthMonitoring email={user.email}/>
    }else if(selected === 1) {
        selectedChild = <HeartAttack email={user.email}/>
    }else if(selected === 2){
        selectedChild = <Covid19 email={user.email}/>
    }else if(selected === 3){
        selectedChild = <ColonDisease email={user.email}/>
    }else if(selected === 4){
        selectedChild = <Settings user={user}/>
    }else {
        props.setNav(true)
        let path = "../signup"
        navigate(path, {replace:true})
    }
    return (
        <>
            <div className="App">
                <div className="AppGlass">
                    <SideBar selected={selected} setSelected={setSelected}/>
                    {selectedChild}
                    <RightSide buffer={user.profile} user_name={user.name}/>
                </div>
            </div>
        </>
    )
}

export default Dashboard;