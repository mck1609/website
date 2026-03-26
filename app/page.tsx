"use client";

export default function Home() {
  const requestCV = () => {
    window.location.href =
      "mailto:Maximilian-cassis@web.de?subject=CV Request&body=Hello Maximilian,%0D%0A%0D%0AI would like to request your CV.%0D%0A%0D%0AKind regards,";
  };

  const requestReferences = () => {
    window.location.href =
      "mailto:Maximilian-cassis@web.de?subject=Reference Request&body=Hello Maximilian,%0D%0A%0D%0AI would like to request your references.%0D%0A%0D%0AKind regards,";
  };

  return (
    <main style={{ padding: "40px" }}>
      <h1>Maximilian Cassis Krizmanic</h1>
      <p>Freelance Broadcast Technician | Rigger | CS Student</p>

      <h2>About</h2>
      <p>
        Computer Science student with professional experience in live broadcast
        production and rigging.
      </p>

      <h2>Projects</h2>
      <p>Currently building this website.</p>

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
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </main>
  );
}
