import React from 'react'
import {Button} from "./Button";
import '../css/Footer.css'
import {Link} from "react-router-dom";
import logo from "../../images/logo.png"
function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Join the SHMS newsletter to receive new updates</p>
                <p className="footer-subscription-text">You can unsubscribe at any time.</p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/contactus">Contact</Link>
                        <Link to="/contactus">Support</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>News and Info</h2>
                        <Link to="/">News Letter</Link>
                        <Link to="/">Latest Update</Link>
                        <Link to="/">New Products</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            SHMS <img src={logo} alt=""/>
                        </Link>
                    </div>
                    <small className='website-rights'>SHMS © 2021</small>
                    <div className="social-icons">
                        <Link to='/' className="social-icon-link facebook" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link to='/' className="social-icon-link instagram" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link to='/' className="social-icon-link youtube" target="_blank" aria-label="Youtube">
                            <i className="fab fa-youtube"/>
                        </Link>
                        <Link to='/' className="social-icon-link twitter" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"/>
                        </Link>
                        <Link to='/' className="social-icon-link linkedin" target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
