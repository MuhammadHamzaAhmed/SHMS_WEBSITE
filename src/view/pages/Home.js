import '../../App.js'
import HeroSection from '../components/HeroSection'
import Services from "../components/Services";
import Footer from "../components/Footer"
import background from "../../images/Background.jpg";

function Home() {
    return (
        <>
            <HeroSection back={background} heading={'Smart Health Monitoring'} para={'Help you monitor your health'} state={true}/>
            <Services/>
            <Footer/>
        </>
    )
}

export default Home;
