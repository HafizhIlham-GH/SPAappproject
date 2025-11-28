import { useState, useEffect, useRef } from 'react'
import profile from './assets/dataMahasiswa.json'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { rowEnabler } from './Sidebar'
import './App.css'


function App() {
      const ref = useRef();
      
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          rowEnabler("section2");
        })
        observer.observe(ref.current);
      }, [rowEnabler])

  return (
    <>
      <section ref={ref}class="section my-services" id="section3">
        <div class="container">
          <div class="section-heading">
            <h2>My Experience</h2>
          </div>
          <div class="row">
            {profile.experiences.map(
              (item) => (
                 <div key={item.id} class="col-md-6">
                    <div class="experience-item">
                      <div class="header">
                        <span class="head">
                          <div class="title" style={{flexBasis: "90%"}}>{item.title}</div>
                          <div class="experience-type">{item.experience_type}</div>
                        </span>
                        <p class="subheader">{item.organization}</p>
                      </div>
                        {item.start_date && (
                         <span class="date">🗓️ {item.start_date} - 
                           {item?.end_date ? item.end_date : ' Now'}
                        </span>)}
                      <div>{item.description}</div>
                      <div class="horizontal-flex">
                        {item.technologies && item.technologies.map(
                          (tags) => (
                            <div key={tags} class="tags">
                              {tags}
                            </div>
                          )
                        )}
                      </div>
                  </div>
              </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
