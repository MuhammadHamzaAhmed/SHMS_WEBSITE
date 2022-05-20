import React, {useState} from "react";
import '../css/Signin.css'
import log from '../../images/log.svg'
import register from '../../images/register.svg'
import {SignUpData, SignInData} from "../components/Data";
import DatePicker from "../components/DatePicker";
import RowRadioButtonsGroup from "../components/RadioButton";
import {useNavigate} from 'react-router-dom'
import {addUser, getUser} from "../../Model/Database";


function Signup(props) {
    const [date, setDate] = useState(new Date("1999-08-26T12:00:00"))
    const handleChange = (newValue) => {
        setDate(newValue);
    };
    const [email, setEmail] = useState('');
    const emailChange = (newValue) => {
        setEmail(newValue.target.value);
    };
    const [pass, setPass] = useState('')
    const passChange = (newValue) => {
        setPass(newValue.target.value);
    };

    const [gender, setGender] = useState();
    const handleGender = (newValue) => {
        setGender(newValue.target.value)
    };
    const [userName, setUserName] = useState('');
    const [sEmail, setSignEmail] = useState('');
    const [sPass, setSignPass] = useState('');
    const handleUserName = (newValue) => {
        setUserName(newValue.target.value)
    };
    const handleEmail = (newValue) => {
        setSignEmail(newValue.target.value)
    };
    const handlePass = (newValue) => {
        setSignPass(newValue.target.value)
    };

    const values = [email, pass, userName, sEmail, sPass];
    const change = [emailChange, passChange, handleUserName, handleEmail, handlePass];
    let navigate = useNavigate()

    const routeChange = () =>{
        let path = "../dashboard"
        navigate(path, {replace:true})
    }

    const login = () => {
        getUser(email, pass, props.setMainUser)
        if(props.user.name !== ''){
            props.setNav(false)
            routeChange()
        }
    }
    
    const signUP = () => {
        let dt = date.getFullYear()
        let mn = (date.getMonth()+1).toString()
        if(mn.length === 1){mn = "0"+mn}
        let dat = date.getDate().toString()
        if(dat.length === 1)(dat = "0"+dat)
        addUser(userName, sEmail, pass, dt+"-"+mn+"-"+dat, gender)
    }

    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            {SignInData.map((data, id) => {
                                return (
                                    <div className="input-field" key={id}>
                                        {data.icon}
                                        <input type={data.type} value={values[data.value]}
                                               onChange={change[data.onChange]} placeholder={data.placeholder}/>
                                    </div>
                                )
                            })}
                            <input type="submit" value="Login" className="sbtn solid" onClick={login}/>
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            {SignUpData.map((data, id) => {
                                return (
                                    <div className="input-field" key={id}>
                                        {data.icon}
                                        <input type={data.type} value={values[data.value]}
                                               onChange={change[data.onChange]} placeholder={data.placeholder}/>
                                    </div>
                                )
                            })}
                            <DatePicker value={date} change={handleChange}/>
                            <RowRadioButtonsGroup change={handleGender}/>
                            <input type="submit" className="sbtn" value="Sign up" onClick={(event) => {
                                event.preventDefault();
                                signUP();
                                setSignEmail('');
                                setUserName("")
                                setSignPass("")
                            }}/>
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
                            <button className="sbtn transparent" onClick={() => {
                                const container = document.querySelector('.container');
                                container.classList.add("sign-up-mode");
                            }
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
                            <button className="sbtn transparent" onClick={() => {
                                const container = document.querySelector('.container');
                                container.classList.remove("sign-up-mode");
                            }
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