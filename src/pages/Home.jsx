import React from 'react'

export default function Home() {
  return (
    <section id="home" className="home">
      <header className="hero">
        <h1>Your Name</h1>
        <p>Short tagline or introduction — replace this with content from your index.html.</p>
      </header>

      <section id="about" className="about">
        <h2>About</h2>
        <p>Move your about HTML here. Remember to change class -> className and inline events to React handlers.</p>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {/* Convert each project card from your HTML into a JSX element here */}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>your.email@example.com</p>
      </section>
    </section>
  )
}