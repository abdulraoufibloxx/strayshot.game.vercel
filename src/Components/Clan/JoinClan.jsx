import './JoinClan.css'

// import joinClanVect from '../../assets/Clan/joinclanheading.svg'
import joinClanVect from '../../assets/Clan/joinclanheading.svg'
import sicarioVect from '../../assets/Clan/sicario.svg'
import sentinalsVect from '../../assets/Clan/sentinals.svg'
import wolfGangVect from '../../assets/Clan/wolfgang.svg'
import lezdoVect from '../../assets/Clan/lezdo.svg'
import skullVect from '../../assets/Clan/skull.svg'
import joiClanBtn from '../../assets/Clan/join-clan-btn.svg'
// import joiClanBtn from '../../assets/Clan/join-clan-btn.png'

function JoinClan(){
    return(
        <div className='join-clain-container' id='Join-Clan'>

        <div class="d-flex flex-column justify-content-center  align-items-center text-center ">
        <div className="clan-text-container ">
          <div className='row join-clan-header-img justify-content-center'>
            <div className='join-clan-header-container'>
                <h3 className="join-clan-header">JOIN A CLAN</h3>
            </div>
          </div>
          <div className="my-5">
            <p className="text-uppercase game-modes-subtitle">
            Challenge your skills and teamwork to the max in collaborative battles against rival clans.
            </p>
          </div>

          <div className='join-clain-card-container container justify-content-center align-items-center text-center'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
                <div className="col">
                        <div className='clan-container d-flex flex-column justify-content-center align-items-center  text-center '>
                            <div><img src={sicarioVect} alt="Sicario Clan Image" /></div>
                            <div className='clan-text-content'>
                            <div><p className='clan-name '>Sicario</p></div>
                            <div><p className='clan-description'>The official dev clan of StrayShot, where members get exclusive access to custom gaming sessions with the developers themselves.</p></div>
                            </div>
                            
                        </div>
                </div>
                <div className="col">
                    <div className='clan-container d-flex flex-column justify-content-center '>
                            <div><img src={lezdoVect} alt="lezdo Clan Image" /></div>
                            <div className='clan-text-content'>
                            <div><p className='clan-name'>LezDuit</p></div>
                            <div><p className='clan-description'>The premier clan for ambitious gamers aiming to dominate the competition.</p></div>
                            </div>
                            
                        </div>
                </div>
                <div className="col">
                    <div className='clan-container d-flex flex-column justify-content-center '>
                            <div><img src={sentinalsVect} alt="Sentinals Clan Image" /></div>
                            <div className='clan-text-content'>
                            <div><p className='clan-name'>The Sentinels</p></div>
                            <div><p className='clan-description'>Dedicated to maximising gaming potential and community engagement. </p></div>
                            </div>
                            
                        </div>
                </div>
                <div className="col">
                    <div className='clan-container d-flex flex-column justify-content-center '>
                            <div><img src={wolfGangVect} alt="WolfGang Clan Image" /></div>
                            <div className='clan-text-content'>
                            <div><p className='clan-name'>WolfGang</p></div>
                            <div><p className='clan-description'>On a mission to create a thriving community of like-minded individuals.</p></div>
                            </div>
                            
                        </div>
                </div>
              
            </div>
        </div>

       
        </div>



        <div className='d-flex justify-content-center flex-column text-center align-items-center join-clan-cta'>
            <div className='mt-3 mb-5'>
                <a href="https://discord.com/invite/Strayshot" target="_blank" rel="noopener noreferrer"> <img className='join-clan-button' src={joiClanBtn} alt="join-clan-button" /></a>
            </div>
        </div>

        

        </div>

        <div className='skull-img-left'>
            <img src={skullVect} alt="skull vector image" />
        </div>

        <div className='skull-img-right'>
            <img src={skullVect} alt="skull vector image" />
        </div>

        </div>
    )
}

export default JoinClan;
