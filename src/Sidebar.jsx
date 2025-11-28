import viteLogo from '/vite.svg'
import profile from './assets/dataMahasiswa.json'
import picture from './assets/newimage.JPG'
import { useState, useEffect, useRef } from 'react'
import './App.css'

export function rowEnabler(element) {
    const menuList = document.getElementById('menu-list').childNodes;

    Array.from(menuList).map((i) => {
      if (i.id === element) {
        i.classList.add("active");
      } else {
        i.classList.remove("active");
      }
    }) 
}

function App() {
  return (
    <>
      <div id="menu" class="menu">
        <i class="fa fa-times" id="menu-close"></i>
        <div class="container">
          <div class="image">
            <a href="#"><img src={picture} alt="" /></a>
          </div>
          <div class="author-content">
            <h4>{profile.profile.full_name}</h4>
            <span>{profile.profile.headline}</span>
            <div class=""></div>
          </div>
          <nav class="main-nav" role="navigation">
            <ul class="main-menu" id="menu-list">
              <li id="section1"><a href="#section1">Profile</a></li>
              <li id="section2"><a href="#section2">Skills</a></li>
              <li id="section3"><a href="#section3">Experiences</a></li>
            </ul>
          </nav>
          <div class="copyright-text">
            <p>Copyright 2025 Hafizh Designs</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default App