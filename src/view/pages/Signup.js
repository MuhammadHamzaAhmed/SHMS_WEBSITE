import React from "react";
import '../css/Signin.css'
import log from '../../images/log.svg'
import register from '../../images/register.svg'

function Signup(){

    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"/>
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"/>
                                <input type="password" placeholder="Password"/>
                            </div>
                            <input type="submit" value="Login" className="sbtn solid"/>
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"/>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"/>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"/>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"/>
                                </a>
                            </div>
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"/>
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"/>
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"/>
                                <input type="password" placeholder="Password"/>
                            </div>
                            <input type="submit" className="sbtn" value="Sign up"/>
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"/>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"/>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"/>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"/>
                                </a>
                            </div>
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