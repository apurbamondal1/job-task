
import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import {
  RouterProvider,
} from "react-router-dom";

import AuthProvider from './AuthProvider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './Routes/Routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
     <AuthProvider>
     <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
     </AuthProvider> 
     </HelmetProvider>
  </React.StrictMode>,
)
