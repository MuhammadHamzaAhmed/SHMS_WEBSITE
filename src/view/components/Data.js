import React from "react";

export const SidebarData = [
    {
        icon: <i className="fa fa-television" aria-hidden="true"></i>,
        heading: "Health Monitoring",
    },
    {
        icon: <i className="fa fa-television" aria-hidden="true"></i>,
        heading: "Heart Attack",
    },
    {
        icon: <i className="fa fa-television" aria-hidden="true"></i>,
        heading: "Diabetes",
    },
    {
        icon: <i className="fa fa-television" aria-hidden="true"></i>,
        heading: "Tonsil ",
    },
];

export const CardData= [
    {
        title:"Temperature",
        cardColor: {
            background: "linear-gradient(180deg, #696969 0%, #9E9E9E 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText:<i className="fa fa-television" aria-hidden="true"></i>,
        value: "98˚F",
        png: ""
    },
    {
        title:"Blood Pressure",
        cardColor: {
            background: "linear-gradient(315deg, #bb67ff 0%,#804FB3 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText:<i className="fa fa-television" aria-hidden="true"></i>,
        value: "98˚F",
        png: ""
    },
    {
        title:"Heart Rate",
        cardColor: {
            background: "linear-gradient(315deg, #FF94C1 0%, #F3C069 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText:<i className="fa fa-television" aria-hidden="true"></i>,
        value: "98˚F",
        png: ""
    },
    {
        title:"Sugar",
        cardColor: {
            background: "linear-gradient(225deg, #2EAAFA 0%, #1F2F98 100%)",
            boxShadow: "0px 10px 20px 0px #E0C6F5"
        },
        barValue: 70,
        barText:<i className="fa fa-television" aria-hidden="true"></i>,
        value: "98˚F",
        png: ""
    }
]

export const SignInData = [
    {
        icon:<i className="fas fa-user"/>,
        type:"text",
        placeholder: "Username"
    },
    {
        icon:<i className="fas fa-lock"/>,
        type:"password",
        placeholder: "password"
    },
]

export const SignUpData = [
    {
        icon:<i className="fas fa-user"/>,
        type:"text",
        placeholder: "Username"
    },{
        icon:<i className="fas fa-envelope"/>,
        type:"email",
        placeholder: "Email"
    },
    {
        icon:<i className="fas fa-lock"/>,
        type:"password",
        placeholder: "password"
    },
]