import React, {useState} from "react";
import '../css/setting.css'
import {setPass} from "../../Model/Database";

function HeartAttack(props){
    const [oPass, setOldPass] = useState('')
    const [nPass, setNewPass] = useState('')
    const [rnPass, setReNewPass] = useState('')
    const oldPass = (event) => {
        setOldPass(event.target.value)
    }
    const newPass = (event) => {
        setNewPass(event.target.value)
    }
    const renewPass = (event) => {
        setReNewPass(event.target.value)
    }
    const change = (event) => {
        event.preventDefault();
        if(oPass === props.user.pass){
            if(nPass === rnPass){
                setPass(props.user.email, nPass)
            }else{
                alert("Re entered password is not same")
            }
        }else {
            alert("Wrong Password Entered")
        }
    }

    return (
        <div className="setting">
            <h1>Settings</h1>
            <h2>Change Password</h2>
            <div className="form">
                <form>
                    <div className='input-div'>
                        <h3>Old Password</h3>
                        <input type="password" className="input-ex" style={{marginLeft: "6rem"}} value={oPass} onChange={oldPass}/>
                    </div>
                    <div className='input-div' >
                        <h3>Enter new Password</h3>
                        <input type="password" className="input-ex" style={{marginLeft: "2.5rem"}} value={nPass} onChange={newPass}/>
                    </div>
                    <div className='input-div'>
                        <h3>Re-enter new password</h3>
                        <input type="password" className="input-ex" value={rnPass} onChange={renewPass}/>
                    </div>
                    <input type="submit" className="input-last" onClick={change}/>
                </form>
            </div>
        </div>
    )
}

export default HeartAttack;