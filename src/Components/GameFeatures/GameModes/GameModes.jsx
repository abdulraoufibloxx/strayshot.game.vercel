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
          <img className="game-modes-seperator" src={vectLine} alt="vector line" />
        </div>
        <div className="container mt-4">
          <div className="mt-5">
            <h3 className="game-modes-heading">GAME MODES</h3>
          </div>
          <div className="mb-5 mt-4">
            <p className="text-uppercase  game-modes-subtitle">
            Learn more about the Game Modes WHERE YOU’ll EXPERIENCE Your Bounty Hunting Journey
            </p>
          </div>

        </div>
        <div className="game-modes-card-container container justify-content-center align-items-center text-center">
          {/* carousel in mobile start  */}

          <div className="game-modes-carousel-sm">
          <div className="row">
           
          <Swiper
                    className="swiper-custom"
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Autoplay]}
                    loop
                    autoplay={{
                      delay: 1000, // Adjust this value to control the autoplay speed
                      disableOnInteraction: false,
                    }}
                  >

                    <SwiperSlide>
                    <div className=""> 
              <div className="game-modes-card mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 " >
                  <div>
                    <img className="game-modes-img" src={tdm} alt="team death match icon" />
                  </div>
                  <div>
                    <h5 className="game-modes-title ">TEAM DEATHMATCH</h5>
                  </div>
                  <p className="game-modes-description">
                  Join forces with your team to eliminate opposing teams, secure the most kills before time runs out, and claim victory for your side.
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
                  <div >
                    <img className="game-modes-img" src={tdm} alt="Rookie League Icon" />
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
                  <div >
                    <img className="game-modes-img" src={battleRoyale} alt="last man standing icon" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">Extraction</h5>
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
                  <div >
                    <img className="game-modes-img" src={tdm} alt="survivor league icon" />
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
                  <div >
                    <img className="game-modes-img" src={tdm} alt="clan wars icon" />
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

                <SwiperSlide>
                <div>
              <div className="game-modes-card mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div >
                    <img className="game-modes-img" src={tdm} alt="clan wars icon" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">Extraction</h5>
                  </div>
                  <p className="game-modes-description">
                  An objective-based mode that requires extracting vital resources while outsmarting the enemy squad. Locate and secure the resources, then escort them to the extraction point.
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
                  <div >
                    <img className="game-modes-img" src={tdm} alt="clan wars icon" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">Training</h5>
                  </div>
                  <p className="game-modes-description">
                  Sharpen your skills and master your arsenal in StrayShot's Training mode. Designed for players to practice techniques, test out load-outs, and prepare for competitive matches. 
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
                  <div >
                    <img className="game-modes-img" src={tdm} alt="clan wars icon" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">Tournament</h5>
                  </div>
                  <p className="game-modes-description">
                  Where legends are made. StrayShot's prestigious tournaments clash with the top contenders for glory and prizes. Climb the brackets and carve your path to the championship.
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            <div className="col">
              <div className="game-modes-card mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="mt-4">
                    <img className="game-modes-img" src={tdm} alt="team death match icon" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2">TEAM DEATHMATCH</h5>
                  </div>
                  <p className="game-modes-description">
                  Join forces with your team to eliminate opposing teams, secure the most kills before time runs out, and claim victory for your side.
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="game-modes-card mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="">
                    <img className="game-modes-img" src={tdm} alt="Rookie league icon" />
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
            <div className="col">
              <div className="game-modes-card mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="">
                    <img className="game-modes-img" src={battleRoyale} alt="last man standing icon" />
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
            <div className="col">
              <div className="game-modes-card mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center mt-4  text-center p-1 ">
                  <div className="">
                    <img className="game-modes-img" src={tdm} alt="survivor league icon" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">survivor league</h5>
                  </div>
                  <p className="game-modes-description">
                  The ultimate test for elite StrayShot players. In the Survivor League, only the best of the best fight in highly competitive ranked matches against other top players. 
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="game-modes-card">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="">
                    <img className="game-modes-img" src={tdm} alt="clan wars icon" />
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

            <div className="col">
              <div className="game-modes-card">
                <div className="d-flex flex-column justify-content-center align-items-center mt-4  text-center p-1 ">
                  <div className="">
                    <img className="game-modes-img" src={tdm} alt="clan wars icon" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">Extraction</h5>
                  </div>
                  <p className="game-modes-description">
                  An objective-based mode that requires extracting vital resources while outsmarting the enemy squad. Locate and secure the resources, then escort them to the extraction point.
                  </p>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="game-modes-card">
                <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                  <div className="">
                    <img className="game-modes-img" src={tdm} alt="clan wars icon" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">Training</h5>
                  </div>
                  <p className="game-modes-description">
                  Sharpen your skills and master your arsenal in StrayShot's Training mode. Designed for players to practice techniques, test out load-outs, and prepare for competitive matches. 
                  </p>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="game-modes-card">
                <div className="d-flex flex-column justify-content-center align-items-center  mt-4 text-center p-1 ">
                  <div className="">
                    <img className="game-modes-img" src={tdm} alt="clan wars icon" />
                  </div>
                  <div>
                    <h5 className="game-modes-title mt-2 text-uppercase">Tournament</h5>
                  </div>
                  <p className="game-modes-description">
                  Where legends are made. StrayShot's prestigious tournaments clash with the top contenders for glory and prizes. Climb the brackets and carve your path to the championship. 
                  </p>
                  <div></div>
                </div>
              </div>
            </div>

          </div>

   
          </div>
          <div className="game-modes-splash">
            <img className="game-modes-splash-img" src={splashIcon} alt="splash icon" />
          </div>

          <div className="game-modes-bottom-line">
            <img src={bottomLine} alt="vector line image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameModes;
