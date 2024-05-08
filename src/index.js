import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Programes from './pages/What-we-do';
import Donations from './pages/Donation';
import About from './pages/About';
import Gallery from './pages/Gallery';
import PartnersPage from './pages/Partners';
import Team from './pages/Team';
import Contact from './pages/Contact';

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
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
);

