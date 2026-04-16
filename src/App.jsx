import React from 'react'
import './App.css'
import KnurledButton from './components/KnurledButton'

function App() {
  return (
    <div className="app-container">
      <header className="logo-header">
        <div className="logo-text"><span>L U </span>X</div>
      </header>

      <main className="main-content">
        <section className="left-section">
          <div className="hero-description">
            <h1>Sculpting space with shadow and light.</h1>
            <p>
              We are a premier lighting architecture firm dedicated to transforming 
              environments. By merging technical precision with <span>minimalist design</span>, 
              we orchestrate illumination that elevates human experience.
            </p>
          </div>
        </section>

        <section className="right-section">
          <KnurledButton />
        </section>
      </main>
    </div>
  )
}

export default App
