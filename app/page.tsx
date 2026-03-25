"use client";

export default function Home() {
  function requestCV() {
    const email = "Maximilian-cassis@web.de";
    const subject = "CV Request - Maximilian Cassis Krizmanic";
    const body = "Hello, I would like to request your CV.";

    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function requestReferences() {
    const email = "Maximilian-cassis@web.de";
    const subject = "Reference Request - Maximilian Cassis Krizmanic";
    const body = "Hello, I would like to request your references.";

    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Maximilian Cassis Krizmanic</h1>
      <p>Freelance Broadcast Technician | Rigger | CS Student</p>

      <h2>About</h2>
      <p>
        Computer Science student with professional experience in live broadcast
        production and rigging. Worked on international projects such as Rolling
        Loud and the UEFA Women's Euro.
      </p>

      <h2>Projects</h2>
      <p>Currently building this website and integrating a NAS.</p>

      <h2>CV & References</h2>
      <button onClick={requestCV}>Request CV</button>
      <button onClick={requestReferences} style={{ marginLeft: "10px" }}>
        Request References
      </button>

      <h2>Contact</h2>
      <p>
        <a href="mailto:Maximilian-cassis@web.de">Email</a>
      </p>
      <p>
        <a href="https://www.linkedin.com" target="_blank">
          LinkedIn
        </a>
      </p>
    </main>
  );
}

