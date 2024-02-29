import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Banner/Home.jsx'
import EpicAction from './Components/EpicAction/EpicAction.jsx'
import GameFeatures from './Components/GameFeatures/GameFeatures.jsx'
import JoinClan from './Components/Clan/JoinClan.jsx'
import LeaderBoard from './Components/LeaderBoard/LeaderBoard.jsx'
import GameUpdates from './Components/GameUpdates/GameUpdates.jsx'
import FAQ from './Components/FAQ/FAQ.jsx'
import DownloadCTA from './Components/download-cta/download-cta.jsx'
import Footer from './Components/Footer/Footer.jsx'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
      <Header />
      <Home />
      <EpicAction />
      <GameFeatures />
      <JoinClan />
      <LeaderBoard />
      <GameUpdates />
      <FAQ />
      <DownloadCTA />
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
