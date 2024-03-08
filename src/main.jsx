import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './Components/Banner/Home.jsx'
import TermsAndConditions from './Components/termsandconditions/termsandconditions.jsx'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'
import './clash-display.css';
import './Montage-Grunge.css';
import RedirectToGalaxe from './Components/RedirectToGalaxe.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  redirect,
  useNavigate
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/termsandconditions",
    element: <TermsAndConditions/>
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy/>
  },
  {
    path: "/game",
    element: <App/>
  },
  {
    path:"/rewards",
    element: <RedirectToGalaxe/>
  },
  {
    path:"/reward",
    element: <RedirectToGalaxe/>
  },
  {
    path: '*',
    element: <NotFound/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
