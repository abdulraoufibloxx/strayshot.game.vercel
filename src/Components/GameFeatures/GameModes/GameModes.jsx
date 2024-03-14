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

function Button({link}){
  return (
    <>
    <div className="game-modes-card-btn-container mt-3">
                      <a className="game-modes-card-cta " href={link} target="_blank" rel="noreferrer">
                        LEARN MORE{" "}
                        
                          <svg
                            className="game-modes-download-icon"
                            width="15"
                            height="16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.5 0.5C7.91421 0.5 8.25 0.835786 8.25 1.25V9.93934L11.4697 6.71967C11.7626 6.42678 12.2374 6.42678 12.5303 6.71967C12.8232 7.01256 12.8232 7.48744 12.5303 7.78033L8.03033 12.2803C7.73744 12.5732 7.26256 12.5732 6.96967 12.2803L2.46967 7.78033C2.17678 7.48744 2.17678 7.01256 2.46967 6.71967C2.76256 6.42678 3.23744 6.42678 3.53033 6.71967L6.75 9.93934V1.25C6.75 0.835786 7.08579 0.5 7.5 0.5ZM0 14.75C0 14.3358 0.335786 14 0.75 14H14.25C14.6642 14 15 14.3358 15 14.75C15 15.1642 14.6642 15.5 14.25 15.5H0.75C0.335786 15.5 0 15.1642 0 14.75Z"
                              fill="#111214"
                            />
                          </svg>
                       
                      </a>
                    </div>
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
    <div className="game-modes-container mb-4">
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
              Learn more about the Game Modes WHERE YOU’ll EXPERIENCE Your
              Bounty Hunting Journey
            </p>
          </div>
        </div>
        <div className="game-modes-card-container container justify-content-center align-items-center text-center">
          {/* carousel in mobile start  */}

          <div className="game-modes-carousel-sm">
            <div className="row">
              <Swiper
                className="swiper-custom"
                spaceBetween={2}
                slidesPerView={2}
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
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
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
                          Join forces with your team to eliminate opposing
                          teams, secure the most kills before time runs out, and
                          claim victory for your side.
                        </p>
                        <Button link="https://blog.strayshot.game/2024/03/13/mastering-coordinated-battles-in-team-deathmatch/"/>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <div className="game-modes-card mb-3 ">
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
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
                          Survive the treacherous beauty of a Tropical Island in
                          a ruthless battle royale.
                        </p>
                        <Button link="https://blog.strayshot.game/2024/03/12/rookie-league-the-starting-ground-for-strayshot/"/>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <div className="game-modes-card mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
                        <div>
                          <img
                            className="game-modes-img"
                            src={battleRoyale}
                            alt="last man standing icon"
                          />
                        </div>
                        <div>
                          <h5 className="game-modes-title mt-2 text-uppercase">
                            Extraction
                          </h5>
                        </div>
                        <p className="game-modes-description">
                          Be the last one standing in a single-elimination
                          tournament!
                        </p>
                        <Button link="https://blog.strayshot.game/2024/03/12/extraction-high-stakes-resource-gathering/"/>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <div className="game-modes-card mb-3 ">
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
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
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
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
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
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
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
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
                        <p className="game-modes-description">
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
                      <div className="d-flex flex-column justify-content-center align-items-center  text-center p-1 ">
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
          </div>

          {/* carousel in mobile end  */}

          <div className="game-modes-card-lg">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
              <div className="col">
                <div className="game-modes-card mb-3">
                  <div className="d-flex flex-column justify-content-center mt-2 align-items-center  text-center p-1 ">
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
                      Survive the treacherous beauty of a Tropical Island in a
                      ruthless battle royale.
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
                        src={battleRoyale}
                        alt="last man standing icon"
                      />
                    </div>
                    <div>
                      <h5 className="game-modes-title mt-3 text-uppercase">
                        last man standing
                      </h5>
                    </div>
                    <p className="game-modes-description">
                      Be the last one standing in a single-elimination
                      tournament!
                    </p>
                    <Button link="https://blog.strayshot.game/category/game-mode/" />
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
          </div>
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
