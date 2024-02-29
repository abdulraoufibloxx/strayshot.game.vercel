import "./charactersandweapons.css";
import char1 from "../../../assets/characters&weapons/character-1.png";
import bgVect from "../../../assets/characters&weapons/background-vector.svg";
import splashIcon from "../../../assets/GameModes/GameModeSplash.svg";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function CharactersandWeapons() {
  return (
    <div className="charactersandweapons-container mb-5">
      <div className="d-flex flex-column justify-content-center  align-items-center text-center ">
        <div className="game-modes-text-container container mb-5">
          <div className="mt-5">
            <h3 className="game-modes-heading">CHARACTERS & WEAPONS</h3>
          </div>
          
          <div>
            <p className="text-center game-modes-description">
              Explore your Arsenal of Characters and Weapons, Each with Unique Abilities, in the World of Bounty Hunting
            </p>
          </div>
        </div>

        {/* new chars starts here */}

        <div className="row">
          
        </div>


        {/* new chars ends here */}

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
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 character-inner-container">
                  <div className="col  mb-3 ">
                    <div className="card text-start  character-card">
                      <img src={char1} class="card-img-top" alt="character-1" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p className="cart-subtitle">UNIQUE TRAIT</p>
                        <p class="card-text">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Blanditiis, sunt voluptas. Quo architecto
                          itaque.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-3 ">
                    <div className="card text-start">
                      <img src={char1} class="card-img-top" alt="character-1" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p className="cart-subtitle">UNIQUE TRAIT</p>
                        <p class="card-text">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Blanditiis, sunt voluptas. Quo architecto
                          itaque.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-3 ">
                    <div className="card text-start">
                      <img src={char1} class="card-img-top" alt="character-1" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p className="cart-subtitle">UNIQUE TRAIT</p>
                        <p class="card-text">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Blanditiis, sunt voluptas. Quo architecto
                          itaque.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-vect">
                    <img src={bgVect} alt="" />
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title="WEAPONS">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 character-inner-container">
                  <div className="col mb-3">
                    <div className="card text-start">
                      <img src={char1} class="card-img-top" alt="character-1" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p className="cart-subtitle">UNIQUE TRAIT</p>
                        <p class="card-text">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Blanditiis, sunt voluptas. Quo architecto
                          itaque.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-3">
                    <div className="card text-start">
                      <img src={char1} class="card-img-top" alt="character-1" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p className="cart-subtitle">UNIQUE TRAIT</p>
                        <p class="card-text">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Blanditiis, sunt voluptas. Quo architecto
                          itaque.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-3">
                    <div className="card text-start">
                      <img src={char1} class="card-img-top" alt="character-1" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p className="cart-subtitle">UNIQUE TRAIT</p>
                        <p class="card-text">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Blanditiis, sunt voluptas. Quo architecto
                          itaque.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-vect">
                    <img src={bgVect} alt="" />
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
