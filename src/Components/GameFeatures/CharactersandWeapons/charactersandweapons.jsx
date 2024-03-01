import "./charactersandweapons.css";
import char1 from "../../../assets/characters&weapons/character-1.png";
import bgVect from "../../../assets/characters&weapons/background-vector.svg";
import splashIcon from "../../../assets/GameModes/GameModeSplash.svg";

import imgLine from "../../../assets/GameUpdates/image-line.svg";

import sam from "../../../assets/characters&weapons/sam.png";
import kane from "../../../assets/characters&weapons/kane.png";
import hector from "../../../assets/characters&weapons/hector.png";
import duke from "../../../assets/characters&weapons/duke.png";
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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';



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

        <div className="character-card-container container mt-5">
          {/* Tab starts here */}
          <div className="row  character-inner-container ">
            <Tabs
              defaultActiveKey="characters"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="characters" title="CHARACTERS">
                {/* char-sm-starts here */}

                <div className="char-sm">

                  <Swiper>
                    <SwiperSlide>
                    <div className="card">
                      <div className="char-img-contianer">
                        <img src={sam} class="card-img-top" alt="character-1" />

                        <div className="img-line-container">
                          <img src={imgLine} alt="" />
                        </div>
                      </div>
                      <div class="card-body c-and-w-body">
                        <h5 class="card-title text-start">SAM</h5>
                      </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={kane} class="card-img-top" alt="character-2" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={hector}
                        class="card-img-top"
                        alt="character-3"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={duke} class="card-img-top" alt="character-4" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={jack} class="card-img-top" alt="character-5" />
                    </SwiperSlide>
                  </Swiper>
                
                {/* <Carousel
                  centerMode={false}
                  swipeable={true}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  // autoPlay={true}
                  // autoPlaySpeed={2000}
                  keyBoardControl={true}
                  //  customTransition="all .5"
                  // transitionDuration={500}
                  containerClass="carousel-container"
                  //  removeArrowOnDeviceType={["mobile"]}
                  // deviceType={this.props.deviceType}
                  // dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  <div className="item-1">
                    <div className="card">
                      <div className="char-img-contianer">
                        <img src={sam} class="card-img-top" alt="character-1" />

                        <div className="img-line-container">
                          <img src={imgLine} alt="" />
                        </div>
                      </div>
                      <div class="card-body c-and-w-body">
                        <h5 class="card-title text-start">SAM</h5>
                      </div>
                    </div>
                  </div>
                  <div className="item-2">
                    <div className="card">
                      <div className="char-img-contianer">
                        <img
                          src={kane}
                          class="card-img-top"
                          alt="character-1"
                        />

                        <div className="img-line-container">
                          <img src={imgLine} alt="" />
                        </div>
                      </div>
                      <div class="card-body c-and-w-body">
                        <h5 class="card-title text-start">KANE</h5>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="card">
                      <div className="char-img-contianer">
                        <img
                          src={hector}
                          class="card-img-top"
                          alt="character-1"
                        />

                        <div className="img-line-container">
                          <img src={imgLine} alt="" />
                        </div>
                      </div>
                      <div class="card-body c-and-w-body">
                        <h5 class="card-title text-start">HECTOR</h5>
                      </div>
                    </div>
                  </div>
                  <div className="item-4">
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
                      </div>
                    </div>
                  </div>

                  <div className="item-5">
                    <div className="card">
                      <div className="char-img-contianer">
                        <img
                          src={jack}
                          class="card-img-top"
                          alt="character-1"
                        />

                        <div className="img-line-container">
                          <img src={imgLine} alt="" />
                        </div>
                      </div>
                      <div class="card-body c-and-w-body">
                        <h5 class="card-title text-start">JACK</h5>
                      </div>
                    </div>
                  </div>
                </Carousel> */}
                </div>
                {/* char-sm-ends here */}

                <div className="character-card-lg">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                    <div className="col mb-3">
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src={sam}
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container">
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start">SAM</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src={kane}
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container">
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start">KANE</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src={hector}
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container">
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start">HECTOR</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-3">
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
                        </div>
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src={jack}
                            class="card-img-top"
                            alt="character-1"
                          />

                          <div className="img-line-container">
                            <img src={imgLine} alt="" />
                          </div>
                        </div>
                        <div class="card-body c-and-w-body">
                          <h5 class="card-title text-start">JACK</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="profile" title="WEAPONS">
                {/* weapon-mb-starts here */}

                <div className="weapon-sm">
                <Swiper>
                    <SwiperSlide>
                    <div className="card">
                      <div className="char-img-contianer">
                        <img src={sam} class="card-img-top" alt="character-1" />

                        <div className="img-line-container">
                          <img src={imgLine} alt="" />
                        </div>
                      </div>
                      <div class="card-body c-and-w-body">
                        <h5 class="card-title text-start">SAM</h5>
                      </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={kane} class="card-img-top" alt="character-2" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={hector}
                        class="card-img-top"
                        alt="character-3"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={duke} class="card-img-top" alt="character-4" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={jack} class="card-img-top" alt="character-5" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                


                {/* <Carousel
                  centerMode={false}
                  swipeable={true}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  // autoPlay={true}
                  // autoPlaySpeed={2000}
                  keyBoardControl={true}
                  //  customTransition="all .5"
                  // transitionDuration={500}
                  // containerClass="carousel-container"
                  //  removeArrowOnDeviceType={["mobile"]}
                  // deviceType={this.props.deviceType}
                  // dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  <div className="item-1">
                    <div className="card">
                      <div className="char-img-contianer">
                        <img
                          src={grenadeLauncher}
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
                          launcher, raining down destruction on enemy positions
                          and turning the tide of battle in your favour.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item-2">
                    <div className="card">
                      <div className="char-img-contianer">
                        <img
                          src={assaultRifle}
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
                          Unleash a hail of bullets with the assault rifle, the
                          versatile workhorse of any squad, perfect for
                          mid-range engagements and laying down suppressing
                          fire.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card">
                      <div className="char-img-contianer">
                        <img
                          src={pistol}
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
                          The pistol is the trusty sidearm every soldier relies
                          on, offering quick and precise firepower when you need
                          it most.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card">
                      <div className="char-img-contianer">
                        <img
                          src={sniper}
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
                          launcher, raining down destruction on enemy positions
                          and turning the tide of battle in your favour.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card">
                      <div className="char-img-contianer">
                        <img
                          src={rocketLauncher}
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
                          For when you absolutely, positively need to obliterate
                          everything in your path, the rocket launcher is your
                          go-to weapon for delivering explosive justice.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card">
                      <div className="char-img-contianer">
                        <img
                          src={shotgun}
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
                          Get up close and personal with the shotgun, delivering
                          devastating blasts that send enemies flying and leave
                          chaos in your wake.
                        </p>
                      </div>
                    </div>
                  </div>
                </Carousel> */}
                {/* weapon-mb-ends here */}

                <div className="weapon-container-lg">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                    <div className="col mb-3">
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src={grenadeLauncher}
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
                    </div>
                    <div className="col mb-3">
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src={assaultRifle}
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
                    </div>
                    <div className="col mb-3">
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src={pistol}
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
                    </div>
                    <div className="col mb-3">
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src={sniper}
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
                    </div>
                    <div className="col mb-3">
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src={rocketLauncher}
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
                    </div>
                    <div className="col mb-3">
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src={shotgun}
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
                    </div>
                    <div className="col mb-3">
                      <div className="card">
                        <div className="char-img-contianer">
                          <img
                            src={revolver}
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
                    </div>
                  </div>
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
