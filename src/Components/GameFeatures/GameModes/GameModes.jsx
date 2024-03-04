import "./GameModes.css";
import vectLine from "../../../assets/layer_2.svg";
import tdm from "../../../assets/GameModes/TDM.svg";
import safezone from "../../../assets/GameModes/SafeZone.svg";
import battleRoyale from "../../../assets/GameModes/Battle Royeale.svg";
import clanWars from "../../../assets/GameModes/ClanWars.svg";
import tutorialMap from "../../../assets/GameModes/TutorialMap.svg";
import splashIcon from "../../../assets/GameModes/GameModeSplash.svg";
import bottomLine from "../../../assets/GameModes/game-modes-bottom-line.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

function GameModes() {
  const responsive = {
    mobile: {
      breakpoint: { max: 684, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    },
  };

  return (
    <div className="game-modes-container mb-4">
      <div className="d-flex flex-column justify-content-center align-items-center  text-center">
        <div className="row">
          <img className="game-modes-seperator" src={vectLine} alt="" />
        </div>
        <div className="container">
          <div className="mt-5">
            <h3 className="game-modes-heading">GAME MODES</h3>
          </div>
          <div className="mt-3">
            <p className="text-uppercase  game-modes-subtitle">
            Learn more about the Game Modes WHERE YOU’ll EXPERIENCE Your Bounty Hunting Journey
            </p>
          </div>

        </div>
        <div className="game-modes-card-container mt-5 container justify-content-center align-items-center text-center">
          {/* carousel in mobile start  */}

          <div className="game-modes-carousel-sm">
          <div className="row">
           
          <Swiper
                    className="swiper-custom"
                    spaceBetween={10}
                    slidesPerView={2}
                    modules={[Autoplay]}
                    loop
                    // autoplay={{
                    //   delay: 1000, // Adjust this value to control the autoplay speed
                    //   disableOnInteraction: false,
                    // }}
                  >

                    <SwiperSlide>
                    <div className=""> 
              <div className="game-modes-card mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 " >
                  <div className="mt-5">
                    <img className="game-modes-img" src={tdm} alt="" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2">TEAM DEATHMATCH</h5>
                  </div>
                  <p className="game-modes-description">
                  Fight other players in a free-for-all battle. Try to kill as many other players as you can before the timer runs out.
                  </p>
                  <div></div>
                </div>
              </div>
              </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div>
              <div className="game-modes-card mb-3 ">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="mt-5">
                    <img className="game-modes-img" src={tdm} alt="" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">Rookie League</h5>
                  </div>
                  <p className="game-modes-description">
                  Survive the treacherous beauty of a Tropical Island in a ruthless battle royale.
                  </p>
                  <div></div>
                </div>
              </div>
              </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div>
              <div className="game-modes-card mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="mt-5">
                    <img className="game-modes-img" src={battleRoyale} alt="" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">last man standing</h5>
                  </div>
                  <p className="game-modes-description">
                  Be the last one standing in a single-elimination tournament! 
                  </p>
                  <div></div>
                </div>
              </div>
              </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div><div className="game-modes-card mb-3 ">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="mt-5">
                    <img className="game-modes-img" src={tdm} alt="" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">survivor league</h5>
                  </div>
                  <p className="game-modes-description">
                  Put your skills to the ultimate test in a series of high-stakes battles
                  </p>
                  <div></div>
                </div>
              </div></div>
                    </SwiperSlide>
                

                <SwiperSlide>
                <div>
              <div className="game-modes-card mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="mt-5">
                    <img className="game-modes-img" src={tdm} alt="" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">clan wars</h5>
                  </div>
                  <p className="game-modes-description">
                  Challenge your skills and teamwork to the max in collaborative battles against rival clans.
                  </p>
                  <div></div>
                </div>
              </div>
              </div>
                </SwiperSlide>

                  </Swiper>
            
          </div>
          </div>

          {/* carousel in mobile end  */}

          <div className="game-modes-card-lg">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 ">
            <div class="col">
              <div className="game-modes-card mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="mt-5">
                    <img className="game-modes-img" src={tdm} alt="" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2">TEAM DEATHMATCH</h5>
                  </div>
                  <p className="game-modes-description">
                  Fight other players in a free-for-all battle. Try to kill as many other players as you can before the timer runs out.
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="game-modes-card mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="mt-5">
                    <img className="game-modes-img" src={tdm} alt="" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">Rookie League</h5>
                  </div>
                  <p className="game-modes-description">
                  Survive the treacherous beauty of a Tropical Island in a ruthless battle royale.
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="game-modes-card mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="mt-5">
                    <img className="game-modes-img" src={battleRoyale} alt="" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-3 text-uppercase">last man standing</h5>
                  </div>
                  <p className="game-modes-description">
                  Be the last one standing in a single-elimination tournament! 
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="game-modes-card">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="mt-5">
                    <img className="game-modes-img" src={tdm} alt="" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">survivor league</h5>
                  </div>
                  <p className="game-modes-description">
                  Put your skills to the ultimate test in a series of high-stakes battles
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="game-modes-card">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="mt-5">
                    <img className="game-modes-img" src={tdm} alt="" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">clan wars</h5>
                  </div>
                  <p className="game-modes-description">
                  Challenge your skills and teamwork to the max in collaborative battles against rival clans.
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="game-modes-splash">
            <img className="game-modes-splash-img" src={splashIcon} alt="" />
          </div>

          <div className="game-modes-bottom-line">
            <img src={bottomLine} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameModes;
