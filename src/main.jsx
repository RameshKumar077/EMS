import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthProvider.jsx';
import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   <AuthProvider><App/></AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
