import './JoinClan.css'

// import joinClanVect from '../../assets/Clan/joinclanheading.svg'
import joinClanVect from '../../assets/Clan/joinclanheading.svg'
import sicarioVect from '../../assets/Clan/sicario.svg'
import sentinalsVect from '../../assets/Clan/sentinals.svg'
import wolfGangVect from '../../assets/Clan/wolfgang.svg'
import lezdoVect from '../../assets/Clan/lezdo.svg'
import skullVect from '../../assets/Clan/skull.svg'
// import joiClanBtn from '../../assets/Clan/join-clan-btn.svg'
import joiClanBtn from '../../assets/Clan/join-clan-btn.png'

function JoinClan(){
    return(
        <div className='join-clain-container' id='Join-Clan'>

        <div class="d-flex flex-column justify-content-center  align-items-center text-center ">
        <div className="clan-text-container mb-5">
          <div className='row join-clan-header-img justify-content-center'>
            <img className='img-fluid' src={joinClanVect} alt="" />
          </div>
          <div className="mt-5">
            <p className="text-uppercase game-modes-subtitle mb-5">
            Forge Alliances, Coordinate Strategies, and Rise to Bounty-Hunting Glory as a Clan
            </p>
          </div>

          <div className='join-clain-card-container justify-content-center align-items-center text-center'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
                <div className="col">
                        <div className='d-flex flex-column justify-content-center align-items-center  text-center '>
                            <div><img src={sicarioVect} alt="" /></div>
                            <div className=' mt-5 clan-text-content'>
                            <div><p className='clan-name '>Sicario</p></div>
                            <div><p className='clan-description'>The official dev clan of StrayShot, where members get exclusive access to custom gaming sessions with the developers themselves</p></div>
                            </div>
                            
                        </div>
                </div>
                <div className="col">
                    <div className='d-flex flex-column justify-content-center '>
                            <div><img src={lezdoVect} alt="" /></div>
                            <div className=' mt-5 clan-text-content'>
                            <div><p className='clan-name'>LezDuit</p></div>
                            <div><p className='clan-description'>The premier clan for ambitious gamers aiming to dominate the competition</p></div>
                            </div>
                            
                        </div>
                </div>
                <div className="col">
                    <div className='d-flex flex-column justify-content-center '>
                            <div><img src={wolfGangVect} alt="" /></div>
                            <div className=' mt-5 clan-text-content'>
                            <div><p className='clan-name'>The Sentinels</p></div>
                            <div><p className='clan-description'>Dedicated to maximising gaming potential and community engagement. </p></div>
                            </div>
                            
                        </div>
                </div>
                <div className="col">
                    <div className='d-flex flex-column justify-content-center '>
                            <div><img src={sentinalsVect} alt="" /></div>
                            <div className=' mt-5 clan-text-content'>
                            <div><p className='clan-name'>Wolf</p></div>
                            <div><p className='clan-description'>On a mission to create a thriving community of like-minded individuals.</p></div>
                            </div>
                            
                        </div>
                </div>
              
            </div>
        </div>

       
        </div>



        <div className='d-flex justify-content-center flex-column text-center align-items-center join-clan-cta'>
            <div className='mt-1'>
                <img src={joiClanBtn} alt="join-clan-button" />
            </div>
        </div>

        

        </div>

        <div className='skull-img-left'>
            <img src={skullVect} alt="" />
        </div>

        <div className='skull-img-right'>
            <img src={skullVect} alt="" />
        </div>

        </div>
    )
}

export default JoinClan;