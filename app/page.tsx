"use client";

export default function Home() {
  function requestCV() {
    const email = "Maximilian-cassis@web.de";
    const subject = "CV Request - Maximilian Cassis Krizmanic";
    const body = "Hello, I would like to request your CV.";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function requestReferences() {
    const email = "Maximilian-cassis@web.de";
    const subject = "Reference Request - Maximilian Cassis Krizmanic";
    const body = "Hello, I would like to request your references.";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main>
      <header>
        <h1>Maximilian Cassis Krizmanic</h1>
        <p className="subheader">Freelance Broadcast Technician | Rigger | CS Student</p>
      </header>

      <section>
        <h4>About</h4>
        <p className="about-text">
          Computer Science student with professional experience in live broadcast
          production and rigging. Worked on international projects such as Rolling
          Loud and the UEFA Women's Euro.
        </p>
      </section>

      <section>
        <h4>Projects</h4>
        <p>Currently building this website and integrating a NAS.</p>
      </section>

      <section>
        <h4>CV & References</h4>
        <div className="button-container">
          <button className="button" onClick={requestCV}>Request CV</button>
          <button className="button" onClick={requestReferences}>Request References</button>
        </div>
      </section>

      <section>
        <h4>Contact</h4>
        <div className="contact-links">
          <a href="mailto:Maximilian-cassis@web.de">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
