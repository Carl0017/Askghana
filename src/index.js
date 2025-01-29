import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './pages/Home/App';
import Programes from './pages/WhatWeDo/What-we-do';
import Donations from './pages/Donation/Donation';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import PartnersPage from './pages/Partners/Partners';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import Campaigns from './pages/Campaigns/App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/App",
    element: <App/>,
  },

  {
    path: "What-We-Do",
    element: <Programes/>,
  },
  
  {
    path: "Donation",
    element: <Donations/>,
  },

  {
    path: "About",
    element: <About/>,
  },

  {
    path: "Gallery",
    element: <Gallery/>,
  },

  {
    path: "Partners",
    element: <PartnersPage/>
  },

  {
    path: "our-team",
    element: <Team />
  },

  {
    path: "contact",
    element: <Contact />
  },

  {
    path: "campaigns",
    element: <Campaigns />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
);

