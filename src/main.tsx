import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Team from './pages/Team.tsx';
import Investors from './pages/Investors.tsx';
import Contact from './pages/Contact.tsx';
import GetStarted from './pages/GetStarted.tsx';
import RavanaOS from './pages/RavanaOS.tsx';
import './index.css';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
