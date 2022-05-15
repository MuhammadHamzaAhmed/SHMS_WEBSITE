import React from "react";
import '../css/SideBar.css'
import Logo from '../../images/logo3x.png'
import {SidebarData} from "./Data";


function SideBar(param){

    return (
        <div className="SideBar">
            <div className="logo">
                <img src={Logo} alt=""/>
                <span>S<span>HM</span>S</span>
            </div>
            <div className="menu">
                {SidebarData.map((item, index)=>{
                    return(
                        <div className={param.selected===index?"menuItem active":"menuItem"}
                             key={index}
                             onClick={() => param.setSelected(index)}
                        >
                            {item.icon}
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SideBar;