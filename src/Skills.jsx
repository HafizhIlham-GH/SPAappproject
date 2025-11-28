import { uuseState, useEffect, useRef } from 'react'
import profile from './assets/dataMahasiswa.json'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { rowEnabler } from './Sidebar'
import './App.css'

function getBarLength(skillLevel) {
  let barLength = undefined;

  if (skillLevel === "intermediate") {
    barLength = "sixtieth";
  } else if (skillLevel === "advanced") {
    barLength = "full"
  }

  return barLength
}

function App() {
      const ref = useRef();
      
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          rowEnabler("section1");
        })
        observer.observe(ref.current);
      }, [rowEnabler])

  return (
    <>
     <section ref={ref} class="section my-services" id="section2">
        <div class="container">
          <div class="section-heading">
            <h2>Skills & Expertise</h2>
          </div>
          <div class="row">
            {profile.skills.map(
              (item) => (
                 <div key={item.id} class="col-md-6">
                  <div class="service-item">
                    <img class="service-icon" src={item.icon_url} />
                    <div class="inner-service">
                      <div class="title">
                        <b>{item.name}</b>
                        {item.is_main && <div class="ismain">Main</div>}
                      </div>
                      <div>
                        {item.years_of_experience && (
                          <span class="years">{item.years_of_experience} Years of Experience </span>)} 
                      </div>
                      <p>{item.level}</p>
                      <div className={`bar-line ${getBarLength(item.level)}`}></div>
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
