import "./Footer.scss";
import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from 'react-icons/fa'
import Payment from '../../assets/payments.png'

const Footer = () => {
    return <footer>
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quam blanditiis neque fugit dicta vero!</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-items">
                    <FaLocationArrow></FaLocationArrow>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div className="c-items">
                    <FaMobileAlt></FaMobileAlt>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                </div>
                <div className="c-items">
                    <FaEnvelope></FaEnvelope>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speakers</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theatre</div>
                <div className="text">Projectors</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speakers</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theatre</div>
                <div className="text">Projectors</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veritatis.
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>
};

export default Footer;
