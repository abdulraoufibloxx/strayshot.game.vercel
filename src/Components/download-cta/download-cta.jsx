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
            <img className="mt-5 download-cta-header-img" src={doownloadCTAVect} alt="" />
          </div>

          <div className="container">
          <div className="mt-5 row">
            <h3 className="download-cta-heading">GET THE GAME</h3>
          </div>
          <div className="mt-5">
            <p className="text-uppercase download-cta-subtitle">
            Embark on Your Bounty-Hunting JOURNEY: Download Now and GET into a World of Adrenaline, Competition, and Rewards!
            </p>
          </div>
          <div className="mt-3 ">
            <img src={downloadBtn} alt="" />
          </div>
          </div>
        </div>
        <div className="mt-5 row donwload-cta-bottom-line">
          <img src={downloadCTABottomLine} alt="" />
        </div>

        <div className="power-hand">
          <img src={powerHand} alt="" />
        </div>

      </div>

      <div className="splash-left">
          <img src={splashIcon} alt="" />
        </div>

        <div className="splash-right">
          <img src={splashIcon} alt="" />
        </div>

    </div>
  );
}

export default downloadCta;
