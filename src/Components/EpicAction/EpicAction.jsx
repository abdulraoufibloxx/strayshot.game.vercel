import "./EpicAction.css";
import epicActioHeader from "../../assets/epic-action.svg";
// import epicActioHeaderSm from "../../assets/epic-action-header-img-sm.png";
import epicActioHeaderSm from "../../assets/TeamUpDominate-sm.svg";
import epicAction from "../../assets/epic-action.png";
import epicActionSmall from "../../assets/epic-action-img-sm.png";
import teamUp from "../../assets/Team-Up.svg";
import teamupimg from "../../assets/teamupimg.svg";
import surviveImg from "../../assets/survive.svg";
import rewardsImg from "../../assets/rewards.svg";
import sellImg from "../../assets/collect&sell.svg";

function EpicAction() {
  return (
    <div className="epic-action" id="Epic-Action">
      <div className="epic-action-container">
        <div className="container epic-container  d-flex flex-column justify-content-center align-items-center">
          {/* <img
            className="epic-action-header-img"
            src={epicActioHeader}
            alt="Epic Action Header SVG"
          /> */}
          <div className="about-strayshot-header-container">
            <h3 className="about-strayshot-header">ABOUT STRAYSHOT</h3>
          </div>

          <div className="row justify-content-center">
            <div className=" epic-action-text-container">
              {/* <p className="epic-action-text mx-auto">
          In a big ocean, there's a mysterious island known as the Isle of Death. Bounty hunters flock there hoping to find {" "}
            <span className="underline-text">the Ultimate Prize Pool</span>{" "}
          </p> */}

              <p className="epic-action-text mx-auto">
              StrayShot is a third-person shooter that throws you into a Heart-pounding battle royale actionset in stunning environments with high-quality graphics and fast-paced shooter mechanics. Suitable for both squad-based and solo play, only the strongest survive in these ruthless battlefields.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="epic-img-container container d-flex flex-column justify-content-center align-items-center">
        <img
          className="epic-img-lg"
          src="https://webassets.strayshot.game/newstrayshot/epic-action/epic-action.png"
          alt="epic action image large"
        />
        <img
          className="epic-img-sm"
          src="https://webassets.strayshot.game/newstrayshot/epic-action/epic-action-img-sm.png"
          alt="Epic Action Image Small"
        />
      </div>

      {/* team up contianer starts here */}
      {/* team up contianer ends here */}

      <div className="team-up-container mb-5 mt-5">
        <div className="team-up-header d-flex justify-content-center align-items-center"></div>
        <div className="teanm-rewards-container mt-5">
          <div
            className="container text-center pb-4 px-4"
            style={{ width: "75%" }}
          >
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
              <div className="col mb-3">
                <div className="row">
                  <img
                    className="img"
                    src="https://webassets.strayshot.game/newstrayshot/epic-action/teamupimg.svg"
                    alt="team up icon"
                  />
                </div>
                <div className="row">
                  <p className="text-heading mt-3">TEAM UP</p>
                </div>
                <div className="row ">
                  <p>
                    Team up with friends or go solo to fight other players in an
                    epic battle for survival. It's up to you to decide!
                  </p>
                </div>
              </div>
              <div className="col mb-3">
                <div className="row ">
                  <img
                    className="img"
                    src="https://webassets.strayshot.game/newstrayshot/epic-action/survive.svg"
                    alt="Survive icon"
                  />
                </div>
                <div className="row">
                  <p className="text-heading mt-3">SURVIVAL OF THE FITTEST</p>
                </div>
                <div className="row ">
                  <p>
                    Survive epic battles! Outsmart, outmaneuver, and outgun your
                    opponents. The power’s in your hands!
                  </p>
                </div>
              </div>
              <div className="col mb-3">
                <div className="row ">
                  <img
                    className="img"
                    src="https://webassets.strayshot.game/newstrayshot/epic-action/rewards.svg"
                    alt="earn rewards icon"
                  />
                </div>
                <div className="row mt-3 ">
                  <p className="text-heading ">EARN REWARDS</p>
                </div>
                <div className="row">
                  <p>
                    Win battles & earn exclusive rewards, like in-game items and
                    unique skins. Every collectible shows how good you are!
                  </p>
                </div>
              </div>
              <div className="col mb-3">
                <div className="row ">
                  <img
                    className="img"
                    src="https://webassets.strayshot.game/newstrayshot/epic-action/collect&sell.svg"
                    alt="collect and sell icon"
                  />
                </div>
                <div className="row mt-3 ">
                  <p className="text-heading">COLLECT & SELL</p>
                </div>
                <div className="row">
                  <p>
                    Everything you earn is yours! You can keep, sell, trade or
                    use them to upgrade your gear. It's all up to you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpicAction;
