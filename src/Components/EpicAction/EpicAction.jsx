import "./EpicAction.css";
import epicActioHeader from "../../assets/epic-action.svg";
import epicActioHeaderSm from "../../assets/epic-action-header-img-sm.png";
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
        <div className="epic-action-header d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
            <div className="row justify-content-center container">
            <img className="epic-action-header-img epic-action-header-img-lg img-fluid" src={epicActioHeader} alt="Epic Action Header SVG" />
           
        
        <div className=" epic-action-text-container">
          <p className="epic-action-text">
            In a big ocean, there's a mysterious island known as the Isle of
            Death. <br /> Bounty hunters flock there hoping to find{" "}
            <span className="underline-text">the Ultimate Prize Pool</span>{" "}
          </p>
        </div>
            </div>
            
        </div>
      </div>
      <div className="epic-img-container d-flex flex-column justify-content-center align-items-center">
        <img className="epic-img-lg" src={epicAction} alt="" />
        <img className="epic-img-sm" src={epicActionSmall} alt="" />
      </div>

      <div className="team-up-header d-flex justify-content-center align-items-center">
        <div className="row">
          <img src={teamUp} className="img-fluid teamup-header-img-lg" alt="" />
          <img className="epic-action-header-img teamup-header-img-sm img-fluid" src={epicActioHeaderSm} alt="Epic Action Header SVG" />
        </div>
      </div>
      <div className="teanm-rewards-container mt-5">
        <div class="container text-center p-4">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div class="col mb-3">
                <div className="row">
                    <img className="img" src={teamupimg} alt="" />
                </div>
                <div className="row">
                    <p className="text-heading mt-3">TEAM UP</p>
                </div>
                <div className="row ">
                    <p >Team up with friends or go solo to fight other players in an epic battle for survival. It's up to you to decide!</p>
                </div>
            </div>
            <div class="col mb-3">
            <div className="row ">
                    <img className="img" src={surviveImg} alt="" />
                </div>
                <div className="row">
                    <p className="text-heading mt-3">SURVIVE</p>
                </div>
                <div className="row ">
                    <p >Survive epic battles! Outsmart, outmaneuver, and outgun your opponents and win rewards. The power’s in your hands!</p>
                </div>
            </div>
            <div class="col mb-3">
                <div className="row ">
                    <img className="img" src={rewardsImg} alt="" />
                </div>
                <div className="row mt-3 ">
                    <p className="text-heading ">EARN REWARDS</p>
                </div>
                <div className="row">
                    <p >Win battles & earn exclusive rewards, like in-game items and unique skins.Every collectible shows how good you are!</p>
                </div></div> 
            <div class="col mb-3">
                <div className="row ">
                    <img className="img" src={sellImg} alt="" />
                </div>
                <div className="row mt-3 ">
                    <p className="text-heading">COLLECT & SELL</p>
                </div>
                <div className="row" >
                    <p>Everything you earn is yours! You can keep, sell, trade or use them to upgrade your gear. It's all up to you!</p>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpicAction;
