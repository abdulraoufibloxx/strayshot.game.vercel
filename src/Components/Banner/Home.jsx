import "./Home.css";
// import video from "../../assets/web-banner-video.mp4";
import videoCompressed from "../../assets/web-banner-video-compressed.mp4";
import homeBtn from "../../assets/home-btn.svg";
import vectBottom from "../../assets/vector-bottom.svg";
import vectTop from "../../assets/vector-bottom.svg";

function Home() {
  return (
    <div className="home" id="Home">
      <video id="background-video" autoPlay loop playsinline muted>
        <source src={videoCompressed} type="video/mp4" />
      </video>
      <div className="overlay"></div>

      <div className="home-container">
        <div className="home-text d-flex flex-column justify-content-center align-items-center">
          <div className="row text-center">
            <p className="overlay-text-main">
              <span>BOUNTY HUNTERS WANTED!</span> <br />ADRENALINE-FUELED BATTLE & HIGH-STAKES REWARDS
            </p>
          </div>
          <div className="row container ">
            <p className="overlay-text text-center">
              JOIN THE OPEN BETA AND SECURE EXCLUSIVE IN-GAME REWARDS
            </p>
          </div>
          <div className="row">
            <button className="download-btn">
              <a  href="https://play.strayshot.game/"
                target="_blank"
                rel="noopener noreferrer"><img src={homeBtn} alt="Download now cta" /></a>
            </button>
          </div>
          
        </div>
      </div>
      <div>
        <img className="vect-bottom" src={vectBottom} alt="" />
      </div>
      <div>
        <img className="vect-top" src={vectTop} alt="headervectorgraphics" />
      </div>
    </div>
  );
}

export default Home;
