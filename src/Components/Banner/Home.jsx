import "./Home.css";
// import video from "../../assets/web-banner-video.mp4";
// import videoCompressed from "../../assets/web-banner-video-compressed.mp4";
import homeBtn from "../../assets/home-btn.svg";
import vectBottom from "../../assets/vector-bottom.svg";
import vectTop from "../../assets/vector-bottom.svg";

function Home() {

  const videoCompressed="https://webassets.strayshot.game/newstrayshot/web-banner-video.mp4"

  return (
    <div className="home" id="Home">
      <video id="background-video" autoPlay loop playsInline muted>
        <source src={videoCompressed} type="video/mp4" />
      </video>
      <div className="overlay"></div>

      <div className="home-container">
        <div className="home-text d-flex flex-column justify-content-center align-items-center">
          <div className="row text-center">
            <p className="overlay-text-main">
              <span className="banner-color-change">BOUNTY HUNTERS WANTED!</span> <br />ADRENALINE-FUELED BATTLE <span className="mobile-home-banner-text">& HIGH-STAKES REWARDS</span>
            </p>
          </div>
          <div className="row container ">
            <p className="overlay-text text-center">
              INSTALL STRAYSHOT TO PARTICIPATE IN BETA SESSIONS
            </p>
          </div>
          <div className="row">
            <button className="download-btn">
              <a  href="https://play.strayshot.game/"
                target="_blank"
                rel="noopener noreferrer"><img src={homeBtn} alt="Download strayshot game" /></a>
            </button>
          </div>
          
        </div>
      </div>
      <div>
        <img className="vect-bottom" src={vectBottom} alt="vector line" />
      </div>
      <div>
        <img className="vect-top" src={vectTop} alt="vector line" />
      </div>
    </div>
  );
}

export default Home;
