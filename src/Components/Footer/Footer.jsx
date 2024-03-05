import "./Footer.css";
import vectLine from "../../assets/vector-bottom.svg";
import strayshotlogo from "../../assets/navbar-img.png";
import instagramIcon from "../../assets/Footer/instagram.svg";
import discordIcon from "../../assets/Footer/discords.svg";
import xIcon from "../../assets/Footer/x.svg";
import facebookIcon from "../../assets/Footer/facebook.svg";
import tiktokIcon from "../../assets/Footer/tiktok.svg";
import youtubeIcon from "../../assets/Footer/youtube.svg";
import emailIcon from "../../assets/Footer/email-icon.svg";
import footerLine from "../../assets/Footer/footer-line.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-vect-line">
        <img src={vectLine} alt="" />
      </div>

      <div className="d-flex flex-column justify-content-between align-items-center  text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 footer-main container">
          <div className="col ">
            <div className="row footer-strayshot-logo">
              <img src={strayshotlogo} alt="" />
            </div>
            <div className="row gx-0 footer-socials-logo mt-3 ">
              <div className="col-1 footer-social">
                <a href="https://www.instagram.com/strayshotgame/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="" /></a>
              </div>
              <div className="col-1 footer-social">
                <a href="https://discord.com/invite/Strayshot" target="_blank" rel="noopener noreferrer"> <img src={discordIcon} alt="" /> </a>
              </div>
              <div className="col-1 footer-social">
               <a href="https://twitter.com/StrayShotGame" target="_blank" rel="noopener noreferrer">  <img src={xIcon} alt="" /> </a>
              </div>
              <div className="col-1 footer-social">
                <a href="https://www.facebook.com/groups/strayshotchathttps://www.facebook.com/groups/strayshotchat" target="_blank" rel="noopener noreferrer"> <img src={facebookIcon} alt="" /></a>
              </div>
              <div className="col-1 footer-social">
                <a href="https://www.tiktok.com/@strayshot.game" target="_blank" rel="noopener noreferrer"> <img src={tiktokIcon} alt="" /></a>
              </div>
              <div className="col-1 footer-social">
                <a href="https://www.youtube.com/@StrayShotgame" target="_blank" rel="noopener noreferrer"> <img src={youtubeIcon} alt="" /></a>
              </div>
            </div>
            <div className="row mt-4 text-start">
              <a className="mb-0 footer-text" href="mailto:info@ibloxx.com" target="_blank" rel="nofollow noreferrer">
                {" "}
                <span>
                  <img src={emailIcon} alt="" />
                </span>{" "}
                info@ibloxx.com
              </a>
            </div>
            <div className="row text-start mt-2">
              <a className="footer-text" href="mailto:info@strayshot.game.com" target="_blank" rel="nofollow noreferrer">
                {" "}
                <span>
                  <img src={emailIcon} alt="" />
                </span>{" "}
                info@strayshot.game
              </a>
            </div>
          </div>

          <div className="col text-start mbc-3">
            <div className="row">
              <p className="text-uppercase footer-heading">
                Strayshot inc
              </p>
            </div>
            <div className="row">
              <p className="footer-text mt-2 mb-0">Intershore Chambers</p>
            </div>
            <div className="row">
              <p className="footer-text   mb-0">Road Town</p>
            </div>
            <div className="row">
              <p className="footer-text  mb-0">Tortola</p>
            </div>
            <div className="row">
              <p className="footer-text  mb-0">British Virgin Islands</p>
            </div>
          </div>
          <div className="col text-start mbc-3">
            <div className="row">
              <p className="text-uppercase footer-heading">
                ibloxx studios dmcc
              </p>
            </div>
            <div className="row">
              <p className="mt-2 footer-text">
                JLT-Jumeirah Bay X3, Office 3706 <br /> Phone: +971 458 202 38
              </p>
            </div>
          </div>
          <div className="col text-start">
            <div className="row">
              <p className="text-uppercase footer-heading">strayshot</p>
            </div>
            <div className="row">
              <Link to="/termsandconditions" onClick={() => window.scrollTo(0, 0)} className="mt-2 footer-text">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="footer-line">
          <img src={footerLine} alt="" />
        </div>

        <div class="footer-bottom container">
    <div class="row container">
        <div class="col-md-6 d-flex justify-content-start text-start footer-copyright">
            <p className="strayshot-reserved">&copy; {new Date().getFullYear()} Strayshot. All rights reserved. By iBLOXX Studios DMCC</p>
        </div>
        <div class="col-md-6 d-flex footer-links-terms footer-copyright justify-custom-footer">
            <div className="footer-link-item">
                <Link to="/termsandconditions" onClick={() => window.scrollTo(0, 0)}>Terms & Conditions</Link>
            </div>
            
            <div className="footer-link-item">
                <Link to="/privacypolicy/#PrivacyPolicy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link>
            </div>
        </div>
    </div>
</div>

      </div>
    </footer>
  );
}

export default Footer;
