import "./Banner.scss";
import BannerImg from '../../../assets/banner-img.png'

const Banner = () => {
    return <div className="hero-banner">
                <div className="content">
                    <div className="text-content">
                        <h1>SALE!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugiat, voluptatum nisi nam minus sunt.</p>
                        <div className="ctas">
                            <div className="banner-cta">Read More</div>
                            <div className="banner-cta v2">Shop Now</div>
                        </div>
                    </div>
                    <img className="banner-img" src={BannerImg} alt="Headphones" />
                </div>
            </div>;
};

export default Banner;
