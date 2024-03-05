import './LeaderBoard.css'
import leaderBoardTitle from '../../assets/LeaderBoard/leaderboard-title.svg'
import leaderBoardLine from '../../assets/LeaderBoard/leaderboard-line.svg'
import leaderBoardVectorRight from '../../assets/LeaderBoard/right-vector.svg'
import leaderBoardVectorLeft from '../../assets/LeaderBoard/left-vector.svg'
import leaderBoardVectorBottom from '../../assets/LeaderBoard/bottom-vector.svg'
import leaderBoardTabTop from '../../assets/LeaderBoard/leaderboard-tab-btn-top.svg'
import leaderBoardScore from '../../assets/LeaderBoard/leaderboard-score.svg'
import player1 from '../../assets/LeaderBoard/player1.png'
import player2 from '../../assets/LeaderBoard/player2.png'
import strayshot from '../../assets/navbar-img.png'

function LeaderBoard(){

    const closedBeta = [
        { rank: 1, player: 'Uranium', points: 100 },
        { rank: 2, player: 'Player', points: 90 },
        { rank: 3, player: 'Player', points: 80 },
        { rank: 4, player: 'Player', points: 70 },
        { rank: 5, player: 'Player', points: 60 },
        { rank: 6, player: 'Player', points: 50 },
        { rank: 7, player: 'Player', points: 40 },
        { rank: 8, player: 'Player', points: 30 },
        { rank: 9, player: 'Player', points: 20 },
        { rank: 10, player: 'Player', points: 10 }
      ];

    const tdmData = [
        { rank: 1, player: 'billyashe', points: 606 },
        { rank: 2, player: 'tatam', points: 582 },
        { rank: 3, player: 'hatred', points: 561 },
        { rank: 4, player: 'uranium', points: 534 },
        { rank: 5, player: 'markelo', points: 507 },
        { rank: 6, player: 'gentelman', points: 483 },
        { rank: 7, player: 'inzanity', points: 435 },
        { rank: 8, player: 'niot', points: 432 },
        { rank: 9, player: 'moistsquid', points: 420 },
        { rank: 10, player: 'immafishy', points: 411 }
      ];

      const brData = [
        { rank: 1, player: 'billyashe', points: 323 },
        { rank: 2, player: 'tatam', points: 323 },
        { rank: 3, player: 'markelo', points: 315 },
        { rank: 4, player: 'gentelman', points: 279 },
        { rank: 5, player: 'niot', points: 272 },
        { rank: 6, player: 'uranium', points: 262 },
        { rank: 7, player: 'fvded', points: 256 },
        { rank: 8, player: 'bloppo', points: 233 },
        { rank: 9, player: 'oqame', points: 231 },
        { rank: 10, player: 'abyss', points: 230 }
      ];

    return(
        <div className='leader-board-container ' id='LeaderBoard'>
            
            <div className='leader-board-inner-container container d-flex flex-column justify-content-center align-items-center'>
                {/* <div className='leader-board-title'>
                    <img src={leaderBoardTitle} alt="" />
                </div> */}

                <div className='d-flex leaderboard-heading-tab'>
                    <div className="leaderboard-col row d-flex justify-content-between align-items-center w-100">
                        <div className="col-xl-2">
                            <h1 style={{fontFamily:'Montage', color: "black", fontSize: "52px"}} className='text-center'>LEADERBOARD</h1>
                        </div>
                        <div className="col-xl-10">
                            <div className="nav nav-pills mb-3 w-100 d-flex flex-row w-100 leaderboard-nav" id="pills-tab" role="tablist">
                                <div className="nav-item" role="presentation">
                                    <button className="nav-link active" id="beta-tab" data-bs-toggle="pill" data-bs-target="#beta" type="button" role="tab" aria-controls="beta" aria-selected="true">Closed Beta</button>
                                </div>
                                <div className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Rookie-League</button>
                                </div>
                                <div className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Team Deathmatch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="tab-content table-width-container" id="pills-tabContent">
                <div className="tab-pane fade" id="beta" role="tabpanel" aria-labelledby="beta-tab" tabIndex="0">
                        <div className='leaderboard-container'>
                        <table className='leaderboard-table leader-board-score'>
                            <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Player</th>
                                <th>In game rewards</th>
                            </tr>
                            </thead>
                            <tbody>
                            {closedBeta.map((row, index) => (
                                <tr key={index}>
                                <td>{row.rank}</td>
                                <td>{row.player}</td>
                                <td className='d-flex justify-content-center'>{row.points}</td>
                                </tr>
                            ))}
                            </tbody>
                                <img className='leaderboard-vector-top' src={leaderBoardVectorBottom} />
                                <img className='leaderboard-vector-right' src={leaderBoardVectorRight} />
                                <img className='leaderboard-vector-left' src={leaderBoardVectorLeft} />
                                <img className='leaderboard-vector-bottom' src={leaderBoardVectorBottom} />
                        </table>
                        </div> 
                    </div>
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                            <div className='leaderboard-container'>
                                <table className='leaderboard-table leader-board-score'>
                                <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Player</th>
                                    <th>Points</th>
                                </tr>
                                </thead>
                                <tbody>
                                {brData.map((row, index) => (
                                    <tr key={index}>
                                    <td>{row.rank}</td>
                                    <td>{row.player}</td>
                                    <td>{row.points}</td>
                                    </tr>
                                ))}
                                </tbody>
                                    <img className='leaderboard-vector-top' src={leaderBoardVectorBottom} />
                                    <img className='leaderboard-vector-right' src={leaderBoardVectorRight} />
                                    <img className='leaderboard-vector-left' src={leaderBoardVectorLeft} />
                                    <img className='leaderboard-vector-bottom' src={leaderBoardVectorBottom} />
                                </table>
                            </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                        <div className='leaderboard-container'>
                        <table className='leaderboard-table leader-board-score'>
                            <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Player</th>
                                <th>Points</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tdmData.map((row, index) => (
                                <tr key={index}>
                                <td>{row.rank}</td>
                                <td>{row.player}</td>
                                <td>{row.points}</td>
                                </tr>
                            ))}
                            </tbody>
                                <img className='leaderboard-vector-top' src={leaderBoardVectorBottom} />
                                <img className='leaderboard-vector-right' src={leaderBoardVectorRight} />
                                <img className='leaderboard-vector-left' src={leaderBoardVectorLeft} />
                                <img className='leaderboard-vector-bottom' src={leaderBoardVectorBottom} />
                        </table>
                        </div> 
                    </div>
            </div>
                
                {/* <div className='leader-board-score mb-5'>
                    <img className='img-fluid container leader-board-score-img' src={leaderBoardScore} alt="" />
                </div> */}
            </div>

            <div className='top-line'>
                <img src={leaderBoardLine} alt="vector-line-img" />
            </div>

            {/* <div className='player-1'>
                <img src={player1} alt="player-1-image" />
            </div> */}
            {/* <div className='player-2'>
                <img src={player2} alt="player-2-image" />
            </div> */}

            <div className='leaderboard-bottom-line'>
                <img src={leaderBoardLine} alt="vector-line-img" />
            </div>

            {/* <div className='strayshot-logo'>
                <img src={strayshot} alt="vector-line-img" />
            </div> */}

        </div>
    )

}


export default LeaderBoard;