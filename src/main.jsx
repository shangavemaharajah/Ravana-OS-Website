import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Investors from './pages/Investors'
import Contact from './pages/Contact'
import GetStarted from './pages/GetStarted'
import RavanaOS from './pages/RavanaOS'
import './index.css'
import CookiePolicy from './pages/CookiePolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndCondition'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'ravanaos', element: <RavanaOS /> },
      { path: 'about', element: <About /> },
      { path: 'team', element: <Team /> },
      { path: 'investors', element: <Investors /> },
      { path: 'contact', element: <Contact /> },
      { path: 'get-started', element: <GetStarted /> },
      { path: 'cookie', element: <CookiePolicy /> },
      { path: 'privacy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <TermsAndConditions /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
