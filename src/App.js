import './App.css';
import Navbar from './view/components/Navbar'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './view/pages/Home.js'
import Signup from './view/pages/Signup'
import Service from "./view/pages/Services";
import Aboutus from "./view/pages/Aboutus";
import Contactus from "./view/pages/Contactus";

function App() {
  return (
      <>
          <Router>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/sign-up" element={<Signup/>}/>
                  <Route path="/services" element={<Service/>}/>
                  <Route path="/aboutus" element={<Aboutus/>}/>
                  <Route path="/contactus" element={<Contactus/>}/>
              </Routes>
          </Router>
      </>
  );
}

export default App;
