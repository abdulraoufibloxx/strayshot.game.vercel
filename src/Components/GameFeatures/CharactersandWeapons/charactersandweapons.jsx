import "./charactersandweapons.css";
import char1 from "../../../assets/characters&weapons/character-1.png";
import bgVect from "../../../assets/characters&weapons/background-vector.svg";
import splashIcon from "../../../assets/GameModes/GameModeSplash.svg";

import imgLine from "../../../assets/GameUpdates/image-line.svg";

import sam from "../../../assets/characters&weapons/sam.svg";
import kane from "../../../assets/characters&weapons/kane.png";
import hector from "../../../assets/characters&weapons/hector.png";
import duke from "../../../assets/characters&weapons/duke.svg";
import jack from "../../../assets/characters&weapons/jack.png";

import grenadeLauncher from "../../../assets/characters&weapons/grenade-launcher.png";
import assaultRifle from "../../../assets/characters&weapons/assault-riffle.png";
import pistol from "../../../assets/characters&weapons/pistol.png";
import sniper from "../../../assets/characters&weapons/sniper.png";
import rocketLauncher from "../../../assets/characters&weapons/rocket-launcher.png";
import shotgun from "../../../assets/characters&weapons/shotgun.png";
import revolver from "../../../assets/characters&weapons/revolver.png";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

function CharactersandWeapons() {
  const responsive = {
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="charactersandweapons-container my-5">
      <div className="d-flex flex-column justify-content-center  align-items-center text-center ">
        <div className="game-modes-text-container container mb-5">
          <div className="mt-5">
            <h3 className="game-modes-heading">CHARACTERS & WEAPONS</h3>
          </div>

          <div className="mb-5 mt-4">
            <p className="text-center text-uppercase game-modes-description characters-and-weapons-header">
              Your arsenal is your identity. Choose wisely, and show other hunters what you're made of on the battlefield
            </p>
          </div>
        </div>

        <div className="character-card-container container-fluid">
          {/* Tab starts here */}
          <div className="row  character-inner-container  justify-content-center">
            <Tabs
              defaultActiveKey="characters"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="characters" title="CHARACTERS">
                <div className="character-card-lg container mx-auto">
                  <Swiper
                    className="swiper-custom"
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Autoplay, Pagination]}
                    pagination={{
                      clickable: true,
                    }}
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
                      992: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }}
                    autoplay={{
                      delay: 3000, // Adjust this value to control the autoplay speed
                      disableOnInteraction: false,
                    }}
                  >
                    <div>
                      <SwiperSlide>
                        <div className="card">
                          <div className="char-img-contianer">
                            <img
                              src="https://webassets.strayshot.game/newstrayshot/character/sam.svg"
                              class="card-img-top"
                              alt="character-1"
                            />

                            <div className="img-line-container">
                              <img src={imgLine} alt="image vector line" />
                            </div>
                          </div>
                          <div class="card-body c-and-w-body">
                            <h5 class="card-title text-start">SAM</h5>
                            <p class="card-text text-start">
                              Behind Sam's cool gaze is a master strategist. He
                              reads the battlefield like a book, turning data
                              into winning plays. 
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card">
                          <div className="char-img-contianer">
                            <img
                              src="https://webassets.strayshot.game/newstrayshot/character/kane.svg"
                              class="card-img-top"
                              alt="character-1"
                            />

                            <div className="img-line-container">
                              <img src={imgLine} alt="image vector line" />
                            </div>
                          </div>
                          <div class="card-body c-and-w-body">
                            <h5 class="card-title text-start">KANE</h5>
                            <p class="card-text text-start">
                              Kane stands firm on the battlefield as a heavy
                              juggernaut dishing - and absorbing - extreme
                              damage. One look at his face tells you he's here
                              to crush anyone in his way. 
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card">
                          <div className="char-img-contianer">
                            <img
                              src="https://webassets.strayshot.game/newstrayshot/character/hector.svg"
                              class="card-img-top"
                              alt="character-1"
                            />

                            <div className="img-line-container">
                              <img src={imgLine} alt="image vector line" />
                            </div>
                          </div>
                          <div class="card-body c-and-w-body">
                            <h5 class="card-title text-start">HECTOR</h5>
                            <p class="card-text text-start">
                              Wild and fiery, Hector charges in with his massive
                              weapons, leaving enemies in smoldering ruins. No
                              wonder they call him the Demolisher - he's a
                              one-man wrecking crew. 
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card">
                          <div className="char-img-contianer">
                            <img
                              src="https://webassets.strayshot.game/newstrayshot/character/duke.svg"
                              class="card-img-top"
                              alt="character-1"
                            />

                            <div className="img-line-container">
                              <img src={imgLine} alt="image vector line" />
                            </div>
                          </div>
                          <div class="card-body c-and-w-body">
                            <h5 class="card-title text-start">DUKE</h5>
                            <p class="card-text text-start">
                              Duke's suit blends with the shadows, making him a
                              ghost on the battlefield. He warps through walls,
                              strikes silently, and eliminates enemies before
                              they know what hit them.
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </Tab>

              <Tab eventKey="profile" title="WEAPONS">
                <div className="weapon-container-lg container">
                  <Swiper
                    className="swiper-custom"
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Autoplay, Pagination]}
                    pagination={{
                      clickable: true,
                    }}
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
                      992: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },
                    }}
                    autoplay={{
                      delay: 3000, // Adjust this value to control the autoplay speed
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide>
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src="https://webassets.strayshot.game/newstrayshot/weapons/grenade-launcher.svg"
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container-weapon">
                            <img src={imgLine} alt="image vector line" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            Grenade Launcher
                          </h5>
                          <p className="weapon-description text-start">
                            Bring explosive mayhem to the fight with the grenade
                            launcher, raining down destruction on enemy
                            positions and turning the tide of battle in your
                            favour.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src="https://webassets.strayshot.game/newstrayshot/weapons/assault-rifle.svg"
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container-weapon">
                            <img src={imgLine} alt="image vector line" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            ASSAULT RIFLE
                          </h5>
                          <p className="weapon-description text-start">
                            The assault rifle is a versatile workhorse. Its
                            steady stream of bullets shreds through opponents,
                            making it a reliable companion for conquering your
                            battlefield objectives.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src="https://webassets.strayshot.game/newstrayshot/weapons/pistol.svg"
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container-weapon">
                            <img src={imgLine} alt="image vector line" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            Pistol
                          </h5>
                          <p className="weapon-description text-start">
                            The pistol is your trusty sidearm. Use it for
                            unexpected close encounters. Its compact size and
                            rapid firing rate are ideal for eliminating enemies
                            in tight spaces.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src="https://webassets.strayshot.game/newstrayshot/weapons/sniper.svg"
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container-weapon">
                            <img src={imgLine} alt="image vector line" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            sniper
                          </h5>
                          <p className="weapon-description text-start">
                            The sniper rifle offers unparalleled precision at
                            long distances for those who prefer a more strategic
                            approach. Take down enemies from afar and
                            unsuspecting angles
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src="https://webassets.strayshot.game/newstrayshot/weapons/rocket-launcher.svg"
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container-weapon">
                            <img src={imgLine} alt="image vector line" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            Rocket launcher
                          </h5>
                          <p className="weapon-description text-start">
                            When brute force is needed, the rocket launcher
                            delivers nothing but destruction. Flush out an
                            entire camp of enemies with just a single launch.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src="https://webassets.strayshot.game/newstrayshot/weapons/shotgun.svg"
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container-weapon">
                            <img src={imgLine} alt="image vector line" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            Shot gun
                          </h5>
                          <p className="weapon-description text-start">
                            Get up close and personal with the shotgun,
                            delivering devastating blasts that send enemies
                            flying and leave chaos in your wake.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src="https://webassets.strayshot.game/newstrayshot/weapons/revolver.svg"
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container-weapon">
                            <img src={imgLine} alt="image vector line" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            REVOLVER
                          </h5>
                          <p className="weapon-description text-start">
                            Old-school power meets modern precision with the
                            high-powered revolver, packing a punch that's sure
                            to make every shot count.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Tab>
            </Tabs>
          </div>

          {/* Tab ends  here */}

          <div className="character-splash-icon-right">
            <img src={splashIcon} alt="splash icon" />
          </div>

          <div className="character-splash-icon-left">
            <img src={splashIcon} alt="splash icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharactersandWeapons;
