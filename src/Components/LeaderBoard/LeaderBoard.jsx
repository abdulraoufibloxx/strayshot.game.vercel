import './LeaderBoard.css'
import leaderBoardTitle from '../../assets/LeaderBoard/leaderboard-title.svg'
import leaderBoardLine from '../../assets/LeaderBoard/leaderboard-line.svg'
import leaderBoardScore from '../../assets/LeaderBoard/leaderboard-score.svg'
import player1 from '../../assets/LeaderBoard/player1.png'
import player2 from '../../assets/LeaderBoard/player2.png'
import strayshot from '../../assets/navbar-img.png'

function LeaderBoard(){

    return(
        <div className='leader-board-container' id='LeaderBoard'>
            
            <div className='leader-board-inner-container d-flex flex-column justify-content-center align-items-center'>
                <div className='leader-board-title'>
                    <img src={leaderBoardTitle} alt="" />
                </div>
                <div className='leader-board-score mb-5'>
                    <img className='img-fluid container leader-board-score-img' src={leaderBoardScore} alt="" />
                </div>
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

            <div className='strayshot-logo'>
                <img src={strayshot} alt="vector-line-img" />
            </div>

        </div>
    )

}


export default LeaderBoard;