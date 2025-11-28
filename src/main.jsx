import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sidebar from './Sidebar.jsx'
import Profile from './Profile.jsx'
import Skills from './Skills.jsx'
import Experiences from './Experiences.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Sidebar />
      <Profile />
      <Skills />
      <Experiences />
    </StrictMode>
)
