import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx'
import Navbar from './Navbar.jsx';
import Owner from './Owner.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <Home />
    </>
  },
  {
    path: '/owner',
    element: <>
      <Navbar />
      <Owner />
    </>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
