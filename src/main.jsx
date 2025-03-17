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
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
