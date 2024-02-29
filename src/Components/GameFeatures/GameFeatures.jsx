import "./GameFeatures.css";
import GameFeatureSvg from "../../assets/GameFeature-g.svg";
import mapImg from "../../assets/Rookie League-map.png";
import vectLine from "../../assets/vector-bottom.svg";
// import mapName from "../../assets/map-name.svg";
// import map1 from '../../assets/map-1.svg';
// import map2 from '../../assets/map-2.svg';
// import map3 from '../../assets/map-3.svg';

import map1 from '../../assets/tropical-island.png';
import map2 from '../../assets/death-valley.png';
import map3 from '../../assets/industrial-area.png';
import map4 from '../../assets/urban-ruins.png';

import GameModes from "./GameModes/GameModes.jsx";
import CharactersandWeapons from "./CharactersandWeapons/charactersandweapons.jsx";

function GameFeatures() {
  return (
    <>
    <div className="game-features-container" id="Game-Features">
      <div className="main-heading d-flex flex-column justify-content-center align-items-center">
        <div>
          <img src={GameFeatureSvg} alt="GameFeatureSVG" />
        </div>
        <div className="mt-5 container">
          <p className="game-features-heading text-center header-text text-uppercase lh-sm fs-2">
            Armed with your skills, and an insatiable hunger for wealth,
             you must outmanoeuvre and outgun your opponents if you
            hope to survive and claim the ultimate prize.
          </p>
        </div>

        <div>
          <h3 className="map-header text-center header-text mt-5 ">
            STRAYSHOT LOCATIONS
          </h3>
        </div>

        <div className="map-container">
          
          <div className="map-name-container">
            
           <div className="map-name d-flex flex-column justify-content-center p-3">
            <div>
              <h3>NAME OF MAP</h3>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                cum natus quod id quaerat nobis optio eum ad quisquam facere,
                sit sed dolorem, aliquid iusto veniam alias porro dolorum ut.
                Excepturi hic eius debitis necessitatibus, distinctio quos
                consequuntur iste aliquid?
              </p>
            </div>
          </div>
          </div>
         

          <div className="map-img">
          <div className="vect-top">
            <img src={vectLine} alt="" />
          </div>
            <img src={mapImg} alt="" />
          </div>

          <div className="vect-bottom-game">
            <img src={vectLine} alt="" />
          </div>


          <div className="map-items">
            <div class="map-item-container container text-center ">
              <div class="row ">
                <div class="col">
                    <div className="row">
                        <img className="map-item-img img-fluid" src={map1} alt="" />
                    </div>
                    <div className="row map-item-title mt-3">
                        <p className="">TROPICAL ISLAND</p>
                    </div>
                    
                </div>

                <div class="col">
                <div className="row">
                        <img className="map-item-img img-fluid" src={map2} alt="" />
                    </div>
                    <div className="row map-item-title mt-3">
                        <p className="">DEATH VALLEY</p>
                    </div>
                    
                </div>

                <div class="col">
                <div className="row">
                        <img className="map-item-img img-fluid" src={map3} alt="" />
                    </div>
                    <div className="row map-item-title mt-3">
                        <p className="">INDUSTRIAL AREA</p>
                    </div>
                    

                </div>
                <div class="col">
                <div className="row">
                        <img className="map-item-img img-fluid" src={map4} alt="" />
                    </div>
                    <div className="row map-item-title mt-3">
                        <p className="">URBAN AREAS </p>
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
