import Axios from "axios";
import User from "./User";

const host = 'https://shms-web.herokuapp.com/'

export const getUser = (email, pass, setMainUser) => {
    const url = host+'login?email='+email+'&pass='+pass
    Axios.get(url).then((response) => {
        if(response.data.length !== 0){
            const name = response.data[0].name
            const user = new User(name, email, pass, "")
            setMainUser(user)
        }else {
            alert("Wrong Credentials")
        }
    }).catch((error) => {
        console.log(error)
    });
}

export const addUser=(name, email, pass, date, gender)=>{
    let date_s = ""+date.getFullYear()
    const mon = (date.getMonth()+1).toString()
    const month = (mon.length === 1)?"0"+mon:mon;
    date_s = date_s + "-" + month + "-"
    let dat = date.getDate().toString()
    dat = (dat.length === 1)?"0"+dat:dat;
    date_s = date_s+dat
    const url = host+'user?email='+email+'&name='+name+'&pass='+pass+'&gender='+gender+'&date='+date_s
    Axios.post(url).then(()=>{
        alert("successfully account created")
    })
}

function createData(dt, temp, bp, hr, sg) {
    return {dt, temp, bp, hr, sg};
}
function createHeartData(date, result, sug) {
    return {date, result, sug};
}

export const healthMonitoringDB = (email, setRow) =>{
    const url = host + 'healthMonitorTable?email='+email
    Axios.get(url).then((res)=>{
        const row = []
        for(let i=0;i<10;i++){
            if(i < res.data.length){
                const {date, bloodpressure, temperature, heartrate, sugar} = res.data[i];

                row.push(createData(date.toString().split("T")[0], temperature, bloodpressure, heartrate, sugar))
            }else
                row.push(createData("--", "--", "--", "--", "--"))
        }
        setRow(row)
    })
}

export const healthMonitoringCard = (email, setRow) =>{
    const url = host + 'healthMonitorTable?email='+email
    Axios.get(url).then((res)=>{
        if(res.data.length >= 1){
            const {date, bloodpressure, temperature, heartrate, sugar} = res.data[0];
            setRow(createData(date, temperature, bloodpressure, heartrate, sugar))
        }
    })
}

export const hearAttackDB= (email, setRow) =>{
    const url = host + 'heartTable?email='+email
    const row = []
    Axios.get(url).then((res)=>{
        for(let i=0;i<8;i++){
            if(i < res.data.length){
                const {date, result, sug} = res.data[i];
                row.push(createHeartData(date.toString().split("T")[0], result===0?"Not Detected":"Detected", sug))
            }else
                row.push(createHeartData("--", "--", "--"))
        }
        setRow(row)
    })
}

function getResult(res){
    if(res === 0)
        return "Normal"
}

export const colonDiseaseDB=(email, setRow) =>{
    const url = host + 'colonDisease?email='+email
    const row = []
    Axios.get(url).then((res)=>{
        for(let i=0;i<8;i++){
            if(i < res.data.length){
                const {date, result, sug} = res.data[i];
                row.push(createHeartData(date.toString().split("T")[0], getResult(result), sug))
            }else
                row.push(createHeartData("--", "--", "--"))
        }
        setRow(row)
    })
}

export const covid19DB=(email, setRow) =>{
    const url = host + 'covid19?email='+email
    const row = []
    Axios.get(url).then((res)=>{
        for(let i=0;i<8;i++){
            if(i < res.data.length){
                const {date, result, sug} = res.data[i];
                row.push(createHeartData(date.toString().split("T")[0], getResult(result), sug))
            }else
                row.push(createHeartData("--", "--", "--"))
        }
        setRow(row)
    })
}

export const setPass = ((email, pass) => {
    const url = host+'setPass?email='+email+'&pass='+pass
    Axios.post(url).then((res)=>{
        alert("PasswordChanged")
    })
})