import React from "react";
import update1 from '../../images/update1.png'
import update2 from '../../images/update2.png'
import update3 from '../../images/update3.png'

export const SidebarData = [
    {
        icon: <i className="fa fa-television" aria-hidden="true"></i>,
        heading: "Health Monitoring",
    },
    {
        icon: <i className="fa-solid fa-heart"></i>,
        heading: "Heart Attack",
    },
    {
        icon: <i className="fa-solid fa-virus-covid"></i>,
        heading: "Covid-19",
    },
    {
        icon: <i className="fa-solid fa-disease"></i>,
        heading: "Colon Disease",
    },
    {
        icon: <i className="fa-solid fa-gear"></i>,
        heading: "Settings",
    },
    {
        icon: <i className="fa-solid fa-right-from-bracket"></i>,
        heading: <a href='http://localhost:3000/'> Logout</a>,
    }
];

export const SignInData = [
    {
        icon:<i className="fas fa-user"/>,
        type:"text",
        placeholder: "Username",
        value: 0,
        onChange: 0
    },
    {
        icon:<i className="fas fa-lock"/>,
        type:"password",
        placeholder: "password",
        value: 1,
        onChange: 1
    },
]

export const SignUpData = [
    {
        icon:<i className="fas fa-user"/>,
        type:"text",
        placeholder: "Username",
        value: 2,
        onChange: 2
    },{
        icon:<i className="fas fa-envelope"/>,
        type:"email",
        placeholder: "Email",
        value: 3,
        onChange: 3
    },
    {
        icon:<i className="fas fa-lock"/>,
        type:"password",
        placeholder: "password",
        value: 4,
        onChange: 4
    },
]
export const RadioButtonData = [
    {
        value:0,
        label:"female"
    },
    {
        value:1,
        label:"male"
    },
    {
        value:2,
        label:"other"
    },
]

export const UpdateData = [
    {
        img: update1,
        name: "Bisma Imdad",
        notification: "Now user can detect COVID-19 using ECG",
        time: "3 days ago"
    },{
        img: update2,
        name: "Marwareed Rehman",
        notification: "Monitor your health once a week to maintain proper health",
        time: "5 days ago"
    },{
        img: update3,
        name: "Shahbaz Ahsan",
        notification: "Get early detection of disease using SHMS",
        time: "6 days ago"
    }
]

export const Card_Data = (row) =>{
    return [
        {
            title:"Temperature",
            cardColor: {
                background: "linear-gradient(180deg, #696969 0%, #9E9E9E 100%)",
                boxShadow: "0px 10px 20px 0px #E0C6F5"
            },
            barValue: 70,
            barText: <i className="fa-solid fa-temperature-half"></i>,
            value: row.temp,
            png: "Last Record"
        },
        {
            title:"Blood Pressure",
            cardColor: {
                background: "linear-gradient(315deg, #bb67ff 0%,#804FB3 100%)",
                boxShadow: "0px 10px 20px 0px #E0C6F5"
            },
            barValue: 70,
            barText: <i className="fa-solid fa-pump-soap"></i>,
            value: row.bp,
            png: "Last Record"
        },
        {
            title:"Heart Rate",
            cardColor: {
                background: "linear-gradient(315deg, #FF94C1 0%, #F3C069 100%)",
                boxShadow: "0px 10px 20px 0px #E0C6F5"
            },
            barValue: 70,
            barText: <i className="fa-solid fa-heart-pulse"></i>,
            value: row.hr,
            png: "Last Record"
        },
        {
            title:"Sugar",
            cardColor: {
                background: "linear-gradient(225deg, #2EAAFA 0%, #1F2F98 100%)",
                boxShadow: "0px 10px 20px 0px #E0C6F5"
            },
            barValue: 70,
            barText: <i className="fa-solid fa-cubes-stacked"></i>,
            value: row.sg,
            png: "Last Record"
        }
    ]
}

export const HeartData = [
    {
        title:"Keep check and control the cholesterol levels",
        cardColor: {
            background: "linear-gradient(225deg, #2EAAFA 0%, #1F2F98 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText: "",
        value: "1",
        png:""
    },
    {
        title:"Keep checking and control your blood pressure levels",
        cardColor: {
            background: "linear-gradient(315deg, #bb67ff 0%,#804FB3 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText: "",
        value: "2",
        png:""
    },
    {
        title:"Smoking damages the heart, quit smoking",
        cardColor: {
            background: "linear-gradient(315deg, #FF94C1 0%, #F3C069 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText: "",
        value: "3",
        png:""
    },
    {
        title:"Choose proper diet, get proper sleep and manage stress",
        cardColor: {
            background: "linear-gradient(180deg, #696969 0%, #9E9E9E 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText: "",
        value: "4",
        png:""
    }
]

export const ColonData = [
    {
        title:"Diets that include lots of vegetables, fruits, decreases risk of colon ",
        cardColor: {
            background: "linear-gradient(225deg, #2EAAFA 0%, #1F2F98 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText: "",
        value: "1",
        png:""
    },
    {
        title:"Exercise daily decrease chance of developing colorectal cancer",
        cardColor: {
            background: "linear-gradient(315deg, #bb67ff 0%,#804FB3 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText: "",
        value: "2",
        png:""
    },
    {
        title:"People who smokes for a long time have chance of colorectalcancer",
        cardColor: {
            background: "linear-gradient(315deg, #FF94C1 0%, #F3C069 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText: "",
        value: "3",
        png:""
    },
    {
        title:"Get screened for colorectal to detect cancer before symptom develop.",
        cardColor: {
            background: "linear-gradient(180deg, #696969 0%, #9E9E9E 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText: "",
        value: "4",
        png:""
    }
]

export const CovidData = [
    {
        title:"Maintain a safe distance from others (at least 1 metre)",
        cardColor: {
            background: "linear-gradient(225deg, #2EAAFA 0%, #1F2F98 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText: "",
        value: "1",
        png:""
    },
    {
        title:"Wear a mask in public and indoors where distancing is not possible.",
        cardColor: {
            background: "linear-gradient(315deg, #bb67ff 0%,#804FB3 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText: "",
        value: "2",
        png:""
    },
    {
        title:"Clean your hands often. Use soap and water, or an alcohol-based hand rub",
        cardColor: {
            background: "linear-gradient(315deg, #FF94C1 0%, #F3C069 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText: "",
        value: "3",
        png:""
    },
    {
        title:"Cover your nose and mouth with your bent elbow or a tissue when cough or sneeze.",
        cardColor: {
            background: "linear-gradient(180deg, #696969 0%, #9E9E9E 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText: "",
        value: "4",
        png:""
    }
]