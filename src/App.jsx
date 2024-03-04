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
import TermsAndConditions from './Components/termsandconditions/termsandconditions.jsx'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
//   {
//     path: "/epicaction",
//     element: <EpicAction/>
//   },
// ]);

function App() {
  const [count, setCount] = useState(0)



  return (
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
    
  
  )
}

export default App
