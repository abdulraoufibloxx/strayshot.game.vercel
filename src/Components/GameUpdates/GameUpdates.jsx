import "./GameUpdates.css";
import gameUpdatesHeader from "../../assets/GameUpdates/game-updates-title.svg";

import textGraphic from '../../assets/text-left-graphic.svg'

// import news1 from "../../assets/GameUpdates/beta-session-roundUp.png";
import news2 from "../../assets/GameUpdates/developmentUpdate.png";
import news3 from "../../assets/GameUpdates/news-3.png";

import cardImageLine from "../../assets/GameUpdates/image-line.svg";

import ibloxxNews from "../../assets/GameUpdates/ibloxx-news-title.svg";


import ibloxxNewsImg1 from "../../assets/GameUpdates/epic-gamestore-launch.png";
import ibloxxNewsImg2 from "../../assets/GameUpdates/nba-stars.png";
import ibloxxNewsImg3 from "../../assets/GameUpdates/grow-gaming-division.png";

import gameUpdatesHeaderMb from "../../assets/GameUpdates/game-updates-mb.svg";
import ibloxxUpdatesHeaderMb from "../../assets/GameUpdates/ibloxx-news-mb.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function GameUpdates() {

  const news1="https://webassets.strayshot.game/newstrayshot/maps/urbanareas.png"

  const responsive = {
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="game-updates-container my-5" id="GameUpdates">
      <div className="d-flex flex-column justify-content-center align-items-center  text-center">
        <div className="news-header mb-4 mt-5">
          <p className="text-uppercase game-updates-header">Game news</p>
        </div>

        {/* game updates for smaller screen starts here */}

        <div className="game-updates-sm container-fluid mt-4">
          <Carousel
            centerMode={false}
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            keyBoardControl={true}
            //  customTransition="all .5"
            transitionDuration={500}
            // containerClass="carousel-container"
            //  removeArrowOnDeviceType={["mobile"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="item-1">
              <div class="card game-updates-card text-start game-udpates-card-first">
                <div className="game-update-card-img">
                  <a href="https://strayshot.game/" target="_blank" rel="noopener noreferrer"> <img
                    src={news1}
                    class="card-img-top"
                    alt="card image"
                  /></a>
                 
                  <div className="game-update-card-line">
                    <img src={cardImageLine} alt="vector line" />
                  </div>
                </div>
                <div class="card-body">
                  <p className="game-update-card-date">FEBRUARY 28, 2024</p>

                  
                  <a href="https://strayshot.game/" target="_blank" rel="noopener noreferrer" ><h5 class="card-title game-update-card-title text-uppercase">
                  LATEST BETA TEST RECAP, WINNERS, AND WHAT'S NEXT
                  </h5></a> 
                  

                  <a href="https://strayshot.game/" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                    READ MORE{" "}
                    <span className="ms-1">
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.958333 1.47526C0.567132 1.47526 0.25 1.15813 0.25 0.766927C0.25 0.375725 0.567132 0.0585938 0.958333 0.0585938H8.04167C8.43287 0.0585938 8.75 0.375725 8.75 0.766927V7.85026C8.75 8.24146 8.43287 8.55859 8.04167 8.55859C7.65046 8.55859 7.33333 8.24146 7.33333 7.85026V2.47699L1.4592 8.35113C1.18258 8.62775 0.734087 8.62775 0.457466 8.35113C0.180845 8.07451 0.180845 7.62601 0.457466 7.34939L6.3316 1.47526H0.958333Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item-2">
              <div class="card game-updates-card text-start">
                <div className="game-update-card-img">
                  <a href="https://medium.com/@StrayShot/an-insider-look-at-the-tdm-tropical-map-ea3f20c2d484" target="_blank">
                    <img
                      src={news3}
                      class="card-img-top"
                      alt="card image"
                    />
                  </a>
                  <div className="game-update-card-line">
                    <img src={cardImageLine} alt="vector line" />
                  </div>
                </div>
                <div class="card-body">
                  <p className="game-update-card-date text-uppercase">FEBRUARY 28, 2024</p>

                  
                  <a href="https://medium.com/@StrayShot/an-insider-look-at-the-tdm-tropical-map-ea3f20c2d484" target="_blank" rel="noopener noreferrer"><h5 class="card-title game-update-card-title text-uppercase">
                  An Insider Look at the TDM Tropical Map
                  </h5></a> 
      

                  <a href="https://medium.com/@StrayShot/an-insider-look-at-the-tdm-tropical-map-ea3f20c2d484" target="_blank" rel="noopener noreferrer"  className="game-update-card-read-more text-uppercase">
                    READ MORE{" "}
                    <span className="ms-1">
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.958333 1.47526C0.567132 1.47526 0.25 1.15813 0.25 0.766927C0.25 0.375725 0.567132 0.0585938 0.958333 0.0585938H8.04167C8.43287 0.0585938 8.75 0.375725 8.75 0.766927V7.85026C8.75 8.24146 8.43287 8.55859 8.04167 8.55859C7.65046 8.55859 7.33333 8.24146 7.33333 7.85026V2.47699L1.4592 8.35113C1.18258 8.62775 0.734087 8.62775 0.457466 8.35113C0.180845 8.07451 0.180845 7.62601 0.457466 7.34939L6.3316 1.47526H0.958333Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item-3">
              <div class="card game-updates-card text-start">
                <div className="game-update-card-img">
                  <a href="https://medium.com/@StrayShot/latest-strayshot-release-notes-21-02-2023-30c7aaf182c8" target="_blank" rel="noopener noreferrer" ><img
                    src={news2}
                    class="card-img-top"
                    alt="card image"
                  /></a>
                  
                  <div className="game-update-card-line">
                    <img src={cardImageLine} alt="vactor line" />
                  </div>
                </div>
                <div class="card-body">
                  <p className="game-update-card-date text-uppercase">FEBRUARY 21, 2024</p>
                  <a href="https://medium.com/@StrayShot/latest-strayshot-release-notes-21-02-2023-30c7aaf182c8" target="_blank" rel="noopener noreferrer">
                  <h5 class="card-title game-update-card-title text-uppercase">
                  Latest StrayShot Release Notes&nbsp;&mdash;&nbsp;21/02/2024
                  </h5>
                  </a>
                 
          

                  <a href="https://medium.com/@StrayShot/latest-strayshot-release-notes-21-02-2023-30c7aaf182c8" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                    READ MORE{" "}
                    <span className="ms-1">
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.958333 1.47526C0.567132 1.47526 0.25 1.15813 0.25 0.766927C0.25 0.375725 0.567132 0.0585938 0.958333 0.0585938H8.04167C8.43287 0.0585938 8.75 0.375725 8.75 0.766927V7.85026C8.75 8.24146 8.43287 8.55859 8.04167 8.55859C7.65046 8.55859 7.33333 8.24146 7.33333 7.85026V2.47699L1.4592 8.35113C1.18258 8.62775 0.734087 8.62775 0.457466 8.35113C0.180845 8.07451 0.180845 7.62601 0.457466 7.34939L6.3316 1.47526H0.958333Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        {/* game updates for smaller screen ends here */}

        {/* game udpates for larger screen  */}
        <div className="game-updates-lg">
          <div className="game-updates-card-container container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
              <div className="col mb-3">
                <div class="card game-updates-card text-start game-udpates-card-first">
                  <div className="game-update-card-img">
                    
                    <a href="https://strayshot.game/" target="_blank" rel="noopener noreferrer" >
                    <img
                      src={news1}
                      class="card-img-top"
                      alt="card image"
                    />
                    </a>

                   
                    <div className="game-update-card-line">
                      <img src={cardImageLine} alt="vector line" />
                    </div>
                  </div>
                  <div class="card-body">
                    <p className="game-update-card-date">FEBRUARY 28, 2024</p> 

                    <a href="https://strayshot.game/" target="_blank" rel="noopener noreferrer"> <h5 class="card-title game-update-card-title text-uppercase">
                    LATEST BETA TEST RECAP, WINNERS, AND WHAT'S NEXT
                    </h5></a>

                   
                    {/* <p class="card-text">
                      Lorem ipsum malesuada taciti sollicitudin sagittis lacus
                      himenaeos, ligula pulvinar porta augue ornare himenaeos,
                      leo viverra euismod risus varius mattis.
                    </p> */}
                  

                    <a href="https://strayshot.game/" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                      READ MORE{" "}
                      <span className="ms-1">
                        <svg
                          width="9"
                          height="10"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.958333 1.47526C0.567132 1.47526 0.25 1.15813 0.25 0.766927C0.25 0.375725 0.567132 0.0585938 0.958333 0.0585938H8.04167C8.43287 0.0585938 8.75 0.375725 8.75 0.766927V7.85026C8.75 8.24146 8.43287 8.55859 8.04167 8.55859C7.65046 8.55859 7.33333 8.24146 7.33333 7.85026V2.47699L1.4592 8.35113C1.18258 8.62775 0.734087 8.62775 0.457466 8.35113C0.180845 8.07451 0.180845 7.62601 0.457466 7.34939L6.3316 1.47526H0.958333Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                   
                  
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div class="card game-updates-card text-start">
                  <div className="game-update-card-img">

                      <a href="https://medium.com/@StrayShot/an-insider-look-at-the-tdm-tropical-map-ea3f20c2d484" target="_blank">
                      <img
                      src={news3}
                      class="card-img-top"
                      alt="card image"
                    />
                      </a>
                    
                    
                    <div className="game-update-card-line">
                      <img src={cardImageLine} alt="vector line" />
                    </div>
                  </div>
                  <div class="card-body">
                    <p className="game-update-card-date">FEBRUARY 28, 2024</p>

                     <a href="https://medium.com/@StrayShot/an-insider-look-at-the-tdm-tropical-map-ea3f20c2d484" target="_blank" rel="noopener noreferrer">
                     <h5 class="card-title game-update-card-title text-uppercase">
                     An Insider Look at the TDM Tropical Map
                    </h5></a> 
                    
                    
                    {/* <p class="card-text">
                      Lorem ipsum malesuada taciti sollicitudin sagittis lacus
                      himenaeos, ligula pulvinar porta augue ornare himenaeos,
                      leo viverra euismod risus varius mattis.
                    </p> */}

                    <a href="https://medium.com/@StrayShot/an-insider-look-at-the-tdm-tropical-map-ea3f20c2d484" target="_blank" className="game-update-card-read-more text-uppercase">
                      READ MORE{" "}
                      <span className="ms-1">
                        <svg
                          width="9"
                          height="10"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.958333 1.47526C0.567132 1.47526 0.25 1.15813 0.25 0.766927C0.25 0.375725 0.567132 0.0585938 0.958333 0.0585938H8.04167C8.43287 0.0585938 8.75 0.375725 8.75 0.766927V7.85026C8.75 8.24146 8.43287 8.55859 8.04167 8.55859C7.65046 8.55859 7.33333 8.24146 7.33333 7.85026V2.47699L1.4592 8.35113C1.18258 8.62775 0.734087 8.62775 0.457466 8.35113C0.180845 8.07451 0.180845 7.62601 0.457466 7.34939L6.3316 1.47526H0.958333Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div class="card game-updates-card text-start game-udpates-card-last">
                  <div className="game-update-card-img">
                  <a href="https://medium.com/@StrayShot/latest-strayshot-release-notes-21-02-2023-30c7aaf182c8" target="_blank" rel="noopener noreferrer">
                  <img
                      src={news2}
                      class="card-img-top"
                      alt="card image"
                    />
                  </a>
                    
                    <div className="game-update-card-line">
                      <img src={cardImageLine} alt="vector line" />
                    </div>
                  </div>
                  <div class="card-body">
                    <p className="game-update-card-date">FEBRUARY 21, 2024</p>

                      <a href="https://medium.com/@StrayShot/latest-strayshot-release-notes-21-02-2023-30c7aaf182c8" target="_blank" rel="noopener noreferrer">
                      <h5 class="card-title game-update-card-title text-uppercase">
                    Latest StrayShot Release Notes&nbsp;&mdash;&nbsp;21/02/2024
                    </h5>
                      </a>

                   
                    {/* <p class="card-text">
                      Lorem ipsum malesuada taciti sollicitudin sagittis lacus
                      himenaeos, ligula pulvinar porta augue ornare himenaeos,
                      leo viverra euismod risus varius mattis.
                    </p> */}
                    
                    <a href="https://medium.com/@StrayShot/latest-strayshot-release-notes-21-02-2023-30c7aaf182c8" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                      READ MORE{" "}
                      <span className="ms-1">
                        <svg
                          width="9"
                          height="10"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.958333 1.47526C0.567132 1.47526 0.25 1.15813 0.25 0.766927C0.25 0.375725 0.567132 0.0585938 0.958333 0.0585938H8.04167C8.43287 0.0585938 8.75 0.375725 8.75 0.766927V7.85026C8.75 8.24146 8.43287 8.55859 8.04167 8.55859C7.65046 8.55859 7.33333 8.24146 7.33333 7.85026V2.47699L1.4592 8.35113C1.18258 8.62775 0.734087 8.62775 0.457466 8.35113C0.180845 8.07451 0.180845 7.62601 0.457466 7.34939L6.3316 1.47526H0.958333Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ibloxx news section */}

        <div className="ibloxx-news-container container my-5">
          <div>
            <div className="ibloxx-news-header d-flex flex-column justify-content-center align-items-center">
              <div className="mt-5 mb-4">
                
                <p className="text-uppercase game-updates-header">IBLOXX NEWS</p>
              </div>

              {/* iblox news carousal sm starts here */}
              <div className="ibloxx-news-sm container-fluid mt-4">
                <Carousel
                  centerMode={false}
                  swipeable={true}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={false}
                  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  // autoPlaySpeed={1000}
                  keyBoardControl={true}
                  //  customTransition="all .5"
                  transitionDuration={500}
                  // containerClass="carousel-container"
                  //  removeArrowOnDeviceType={["mobile"]}
                  // deviceType={this.props.deviceType}
                  // dotListClass="custom-dot-list-style"
                  itemClass="ibloxx-news-carousal"
                >
                  <div className="iblox-news-1">
                  <div class="card game-updates-card ibloxx-updates-card text-start game-udpates-card-first">
                        <div className="game-update-card-img">
                          <a href="https://www.khaleejtimes.com/kt-network/strayshot-sets-sights-on-epic-games-store-launch?amp=1" target="_blank" rel="noopener noreferrer">
                          <img
                            src={ibloxxNewsImg1}
                            class="card-img-top"
                            alt="card image"
                          />
                          </a>
                          
                          
                          <div className="game-update-card-line">
                            <img src={cardImageLine} alt="vector line" />
                          </div>
                        </div>
                        <div class="card-body">
                          <p className="game-update-card-date text-uppercase">
                          February 20, 2024
                          </p>

                      <a href="https://www.khaleejtimes.com/kt-network/strayshot-sets-sights-on-epic-games-store-launch?amp=1" target="_blank" rel="noopener noreferrer">
                      <h5 class="card-title game-update-card-title text-uppercase">
                          StrayShot sets sights on epic games store launch{" "}
                          </h5>
                      </a>
                          
                          

                          <a href="https://www.khaleejtimes.com/kt-network/strayshot-sets-sights-on-epic-games-store-launch?amp=1" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                            READ MORE{" "}
                            <span className="ms-1">
                              <svg
                                width="9"
                                height="10"
                                viewBox="0 0 9 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.958333 1.47526C0.567132 1.47526 0.25 1.15813 0.25 0.766927C0.25 0.375725 0.567132 0.0585938 0.958333 0.0585938H8.04167C8.43287 0.0585938 8.75 0.375725 8.75 0.766927V7.85026C8.75 8.24146 8.43287 8.55859 8.04167 8.55859C7.65046 8.55859 7.33333 8.24146 7.33333 7.85026V2.47699L1.4592 8.35113C1.18258 8.62775 0.734087 8.62775 0.457466 8.35113C0.180845 8.07451 0.180845 7.62601 0.457466 7.34939L6.3316 1.47526H0.958333Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                  </div>
                  <div className="iblox-news-2">
                  <div class="card game-updates-card ibloxx-updates-card text-start">
                        <div className="game-update-card-img">
                          <a href="https://finance.yahoo.com/news/nba-stars-lamelo-lonzo-ball-160000516.html" target="_blank" rel="noopener noreferrer">
                          <img
                            src={ibloxxNewsImg2}
                            class="card-img-top"
                            alt="card image"
                          />
                          </a>
                          
                          <div className="game-update-card-line">
                            <img src={cardImageLine} alt="vector line" />
                          </div>
                        </div>
                        <div class="card-body">
                          <p className="game-update-card-date">
                          October 12, 2023
                          </p>
                          <a href="https://finance.yahoo.com/news/nba-stars-lamelo-lonzo-ball-160000516.html" target="_blank" rel="noopener noreferrer">
                          <h5 class="card-title game-update-card-title text-uppercase">
                          NBA Stars LaMelo, Lonzo Ball, and BigBaller Brand Family join iBLOXX's StrayShot Game{" "}
                          </h5>
                          </a>
                          
                         
                          <a href="https://finance.yahoo.com/news/nba-stars-lamelo-lonzo-ball-160000516.html" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                            READ MORE{" "}
                            <span className="ms-1">
                              <svg
                                width="9"
                                height="10"
                                viewBox="0 0 9 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.958333 1.47526C0.567132 1.47526 0.25 1.15813 0.25 0.766927C0.25 0.375725 0.567132 0.0585938 0.958333 0.0585938H8.04167C8.43287 0.0585938 8.75 0.375725 8.75 0.766927V7.85026C8.75 8.24146 8.43287 8.55859 8.04167 8.55859C7.65046 8.55859 7.33333 8.24146 7.33333 7.85026V2.47699L1.4592 8.35113C1.18258 8.62775 0.734087 8.62775 0.457466 8.35113C0.180845 8.07451 0.180845 7.62601 0.457466 7.34939L6.3316 1.47526H0.958333Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>

                  </div>
                  <div className="iblox-news-3">
                  <div class="card game-updates-card ibloxx-updates-card text-start game-udpates-card-last">
                        <div className="game-update-card-img">
                          <a href="https://finance.yahoo.com/news/ibloxx-raises-5-million-grow-154700559.html" target="_blank" rel="noopener noreferrer">
                          <img
                            src={ibloxxNewsImg3}
                            class="card-img-top"
                            alt="card image"
                          />
                          </a>
                         
                          <div className="game-update-card-line">
                            <img src={cardImageLine} alt="vector line" />
                          </div>
                        </div>
                        <div class="card-body">
                          <p className="game-update-card-date text-uppercase">
                          February 24, 2023
                          </p>

                      <a  href="https://finance.yahoo.com/news/ibloxx-raises-5-million-grow-154700559.html" target="_blank" rel="noopener noreferrer">
                      <h5 class="card-title game-update-card-title text-uppercase">
                      IBLOXX Raises $5 Million to Grow Gaming Division
                          </h5>
                      </a>

                          
                          

                          <a href="https://finance.yahoo.com/news/ibloxx-raises-5-million-grow-154700559.html" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                            READ MORE{" "}
                            <span className="ms-1">
                              <svg
                                width="9"
                                height="10"
                                viewBox="0 0 9 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.958333 1.47526C0.567132 1.47526 0.25 1.15813 0.25 0.766927C0.25 0.375725 0.567132 0.0585938 0.958333 0.0585938H8.04167C8.43287 0.0585938 8.75 0.375725 8.75 0.766927V7.85026C8.75 8.24146 8.43287 8.55859 8.04167 8.55859C7.65046 8.55859 7.33333 8.24146 7.33333 7.85026V2.47699L1.4592 8.35113C1.18258 8.62775 0.734087 8.62775 0.457466 8.35113C0.180845 8.07451 0.180845 7.62601 0.457466 7.34939L6.3316 1.47526H0.958333Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                  </div>
                </Carousel>
              </div>

              {/* iblox news carousal sm ends here */}
              <div className="ibloxx-news-lg">
                <div className="game-updates-card-container ibloxx-news-card-container mt-3">
                  <div className="row row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                    <div className="col mb-3 ">
                      <div class="card game-updates-card ibloxx-updates-card text-start game-udpates-card-first">
                        <div className="game-update-card-img">

                        <a href="https://www.khaleejtimes.com/kt-network/strayshot-sets-sights-on-epic-games-store-launch?amp=1" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                        <img
                            src={ibloxxNewsImg1}
                            class="card-img-top"
                            alt="card image"
                          />
                        </a>

                          
                          <div className="game-update-card-line">
                            <img src={cardImageLine} alt="vector line" />
                          </div>
                        </div>
                        <div class="card-body">
                          <p className="game-update-card-date text-uppercase">
                          February 20, 2024
                          </p>

                          <a href="https://www.khaleejtimes.com/kt-network/strayshot-sets-sights-on-epic-games-store-launch?amp=1" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                          <h5 class="card-title game-update-card-title text-uppercase">
                          StrayShot sets sights on epic games store launch{" "}
                          </h5>
                          </a>

                          
                          {/* <p class="card-text">
                            Lorem ipsum malesuada taciti sollicitudin sagittis
                            lacus himenaeos, ligula pulvinar porta augue ornare
                            himenaeos, leo viverra euismod risus varius mattis.
                          </p> */}

                          <a href="https://www.khaleejtimes.com/kt-network/strayshot-sets-sights-on-epic-games-store-launch?amp=1" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                            READ MORE{" "}
                            <span className="ms-1">
                              <svg
                                width="9"
                                height="10"
                                viewBox="0 0 9 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.958333 1.47526C0.567132 1.47526 0.25 1.15813 0.25 0.766927C0.25 0.375725 0.567132 0.0585938 0.958333 0.0585938H8.04167C8.43287 0.0585938 8.75 0.375725 8.75 0.766927V7.85026C8.75 8.24146 8.43287 8.55859 8.04167 8.55859C7.65046 8.55859 7.33333 8.24146 7.33333 7.85026V2.47699L1.4592 8.35113C1.18258 8.62775 0.734087 8.62775 0.457466 8.35113C0.180845 8.07451 0.180845 7.62601 0.457466 7.34939L6.3316 1.47526H0.958333Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div class="card game-updates-card ibloxx-updates-card text-start">
                        <div className="game-update-card-img">
                          
                        <a href="https://finance.yahoo.com/news/nba-stars-lamelo-lonzo-ball-160000516.html" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                        <img
                            src={ibloxxNewsImg2}
                            class="card-img-top"
                            alt="card image"
                          />
                        </a>

                          
                          <div className="game-update-card-line">
                            <img src={cardImageLine} alt="vector line" />
                          </div>
                        </div>
                        <div class="card-body">
                          <p className="game-update-card-date text-uppercase">
                          October 12, 2023
                          </p>

                          <a href="https://finance.yahoo.com/news/nba-stars-lamelo-lonzo-ball-160000516.html" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                          <h5 class="card-title game-update-card-title text-uppercase">
                          NBA Stars LaMelo, Lonzo Ball, and BigBaller Brand Family join iBLOXX's StrayShot Game{" "}
                          </h5>
                          </a>

                         
                          {/* <p class="card-text">
                            Lorem ipsum malesuada taciti sollicitudin sagittis
                            lacus himenaeos, ligula pulvinar porta augue ornare
                            himenaeos, leo viverra euismod risus varius mattis.
                          </p> */}

                          <a href="https://finance.yahoo.com/news/nba-stars-lamelo-lonzo-ball-160000516.html" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                            READ MORE{" "}
                            <span className="ms-1">
                              <svg
                                width="9"
                                height="10"
                                viewBox="0 0 9 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.958333 1.47526C0.567132 1.47526 0.25 1.15813 0.25 0.766927C0.25 0.375725 0.567132 0.0585938 0.958333 0.0585938H8.04167C8.43287 0.0585938 8.75 0.375725 8.75 0.766927V7.85026C8.75 8.24146 8.43287 8.55859 8.04167 8.55859C7.65046 8.55859 7.33333 8.24146 7.33333 7.85026V2.47699L1.4592 8.35113C1.18258 8.62775 0.734087 8.62775 0.457466 8.35113C0.180845 8.07451 0.180845 7.62601 0.457466 7.34939L6.3316 1.47526H0.958333Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div class="card game-updates-card ibloxx-updates-card text-start game-udpates-card-last">
                        <div className="game-update-card-img">
                          
                        <a href="https://finance.yahoo.com/news/ibloxx-raises-5-million-grow-154700559.html" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                        <img
                            src={ibloxxNewsImg3}
                            class="card-img-top"
                            alt="card image"
                          />
                        </a>

                         
                          <div className="game-update-card-line">
                            <img src={cardImageLine} alt="vector line" />
                          </div>
                        </div>
                        <div class="card-body">
                          <p className="game-update-card-date text-uppercase">
                          February 24, 2023
                          </p>

                          <a href="https://finance.yahoo.com/news/ibloxx-raises-5-million-grow-154700559.html" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                          <h5 class="card-title game-update-card-title text-uppercase">
                          IBLOXX Raises $5 Million to Grow Gaming Division
      
                          </h5>
                          </a>

                          
                          {/* <p class="card-text">
                            Lorem ipsum malesuada taciti sollicitudin sagittis
                            lacus himenaeos, ligula pulvinar porta augue ornare
                            himenaeos, leo viverra euismod risus varius mattis.
                          </p> */}

                          <a href="https://finance.yahoo.com/news/ibloxx-raises-5-million-grow-154700559.html" target="_blank" rel="noopener noreferrer" className="game-update-card-read-more text-uppercase">
                            READ MORE{" "}
                            <span className="ms-1">
                              <svg
                                width="9"
                                height="10"
                                viewBox="0 0 9 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.958333 1.47526C0.567132 1.47526 0.25 1.15813 0.25 0.766927C0.25 0.375725 0.567132 0.0585938 0.958333 0.0585938H8.04167C8.43287 0.0585938 8.75 0.375725 8.75 0.766927V7.85026C8.75 8.24146 8.43287 8.55859 8.04167 8.55859C7.65046 8.55859 7.33333 8.24146 7.33333 7.85026V2.47699L1.4592 8.35113C1.18258 8.62775 0.734087 8.62775 0.457466 8.35113C0.180845 8.07451 0.180845 7.62601 0.457466 7.34939L6.3316 1.47526H0.958333Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ibloxx for larger device  ends here*/}
      </div>
    </div>
  );
}

export default GameUpdates;
