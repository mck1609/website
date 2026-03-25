"use client";

export default function Home() {
  function requestCV() {
    const email = "Maximilian-cassis@web.de";
    const subject = "CV Request - Maximilian Cassis Krizmanic";

    const body = `Hello Maximilian,

I'd like to request a copy of your CV for consideration. Please find my details below:

Name:
Company:
Reason for request:

Best regards,`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function requestReferences() {
    const email = "Maximilian-cassis@web.de";
    const subject = "Reference Request - Maximilian Cassis Krizmanic";

    const body = `Hello Maximilian,

I'd like to request references regarding your professional experience.

Name:
Company:
Position:
Reason for request:

Best regards,`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main>
      {/* HEADER */}
      <header id="home">
        <h1>Maximilian Cassis Krizmanic</h1>
        <p>Freelance Broadcast Technician | Rigger | CS Student</p>

        {/*
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contact</a>
        </nav>
        */}
      </header>

      {/* ABOUT */}
      <section id="about">
        <h2>About</h2>
        <p>
          Computer Science Student with professional experience in live
          broadcast production and rigging. Contributed to international
          projects such as Rolling Loud and the UEFA Women's Euro, ensuring
          stable and reliable system performance. Experienced in working under
          pressure and used to fast-paced environments.
        </p>
      </section>

      {/* CS PROJECTS */}
      <section id="csprojects">
        <h2>CS Projects</h2>

        <div className="contact-box">
          <h3>Project 1: Personal Website</h3>
          <p>
            Currently building a website to showcase upcoming projects,
            integrate it with my NAS, and gain experience in web development.
          </p>
        </div>
      </section>

      {/* CV + REFERENCES */}
      <section id="cv">
        <h2>CV and References</h2>
        <p>
          If you would like a copy of my CV or references, please request them
          via email.
        </p>

        <div className="button-group">
          <button className="cv-button" onClick={requestCV}>
            Request CV
          </button>

          <button className="cv-button" onClick={requestReferences}>
            Request References
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>

        <div className="contact-container">
          <div className="contact-top">
            <a
              href="mailto:Maximilian-cassis@web.de"
              className="contact-link"
            >
              E-Mail
            </a>
            <a
              href="https://instagram.com/max.imilian1609"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Instagram
            </a>
          </div>

          <a
            href="https://linkedin.com/in/Bloodwork0815"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link linkedin-link"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
