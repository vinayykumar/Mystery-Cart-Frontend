import "./Newsletter.scss";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from 'react-icons/fa'

const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">NewsLetter</span>
            <span className="big-text">SignUp for Latest updates and offers</span>
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <div className="text">Will be used in accordance with our Privacy Policy</div>
            <div className="social-icons">
                    <div className="icon"><FaFacebookF fontSize={14}/></div>
                    <div className="icon"><FaTwitter fontSize={14}/></div>
                    <div className="icon"><FaInstagram fontSize={14}/></div>
                    <div className="icon"><FaLinkedinIn fontSize={14}/></div>
            </div>
        </div>
    </div>
};

export default Newsletter;
