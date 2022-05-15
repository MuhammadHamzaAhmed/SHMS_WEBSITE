import React, {useState} from "react";
import '../css/Signin.css'
import log from '../../images/log.svg'
import register from '../../images/register.svg'
import {SignUpData, SignInData} from "../components/Data";


function Signup(){
    const [selected, setSelected] = useState(new Date("1999-08-26T12:00:00"))
    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            {SignInData.map((data, id)=>{
                                return(
                                    <div className="input-field">
                                        {data.icon}
                                        <input type={data.type} placeholder={data.placeholder}/>
                                    </div>
                                )
                            })}
                            <input type="submit" value="Login" className="sbtn solid"/>
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            {SignUpData.map((data, id)=>{
                                return(
                                    <div className="input-field">
                                        {data.icon}
                                        <input type={data.type} placeholder={data.placeholder}/>
                                    </div>
                                )
                            })}

                            <input type="submit" className="sbtn" value="Sign up"/>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Join us now to get best quality healthcare.
                            </p>
                            <button className="sbtn transparent" onClick={()=>{
                                const container = document.querySelector('.container');
                                container.classList.add("sign-up-mode");}
                            } id="sign-up-btn">
                                Sign up
                            </button>
                        </div>
                        <img src={log} className="image" alt=""/>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us?</h3>
                            <p>
                                Login to view your current health status.
                            </p>
                            <button className="sbtn transparent" onClick={()=>{
                                const container = document.querySelector('.container');
                                container.classList.remove("sign-up-mode");}
                            } id="sign-in-btn">
                                Sign in
                            </button>
                        </div>
                        <img src={register} className="image" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;