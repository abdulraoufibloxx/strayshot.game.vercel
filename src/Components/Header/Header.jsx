import "./Header.css";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import navbarlogo from "../../assets/navbar-img.png";
import wishListIcon from "../../assets/wishlist.svg";
import vectBottom from "../../assets/vector-bottom.svg";
import downloadBtn from "../../assets/header-btn.svg";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

import instagramIcon from "../../assets/Footer/instagram.svg";
import discordIcon from "../../assets/Footer/discords.svg";
import telegramIcon from "../../assets/Footer/telegram.svg";
import xIcon from "../../assets/Footer/x.svg";
import facebookIcon from "../../assets/Footer/facebook.svg";
import tiktokIcon from "../../assets/Footer/tiktok.svg";
import youtubeIcon from "../../assets/Footer/youtube.svg";
import emailIcon from "../../assets/Footer/email-icon.svg";
import footerLine from "../../assets/Footer/footer-line.svg";

import { HashLink as Link } from "react-router-hash-link";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header" style={{ display: show ? "none" : "" }}>
      <nav className="navbar d-flex   justify-content-between">
        <Link to="/#Home">
          <div>
            <img className="navbar-image" src={navbarlogo} alt="navbar-image" />
          </div>
        </Link>

        <div
          className="nav-middle justify-content-between flex-wrap "
          style={{ display: "none !important" }}
        >
          <div>
            <Link to="/#Epic-Action" smooth>
              STORY
            </Link>
          </div>
          <div>
            <Link to="/#GameModes" smooth>
              GAME FEATURES
            </Link>
          </div>
          <div>
            <Link to="/#Join-Clan" smooth>
              CLANS
            </Link>
          </div>
          <div>
            <Link to="/#LeaderBoard" smooth>
              LEADERBOARDS
            </Link>
          </div>
          <div>
            <Link to="/#GameUpdates" smooth>
              UPDATES
            </Link>
          </div>
          <div>
            <Link to="/#FAQ" smooth>
              FAQS
            </Link>
          </div>
          <div>
            <Link to="https://blog.strayshot.game/" target="_blank" rel="noreferrer" smooth>
              BLOG
            </Link>
          </div>
        </div>

        <div className="nav-right  align-items-center justify-content-between">
          <div className="d-flex justify-content-between">
            <div style={{ marginRight: "5px" }}>
              <a
                href="https://store.epicgames.com/en-US/p/strayshot-2ad9a8"
                target="_blank"
                rel="noopener noreferrer"
                className="no-decoration"
              >
                WISHLIST
              </a>
            </div>
            <div>
              <a
                href="https://store.epicgames.com/en-US/p/strayshot-2ad9a8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={wishListIcon} alt="WishListIcon" />{" "}
              </a>
            </div>
          </div>

          <div>
            <button className="download-btn">
              <a
                href="https://play.strayshot.game/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={downloadBtn} className="download-btn-header" alt="download button" />
              </a>
            </button>
          </div>
        </div>

        {/* <div>
          <a href=""><img src={downloadBtn} alt="" /></a>
        </div> */}

        <div className="menu " onClick={handleShow}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        style={{ height: "80vh" }}
      >
        <Offcanvas.Header
          //   closeButton
          style={{ color: "white", backgroundColor: "black" }}
        >
          <Offcanvas.Title>
            <Link to='/#Home' onClick={handleClose}>
            <div>
              <img width={"100px"} src={navbarlogo} alt="navbar-logo" />
            </div>
            </Link>
          </Offcanvas.Title>
          <div className="d-flex align-items-center justify-content-center">
            <a href="https://play.strayshot.game/"
                target="_blank"
                rel="noopener noreferrer"><img src={downloadBtn} alt="download button" />
                </a>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
        </Offcanvas.Header>

        <Offcanvas.Body className="text-center">
          <div className="">
            <div className="row">
              <div className="mb-3">
                <Link
                  to="/#Epic-Action"
                  smooth
                  onClick={handleClose}
                  className="link-style"
                >
                  STORY
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  to="/#GameModes"
                  smooth
                  onClick={handleClose}
                  className="link-style "
                >
                  GAME FEATURES
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  to="/#Join-Clan"
                  smooth
                  onClick={handleClose}
                  className="link-style"
                >
                  CLANS
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  to="/#LeaderBoard"
                  smooth
                  onClick={handleClose}
                  className="link-style"
                >
                  LEADERBOARDS
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  to="/#GameUpdates"
                  smooth
                  onClick={handleClose}
                  className="link-style"
                >
                  UPDATES
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  to="/#FAQ"
                  smooth
                  onClick={handleClose}
                  className="link-style"
                >
                  FAQS
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  to="https://blog.strayshot.game/"
                  smooth
                  target="_blank" 
                  rel="noreferrer"
                  onClick={handleClose}
                  className="link-style"
                >
                  BLOG
                </Link>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div className="row mt-5">
                <div className="col">
                  <a href="https://instagram.com/strayshotgame" target="_blank"
                    rel="noopener noreferrer"><img src={instagramIcon} alt="instagram icon" /></a>
                </div>
                <div className="col">
                <a href="https://discord.com/invite/strayshot" target="_blank"
                    rel="noopener noreferrer"><img src={discordIcon} alt="discord icon" /></a>
                </div>
                <div className="col">
                <a href="https://t.me/StrayShot_Chatt" target="_blank"
                    rel="noopener noreferrer"><img style={{ width: "22px" }} src={telegramIcon} alt="telegram icon" /></a>
                </div>
                <div className="col">
                <a href="https://x.com/StrayShotGame" target="_blank"
                    rel="noopener noreferrer"><img  src={xIcon} alt="x icon" /></a>
                </div>
                <div className="col">
                <a href="https://m.facebook.com/groups/strayshotchat/?ref=share&mibextid=S66gvF" target="_blank"
                    rel="noopener noreferrer"><img src={facebookIcon} alt="facebook icon" /></a>
                </div>
                <div className="col">
                <a href="https://www.tiktok.com/@strayshot.game" target="_blank"
                    rel="noopener noreferrer"><img src={tiktokIcon} alt="tiktok icon" /></a>
                </div>
                <div className="col">
                <a href="https://youtube.com/@StrayShotgame" target="_blank"
                    rel="noopener noreferrer"><img src={youtubeIcon} alt="youtube icon" /></a>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div className="row  mt-4 nav-mob-footer">
                <div className="col nowrap "><Link to='/termsandconditions' onClick={() => window.scrollTo(0, 0)}> Terms &amp; Conditions</Link></div>
                {/* <div className="col">Cookies</div> */}
                <div className="col nowrap"><Link to='/privacypolicy' onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link> </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Header;
