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
import { Autoplay } from "swiper/modules";
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
    <div className="charactersandweapons-container mb-5">
      <div className="d-flex flex-column justify-content-center  align-items-center text-center ">
        <div className="game-modes-text-container container mb-5">
          <div className="mt-5">
            <h3 className="game-modes-heading">CHARACTERS & WEAPONS</h3>
          </div>

          <div>
            <p className="text-center game-modes-description">
              Explore your Arsenal of Characters and Weapons, Each with Unique
              Abilities, in the World of Bounty Hunting
            </p>
          </div>
        </div>

        <div className="character-card-container container-fluid mt-5">
          {/* Tab starts here */}
          <div className="row  character-inner-container  justify-content-center">
            <Tabs
              defaultActiveKey="characters"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="characters" title="CHARACTERS">
                {/* char-sm-starts here */}

                <div className="char-sm">
                  <Swiper
                  modules={[Autoplay]}
                  loop
                  autoplay={{
                    delay: 1000, // Adjust this value to control the autoplay speed
                    disableOnInteraction: false,
                  }}
                  >
                    <SwiperSlide>
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src="https://webassets.strayshot.game/newstrayshot/character/sam.svg"
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container">
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start">SAM</h5>
                          <p class="card-text text-start">Behind Sam's cool gaze is a master strategist. He reads the battlefield like a book, turning data into winning plays. </p>
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
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 className="card-title text-start">KANE</h5>
                          <p className="card-text text-start">Kane stands firm on the battlefield as a heavy juggernaut dishing - and absorbing - extreme damage. One look at his face tells you he's here to crush anyone in his way.</p>
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
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 className="card-title text-start">HECTOR</h5>
                          <p className="card-text text-start">Wild and fiery, Hector charges in with his massive weapons, leaving enemies in smoldering ruins. No wonder they call him the Demolisher - he's a one-man wrecking crew.</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src={duke}
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container">
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start">DUKE</h5>
                          <p className="card-text text-start">Duke's suit blends with the shadows, making him a ghost on the battlefield. He warps through walls, strikes silently, and eliminates enemies before they know what hit them.</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* char-sm-ends here */}

                <div className="character-card-lg container">
                  <Swiper
                    className="swiper-custom"
                    spaceBetween={10}
                    slidesPerView={4}
                    modules={[Autoplay]}
                    loop
                    autoplay={{
                      delay: 1000, // Adjust this value to control the autoplay speed
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
                              <img src={imgLine} alt="" />
                            </div>
                          </div>
                          <div class="card-body c-and-w-body">
                            <h5 class="card-title text-start">SAM</h5>
                            <p class="card-text text-start">Behind Sam's cool gaze is a master strategist. He reads the battlefield like a book, turning data into winning plays. </p>
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
                              <img src={imgLine} alt="" />
                            </div>
                          </div>
                          <div class="card-body c-and-w-body">
                            <h5 class="card-title text-start">KANE</h5>
                            <p class="card-text text-start">Kane stands firm on the battlefield as a heavy juggernaut dishing - and absorbing - extreme damage. One look at his face tells you he's here to crush anyone in his way. </p>
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
                              <img src={imgLine} alt="" />
                            </div>
                          </div>
                          <div class="card-body c-and-w-body">
                            <h5 class="card-title text-start">HECTOR</h5>
                            <p class="card-text text-start">Wild and fiery, Hector charges in with his massive weapons, leaving enemies in smoldering ruins. No wonder they call him the Demolisher - he's a one-man wrecking crew. </p>
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
                              <img src={imgLine} alt="" />
                            </div>
                          </div>
                          <div class="card-body c-and-w-body">
                            <h5 class="card-title text-start">DUKE</h5>
                            <p class="card-text text-start">Duke's suit blends with the shadows, making him a ghost on the battlefield. He warps through walls, strikes silently, and eliminates enemies before they know what hit them.</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </Tab>

              <Tab eventKey="profile" title="WEAPONS">
                {/* weapon-mb-starts here */}

                <div className="weapon-sm">
                  <Swiper
                  modules={[Autoplay]}
                  loop
                  autoplay={{
                    delay: 1000, // Adjust this value to control the autoplay speed
                    disableOnInteraction: false,
                  }}>
                    <SwiperSlide>
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src="https://webassets.strayshot.game/newstrayshot/weapons/grenade-launcher.svg"
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container-weapon">
                            <img src={imgLine} alt="" />
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
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            ASSAULT RIFLE
                          </h5>
                          <p className="weapon-description text-start">
                            Unleash a hail of bullets with the assault rifle,
                            the versatile workhorse of any squad, perfect for
                            mid-range engagements and laying down suppressing
                            fire.
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
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            Pistol
                          </h5>
                          <p className="weapon-description text-start">
                            The pistol is the trusty sidearm every soldier
                            relies on, offering quick and precise firepower when
                            you need it most.
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
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            sniper
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
                            src="https://webassets.strayshot.game/newstrayshot/weapons/rocket-launcher.svg"
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container-weapon">
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            Rocket launcher
                          </h5>
                          <p className="weapon-description text-start">
                            For when you absolutely, positively need to
                            obliterate everything in your path, the rocket
                            launcher is your go-to weapon for delivering
                            explosive justice.
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
                            <img src={imgLine} alt="" />
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
                            <img src={imgLine} alt="" />
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

                {/* weapon-mb-ends here */}

                <div className="weapon-container-lg">
                  <Swiper
                  className="swiper-custom"
                  spaceBetween={10}
                  slidesPerView={5}
                  modules={[Autoplay]}
                  loop
                  // autoplay={{
                  //   delay: 1000, // Adjust this value to control the autoplay speed
                  //   disableOnInteraction: false,
                  // }}
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
                            <img src={imgLine} alt="" />
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
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            ASSAULT RIFLE
                          </h5>
                          <p className="weapon-description text-start">
                            Unleash a hail of bullets with the assault rifle,
                            the versatile workhorse of any squad, perfect for
                            mid-range engagements and laying down suppressing
                            fire.
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
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            Pistol
                          </h5>
                          <p className="weapon-description text-start">
                            The pistol is the trusty sidearm every soldier
                            relies on, offering quick and precise firepower when
                            you need it most.
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
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            sniper
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
                            src="https://webassets.strayshot.game/newstrayshot/weapons/rocket-launcher.svg"
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container-weapon">
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start text-uppercase">
                            Rocket launcher
                          </h5>
                          <p className="weapon-description text-start">
                            For when you absolutely, positively need to
                            obliterate everything in your path, the rocket
                            launcher is your go-to weapon for delivering
                            explosive justice.
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
                            <img src={imgLine} alt="" />
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
                            <img src={imgLine} alt="" />
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
            <img src={splashIcon} alt="" />
          </div>

          <div className="character-splash-icon-left">
            <img src={splashIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharactersandWeapons;
