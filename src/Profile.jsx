import viteLogo from '/vite.svg'
import profile from './assets/dataMahasiswa.json'
import myImage from './assets/pexels-knownasovan-57690.jpg'
import { useState, useEffect, useRef } from 'react'
import { rowEnabler } from './Sidebar'
import './App.css'

function App() {
    const ref = useRef();
    
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        rowEnabler("section3");
      })
      observer.observe(ref.current);
    }, [rowEnabler])

  return (
    <>
      <section ref={ref} class="section about-me" id="section1">
        <div class="container">
          <div class="section-heading">
            <h2>About Me</h2>
            <div class="line-dec"></div>
            <span>{profile.profile.short_bio}</span>
            <div class="horizontal-flex">
              <span>{profile.profile.location}</span>
              <span>{profile.profile.angkatan}</span>
              <span>{profile.profile.nim}</span>
            </div>
          </div>
          <img style={{ display: "block", width: "50%", height: "50%", margin: "auto" }} src={myImage} />
          <div class="left-image-post">
            <div class="row">
              <div class="col-md-6">
                <div class="left-image">
                  <img src="assets/images/left-image.jpg" alt="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="right-text">
                  <h4>My Portfolio</h4>
                  <div class="white-button">
                    <a href={profile.profile.portfolio_url}>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
