import "./download-cta.css";
import doownloadCTAVect from "../../assets/DownloadCTA/download-cta-mb.svg";
import downloadBtn from "../../assets/home-btn.svg";
import downloadCTABottomLine from "../../assets/Faq/bottom-line.svg";
import powerHand from "../../assets/DownloadCTA/powerhand-img.png";
import splashIcon from "../../assets/GameModes/GameModeSplash.svg";

function downloadCta() {
  return (
    <div className="download-cta-container">
      <div className="d-flex download-cta-inner-container flex-column justify-content-center align-items-center  text-center">
        <div className="download-cta-text-container">
          <div className="row justify-content-center " >
            <img className="mt-5 download-cta-header-img" src={doownloadCTAVect} alt="downlaod vector line" />
          </div>

          <div className="container">
          <div className="row my-3">
            <h3 className="download-cta-heading">GET THE GAME</h3>
          </div>
          <div>
            <p className="text-uppercase download-cta-subtitle">
            Embark on Your Bounty-Hunting JOURNEY: Download Now and GET into a World of Adrenaline, Competition, and Rewards!
            </p>
          </div>
          <div className="mt-4 ">
          <a href="https://play.strayshot.game/" target="_blank" rel="noopener noreferrer"> <img src={downloadBtn} alt="stray shot download" /></a>
          </div>
          </div>
        </div>
        <div className="mt-5 row donwload-cta-bottom-line">
           <img src={downloadCTABottomLine} alt="vector line" />
        </div>

        <div className="power-hand">
          <img src={powerHand} alt="hand vector image" />
        </div>

      </div>

      <div className="splash-left">
          <img src={splashIcon} alt="splash left image" />
        </div>

        <div className="splash-right">
          <img src={splashIcon} alt="splash right image" />
        </div>

    </div>
  );
}

export default downloadCta;
