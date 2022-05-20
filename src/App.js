import './App.css';
import Navbar from './view/components/Navbar'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './view/pages/Home.js'
import Signup from './view/pages/Signup'
import Service from "./view/pages/Services";
import Aboutus from "./view/pages/Aboutus";
import Contactus from "./view/pages/Contactus";
import Dashboard from "./view/pages/Dashboard";
import {useState, useEffect} from "react";


function App() {
    const [main_user, setMainUser] = useState({name:'',email:'',pass:'',profile:''})
    const [showNav, setNav] = useState(true)
    useEffect(()=>{
            const nav = JSON.parse(window.localStorage.getItem('navigation'))
            setNav(nav)
    }, [])
    useEffect(()=>{
        window.localStorage.setItem('navigation', JSON.stringify('nav'))
    })
    return (
        <>
            <Router his>
                {showNav && <Navbar/>}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sign-up" element={<Signup user={main_user} setNav={setNav} setMainUser={setMainUser}/>}/>
                    <Route path="/services" element={<Service/>}/>
                    <Route path="/aboutus" element={<Aboutus/>}/>
                    <Route path="/contactus" element={<Contactus/>}/>
                    <Route path="/dashboard" element={<Dashboard user={main_user} setNav={setNav}/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
