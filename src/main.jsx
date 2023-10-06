import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// Animation
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
