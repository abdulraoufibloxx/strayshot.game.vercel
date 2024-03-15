import "./GameModes.css";
import vectLine from "../../../assets/layer_2.svg";
import tdm from "../../../assets/GameModes/TDM.svg";
import safezone from "../../../assets/GameModes/SafeZone.svg";
import battleRoyale from "../../../assets/GameModes/Battle Royeale.svg";
import clanWars from "../../../assets/GameModes/ClanWars.svg";
import tutorialMap from "../../../assets/GameModes/TutorialMap.svg";
import splashIcon from "../../../assets/GameModes/GameModeSplash.svg";
import bottomLine from "../../../assets/GameModes/game-modes-bottom-line.svg";
import { Link } from 'react-router-dom';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination } from "swiper/modules";
// import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

function Button({link}){
  return (
    <>
    <Link to={link} target="_blank" rel="noreferrer" ><div className="game-modes-card-btn-container mt-2">
                      <a className="game-modes-card-cta " >
                        LEARN MORE{" "}
                        
                       
                      </a>
                    </div></Link>
    
    </>
  )
}

function GameModes() {
  const responsive = {
    mobile: {
      breakpoint: { max: 684, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className="game-modes-container mb-4" id="GameModes">
      <div className="d-flex flex-column justify-content-center align-items-center  text-center">
        <div className="row">
          <img
            className="game-modes-seperator"
            src={vectLine}
            alt="vector line"
          />
        </div>
        <div className="container mt-4">
          <div className="mt-5">
            <h3 className="game-modes-heading">GAME MODES</h3>
          </div>
          <div className="mb-5 mt-4">
            <p className="text-uppercase  game-modes-subtitle">
            Master the Island, conquer your rivals, and book your spot in the ultimate monthly tournament where only the best of the best compete.
            </p>
          </div>
        </div>
        <div className="game-modes-card-container container justify-content-center align-items-center text-center">
          {/* carousel in mobile start  */}

          
            <div className="row">
            <Swiper
                    className="swiper-custom"
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Autoplay, Pagination]}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    loop
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      992:{
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },
                    }}
                    autoplay={{
                      delay: 3000, // Adjust this value to control the autoplay speed
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                  >
                <SwiperSlide>
                  <div className="">
                    <div className="game-modes-card mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center tdm-mt text-center p-1 mt-mb">
                        <div>
                          <img
                            className="game-modes-img"
                            src={tdm}
                            alt="team death match icon"
                          />
                        </div>
                        <div>
                          <h5 className="game-modes-title ">TEAM DEATHMATCH</h5>
                        </div>
                        <p className="game-modes-description">
                        Join forces with your team to eliminate opposing teams and secure the most kills before time runs out.
                        </p>
                        <div > 
                        <Button 
                        link="https://blog.strayshot.game/2024/03/13/mastering-coordinated-battles-in-team-deathmatch/"/>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <div className="game-modes-card mb-3 ">
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 mt-mb  ">
                        <div>
                          <img
                            className="game-modes-img"
                            src={tdm}
                            alt="Rookie League Icon"
                          />
                        </div>
                        <div>
                          <h5 className="game-modes-title mt-2 text-uppercase">
                            Rookie League
                          </h5>
                        </div>
                        <p className="game-modes-description">
                        Serves as the starting point for new StrayShot players to learn the ropes and begin their ranked competitive journey.
                        </p>
                        <Button link="https://blog.strayshot.game/2024/03/12/rookie-league-the-starting-ground-for-strayshot/"/>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <div className="game-modes-card mb-3 ">
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 mt-mb ">
                        <div>
                          <img
                            className="game-modes-img"
                            src={tdm}
                            alt="survivor league icon"
                          />
                        </div>
                        <div>
                          <h5 className="game-modes-title mt-2 text-uppercase">
                            survivor league
                          </h5>
                        </div>
                        <p className="game-modes-description">
                          In the Survivor League, only the best of the best
                          fight in highly competitive ranked matches against
                          other top players.
                        </p>
                        <Button link="https://blog.strayshot.game/2024/03/12/survivor-league-the-arena-for-elite-players/"/>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <div className="game-modes-card mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 mt-mb ">
                        <div>
                          <img
                            className="game-modes-img"
                            src={tdm}
                            alt="clan wars icon"
                          />
                        </div>
                        <div>
                          <h5 className="game-modes-title mt-2 text-uppercase">
                            clan wars
                          </h5>
                        </div>
                        <p className="game-modes-description">
                          Challenge your skills and teamwork to the max in
                          collaborative battles against rival clans.
                        </p>
                        <Button link="https://blog.strayshot.game/2024/03/12/how-the-clan-system-works-within-strayshot/"/>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <div className="game-modes-card mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 mt-mb ">
                        <div>
                          <img
                            className="game-modes-img"
                            src={tdm}
                            alt="clan wars icon"
                          />
                        </div>
                        <div>
                          <h5 className="game-modes-title mt-2 text-uppercase">
                            Extraction
                          </h5>
                        </div>
                        <p className="game-modes-description">
                          An objective-based mode that requires extracting vital
                          resources while outsmarting the enemy squad.
                        </p>
                        <Button link="https://blog.strayshot.game/2024/03/12/extraction-high-stakes-resource-gathering/" />
                        <div></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <div className="game-modes-card mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 mt-mb ">
                        <div>
                          <img
                            className="game-modes-img"
                            src={tdm}
                            alt="clan wars icon"
                          />
                        </div>
                        <div>
                          <h5 className="game-modes-title mt-2 text-uppercase">
                            Training
                          </h5>
                        </div>
                        <p className="game-modes-description" style={{marginBottom:"2.4rem"}}>
                          Designed for players to practice techniques, test out
                          load-outs, and prepare for competitive matches.
                        </p>
                        <Button link="https://blog.strayshot.game/category/game-mode/" />
                        <div></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <div className="game-modes-card mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1  mt-mb">
                        <div>
                          <img
                            className="game-modes-img"
                            src={tdm}
                            alt="clan wars icon"
                          />
                        </div>
                        <div>
                          <h5 className="game-modes-title mt-2 text-uppercase">
                            Tournament
                          </h5>
                        </div>
                        <p className="game-modes-description">
                          Prove your skills against other elite hunters in a
                          knockout tournament style and claim the ultimate
                          prize.{" "}
                        </p>
                        <Button link="https://blog.strayshot.game/category/game-mode/" />
                        <div></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          

          {/* carousel in mobile end  */}



          {/* <div className="game-modes-card-lg">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
              <div className="col">
                <div className="game-modes-card mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                    <div className="mt-4">
                      <img
                        className="game-modes-img"
                        src={tdm}
                        alt="team death match icon"
                      />
                    </div>
                    <div>
                      <h5 className="game-modes-title mt-2">TEAM DEATHMATCH</h5>
                    </div>
                    <p className="game-modes-description">
                      Join forces with your team to eliminate opposing teams,
                      secure the most kills before time runs out, and claim
                      victory for your side.
                    </p>
                    <Button link="https://blog.strayshot.game/2024/03/13/mastering-coordinated-battles-in-team-deathmatch/" />
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="game-modes-card mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                    <div className="">
                      <img
                        className="game-modes-img"
                        src={tdm}
                        alt="Rookie league icon"
                      />
                    </div>
                    <div>
                      <h5 className="game-modes-title mt-2 text-uppercase">
                        Rookie League
                      </h5>
                    </div>
                    <p className="game-modes-description">
                    Serves as the starting point for new StrayShot players to learn the ropes and begin their ranked competitive journey.
                    </p>
                    <Button link="https://blog.strayshot.game/2024/03/12/rookie-league-the-starting-ground-for-strayshot/" />
                    <div></div>
                  </div>
                </div>
              </div>
              
              <div className="col">
                <div className="game-modes-card mb-3">
                  <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                    <div className="">
                      <img
                        className="game-modes-img"
                        src={tdm}
                        alt="survivor league icon"
                      />
                    </div>
                    <div>
                      <h5 className="game-modes-title mt-2 text-uppercase">
                        survivor league
                      </h5>
                    </div>
                    <p className="game-modes-description">
                      In the Survivor League, only the best of the best fight in
                      highly competitive ranked matches against other top
                      players.{" "}
                    </p>
                    <Button link="https://blog.strayshot.game/2024/03/12/survivor-league-the-arena-for-elite-players/" />
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="game-modes-card">
                  <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                    <div className="">
                      <img
                        className="game-modes-img"
                        src={tdm}
                        alt="clan wars icon"
                      />
                    </div>
                    <div>
                      <h5 className="game-modes-title mt-2 text-uppercase">
                        clan wars
                      </h5>
                    </div>
                    <p className="game-modes-description">
                      Challenge your skills and teamwork to the max in
                      collaborative battles against rival clans.
                    </p>
                    <Button link="https://blog.strayshot.game/2024/03/12/how-the-clan-system-works-within-strayshot/" />
                    <div></div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="game-modes-card">
                  <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                    <div className="">
                      <img
                        className="game-modes-img"
                        src={tdm}
                        alt="clan wars icon"
                      />
                    </div>
                    <div>
                      <h5 className="game-modes-title mt-2 text-uppercase">
                        Extraction
                      </h5>
                    </div>
                    <p className="game-modes-description">
                      An objective-based mode that requires extracting vital
                      resources while outsmarting the enemy squad.
                    </p>
                    <Button link="https://blog.strayshot.game/2024/03/12/extraction-high-stakes-resource-gathering/" />
                    <div></div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="game-modes-card">
                  <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                    <div className="">
                      <img
                        className="game-modes-img"
                        src={tdm}
                        alt="clan wars icon"
                      />
                    </div>
                    <div>
                      <h5 className="game-modes-title mt-2 text-uppercase">
                        Training
                      </h5>
                    </div>
                    <p className="game-modes-description">
                      Designed for players to practice techniques, test out
                      load-outs, and prepare for competitive matches.
                    </p>
                    <Button link="https://blog.strayshot.game/category/game-mode/" />
                    <div></div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="game-modes-card">
                  <div className="d-flex flex-column justify-content-center align-items-center mt-1 text-center p-1 ">
                    <div className="">
                      <img
                        className="game-modes-img"
                        src={tdm}
                        alt="clan wars icon"
                      />
                    </div>
                    <div>
                      <h5 className="game-modes-title mt-2 text-uppercase">
                        Tournament
                      </h5>
                    </div>
                    <p className="game-modes-description">
                      Prove your skills against other elite hunters in a
                      knockout tournament style and claim the ultimate prize.
                    </p>
                    <Button link="https://blog.strayshot.game/category/game-mode/" />
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="game-modes-splash">
            <img
              className="game-modes-splash-img"
              src={splashIcon}
              alt="splash icon"
            />
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
