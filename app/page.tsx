"use client";

export default function Home() {
  const requestCV = () => {
    window.location.href = "mailto:Maximilian-cassis@web.de?subject=CV Request&body=Hello Maximilian...";
  };

  const requestReferences = () => {
    window.location.href = "mailto:Maximilian-cassis@web.de?subject=Reference Request&body=Hello Maximilian...";
  };

  return (
    <main>
      <header>
        <h1>Maximilian Cassis Krizmanic</h1>
        <p className="subheader">Freelance Broadcast Technician | Rigger | CS Student</p>
      </header>

      <section>
        <h2>About</h2>
        <p>
          Computer Science student with professional experience in live broadcast 
          production and rigging. Contributed to international projects, for example 
          Rolling Loud, the UEFA Women's Euro, ensuring stable and reliable system performance.
        </p>
      </section>

      <section>
        <h2>CV and References</h2>
        <p>If you would like a copy of my CV or references, please request them via email.</p>
        <div className="button-container">
          <button className="button" onClick={requestCV}>Request CV</button>
          <button className="button" onClick={requestReferences}>Request References</button>
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <div className="contact-links">
          <a href="mailto:Maximilian-cassis@web.de">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
