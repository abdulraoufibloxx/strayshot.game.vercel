import "./GameFeatures.css";
import { useState } from "react";

import GameFeatureSvg from "../../assets/GameFeature-g.svg";
import mapImg from "../../assets/Rookie League-map.png";
import vectLine from "../../assets/vector-bottom.svg";

// import map1 from "../../assets/tropicalisland.png";
// import map2 from "../../assets/guerra-hills-resized.png";
// import map3 from "../../assets/industrealarea.png";
// import map4 from "../../assets/urbanareas.png";
import map5 from "../../assets/sierra-altos.png";

import GameModes from "./GameModes/GameModes.jsx";
import CharactersandWeapons from "./CharactersandWeapons/charactersandweapons.jsx";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation} from 'swiper/modules';

import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";


function GameFeatures() {
  const map1="https://webassets.strayshot.game/newstrayshot/maps/tropicalisland.png"
  const map2="https://webassets.strayshot.game/newstrayshot/maps/guerra-hills-resized.png"
  const map3="https://webassets.strayshot.game/newstrayshot/maps/rustyard.png"
  const map4="https://webassets.strayshot.game/newstrayshot/maps/urbanareas.png"
  // const map5="https://webassets.strayshot.game/newstrayshot/maps/urbanareas.png"

  const [mapBackgroundImage, setMapBackgroundImage] = useState(map1);

  // const [selectedMap, setSelectedMap] = useState(map1);
  const [selectedMap, setSelectedMap] = useState({
    map1,
    name: "WHITE PALMS ISLAND",
    description:
      "A cityscape that has looted downtown towers, empty neighborhoods, and a crashed aircraft for you to fight through. ",
    readMoreLink:"https://blog.strayshot.game/2024/03/07/an-insider-look-at-the-tropical-island-map/"
    
  });

  const handleImageClick = (imageSrc, mapName, mapDescription,mapBlogLink) => {
    setMapBackgroundImage(imageSrc);
    setSelectedMap({
      map1: imageSrc,
      name: mapName,
      description: mapDescription,
      readMoreLink:mapBlogLink
    });
  };

  return (
    <>
      <div className="game-features-container" id="Game-Features">
        <div className="main-heading d-flex flex-column justify-content-center align-items-center">
          {/* <div>
            <img src={GameFeatureSvg} alt="GameFeatureSVG" />
          </div>
          <div className="container">
            <p className="game-features-heading text-center header-text text-uppercase my-5">
            ARMED WITH YOUR SKILLS AND AN INSATIABLE HUNGER TO WIN, YOU MUST OUTMANOEUVRE AND OUTGUN YOUR OPPONENTS IF YOU HOPE TO CLIMB THE LEADERBOARD
            </p>
          </div> */}

          <div className="my-5 strayshot-locations-container">
            <h3 className="map-header text-center header-text strayshot-locations-header">
              STRAYSHOT LOCATIONS
            </h3>
          </div>

          <div className="map-container">
            <div className="map-name-container container">
              <div className="map-name d-flex flex-column justify-content-center p-3">
                <div>
                  <h3>{selectedMap.name}</h3>
                </div>
                <div>
                  <p>{selectedMap.description}</p>
                </div>
                <div>
                  <a className="map-read-more" target="_blank" rel="noreferrer" href={selectedMap.readMoreLink}>Explore this map</a>
                </div>
              </div>
            </div>

            <div className="map-img">
              <div className="vect-top ">
                <img src={vectLine} className="vect-top-game-features" alt="vecor line" />
              </div>
              <div className="vect-bottom-game-features">
              <img src={vectLine} alt="vector line" />
            </div>
              <img
                className="map-main-background"
                src={mapBackgroundImage}
                alt=""
              />
            </div>

            
            {/* map-items-for-smaller-device starts here */}
            <div className="map-items-for-sm">
            <Swiper className="map-item-sm"
            slidesPerView={2}
            modules={[Autoplay]}
            loop
                    autoplay={{
                      delay: 2500, // Adjust this value to control the autoplay speed
                      disableOnInteraction: false,
                    }}
           
            
            >
              <SwiperSlide className="pt-4">
                <div className={`row ${
                        selectedMap.map1 == map1 ? "selected-map-pointer" : ""
                      }`}>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      className={`map-item-img-sm img-fluid ${
                        selectedMap.map1 == map1 ? "selected-map" : ""
                      }`}
                      src={map1}
                      onClick={() =>
                        handleImageClick(
                          map1,
                          "WHITE PALMS ISLAND",
                          "A cityscape that has looted downtown towers, empty neighborhoods, and crashed aircraft for you to fight through."
                        )
                      }
                      alt="WHITE PALMS ISLAND map"
                    />
                    <div className="row map-item-title mt-3">
                      <p className="">WHITE PALMS ISLAND</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pt-4">
                <div className={`row ${
                        selectedMap.map1 == map2 ? "selected-map-pointer" : ""
                      }`}>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      className={`map-item-img-sm img-fluid ${
                        selectedMap.map1 == map2 ? "selected-map" : ""
                      }`}
                      src={map2}
                      onClick={() =>
                        handleImageClick(
                          map2,
                          "GUERRA HILLS",
                          "An open area that leaves players with little to no cover. A minor slip-up here can cost you an entire match."
                        )
                      }
                      alt="Guerra Hills Map"
                    />
                    <div className="row map-item-title mt-3">
                      <p className="">GUERRA HILLS</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* <SwiperSlide className="pt-4">
                <div className={`row ${
                        selectedMap.map1 == map3 ? "selected-map-pointer" : ""
                      }`}>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      className={`map-item-img-sm img-fluid ${
                        selectedMap.map1 == map3 ? "selected-map" : ""
                      }`}
                      src={map3}
                      onClick={() =>
                        handleImageClick(
                          map3,
                          "RUST YARD",
                          "This abandoned factory has closed spaces for battles where players must use containers scattered around for protection."
                        )
                      }
                      alt="Rust Yard Map"
                    />
                    <div className="row map-item-title mt-3">
                      <p className="">RUST YARD</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}

              <SwiperSlide className="pt-4">
                <div className={`row ${
                        selectedMap.map1 == map4 ? "selected-map-pointer" : ""
                      }`}>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                          className={`map-item-img-sm img-fluid ${
                            selectedMap.map1 == map4 ? "selected-map" : ""
                          }`}
                          src={map4}
                          onClick={() =>
                            handleImageClick(
                              map4,
                              "URBAN RUINS",
                              "Perfect for close-range combat with tunnels, underground passages, and small stairs to explore."
                            )
                          }
                          alt="Urban Ruins Map"
                        />
                        <div className="row map-item-title mt-3">
                      <p className="">URBAN RUINS</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="pt-4">
                <div className={`row ${
                        selectedMap.map1 == map5 ? "selected-map-pointer" : ""
                      }`}>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                          className={`map-item-img-sm img-fluid ${
                            selectedMap.map1 == map5 ? "selected-map" : ""
                          }`}
                          src={map5}
                          onClick={() =>
                            handleImageClick(
                              map5,
                              "SIERRA ALTOS",
                              "A mountainous location that requires hunters to master the art of engaging enemies from above and below"
                            )
                          }
                          alt="Urban Ruins Map"
                        />
                        <div className="row map-item-title mt-3">
                      <p className="">SIERRA ALTOS</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
            </div>

            {/* map-items-for-smaller-device starts here */}

            <div className="map-item-lg">
              <div className="map-items">
                <div className="map-item-container container text-center">
                  <div className="row gx-5 ">
                    <div className="col">
                      <div className={`row map-hover ${
                        selectedMap.map1 == map1 ? "selected-map" : ""
                      }`}>
                        <img
                          className={`map-item-img img-fluid`}
                          src={map1}
                          onClick={() =>
                            handleImageClick(
                              map1,
                              "WHITE PALMS ISLAND",
                              "A cityscape that has looted downtown towers, empty neighborhoods, and a crashed aircraft for you to fight through.",
                              "https://blog.strayshot.game/2024/03/07/an-insider-look-at-the-tropical-island-map/"
                            )
                          }
                          alt="WHITE PALMS ISLAND map"
                        />
                      </div>
                      <div className="row map-item-title mt-3">
                        <p className="">WHITE PALMS ISLAND</p>
                      </div>
                    </div>

                    

                    <div className="col">
                      <div className={`row map-hover ${
                            selectedMap.map1 == map2 ? "selected-map" : ""
                          }`}>
                        <img
                          className={`map-item-img img-fluid`}
                          src={map2}
                          onClick={() =>
                            handleImageClick(
                              map2,
                              "GUERRA HILLS",
                              "An open area that leaves players with little to no cover. A minor slip-up here can cost you an entire match.",
                              "https://blog.strayshot.game/2024/03/12/mastering-the-guerra-hills-map-in-strayshot-a-strategic-overview/"
                            )
                          }
                          alt="Guerra Hills Map"
                        />
                      </div>
                      <div className="row map-item-title mt-3">
                        <p className="">GUERRA HILLS</p>
                      </div>
                    </div>

                    {/* <div className="col">
                      <div className={`row map-hover ${
                            selectedMap.map1 == map3 ? "selected-map" : ""
                          }`}>
                        <img
                          className={`map-item-img img-fluid`}
                          src={map3}
                          onClick={() =>
                            handleImageClick(
                              map3,
                              "RUST YARD",
                              "This abandoned factory has closed spaces for battles where players must use containers scattered around for protection.",
                              "https://blog.strayshot.game/category/game-maps/"
                            )
                          }
                          alt="Rust Yard Map"
                        />
                      </div>
                      <div className="row map-item-title mt-3">
                        <p className="">RUST YARD</p>
                      </div>
                    </div> */}

                    <div className="col">
                      <div className={`row map-hover ${
                            selectedMap.map1 == map4 ? "selected-map" : ""
                          }`}>
                        <img
                          className={`map-item-img img-fluid`}
                          src={map4}
                          onClick={() =>
                            handleImageClick(
                              map4,
                              "URBAN RUINS",
                              "Perfect for close-range combat with tunnels, underground passages, and small stairs to explore.",
                              "https://blog.strayshot.game/2024/03/12/an-overview-of-the-urban-ruins-map/"
                            )
                          }
                          alt="Urban Ruins Map"
                        />
                      </div>
                      <div className="row map-item-title mt-3">
                        <p className="">URBAN RUINS </p>
                      </div>
                    </div>

                    <div className="col">
                      <div className={`row map-hover ${
                            selectedMap.map1 == map5 ? "selected-map" : ""
                          }`}>
                        <img
                          className={`map-item-img img-fluid`}
                          src={map5}
                          onClick={() =>
                            handleImageClick(
                              map5,
                              "SIERRA ALTOS",
                              "A mountainous location that requires hunters to master the art of engaging enemies from above and below",
                              "https://blog.strayshot.game/2024/03/12/tactical-guide-to-the-sierraaltos-map/"
                            )
                          }
                          alt="SierraAltos Map"
                        />
                      </div>
                      <div className="row map-item-title mt-3">
                        <p className="">SIERRA ALTOS</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GameModes />
      <CharactersandWeapons />
    </>
  );
}

export default GameFeatures;
