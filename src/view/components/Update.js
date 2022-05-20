import React from "react";
import {UpdateData} from "./Data";
import '../css/Update.css'

function Update() {

    return (
        <div className="Updates">
            {
                UpdateData.map((update, id) => {
                    return(
                        <div className="update" key={id}>
                            <img src={update.img} alt=""/>
                            <div className="noti">
                                <div style={{marginBottom:'0.5rem' }}>
                                    <span>{update.name}</span>
                                </div>
                                <div style={{marginBottom:'0.5rem' }}>
                                    <span>{update.notification}</span>
                                </div>
                                <span>{update.time}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Update;