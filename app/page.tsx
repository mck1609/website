<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Maximilian Cassis Krizmanic</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- HEADER -->
  <header id="home">
    <h1>Maximilian Cassis Krizmanic</h1>
    <p>Freelance Broadcast Technician | Rigger | CS Student</p>

    <!--
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#cv">CV</a>
      <a href="#contact">Contact</a>
    </nav>
    -->
  </header>

  <!-- ABOUT -->
  <section id="about">
    <h2>About</h2>
    <p>
      Computer Science Student with professional experience in live broadcast production and rigging.
      Contributed to international projects such as Rolling Loud and the UEFA Women's Euro,
      ensuring stable and reliable system performance.
      Experienced in working under pressure and used to fast-paced environments.
    </p>
  </section>

  <!-- CS PROJECTS -->
  <section id="csprojects">
    <h2>CS Projects</h2>

    <div class="contact-box">
      <h3>Project 1: Personal Website</h3>
      <p>
        Currently building a website to showcase upcoming projects,
        integrate it with my NAS, and gain experience in web development.
      </p>
    </div>
  </section>

  <!-- CV + REFERENCES -->
  <section id="cv">
    <h2>CV and References</h2>
    <p>If you would like a copy of my CV or references, please request them via email.</p>

    <div class="button-group">
      <button class="cv-button" onclick="requestCV()">
        Request CV
      </button>

      <button class="cv-button" onclick="requestReferences()">
        Request References
      </button>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <h2>Contact</h2>

    <div class="contact-container">
      <div class="contact-top">
        <a href="mailto:Maximilian-cassis@web.de" class="contact-link">E-Mail</a>
        <a href="https://instagram.com/max.imilian1609" target="_blank" class="contact-link">Instagram</a>
      </div>

      <a href="https://linkedin.com/in/Bloodwork0815" target="_blank" class="contact-link linkedin-link">
        LinkedIn
      </a>
    </div>
  </section>

  <!-- SCRIPT -->
  <script>
    function requestCV() {
      const email = "Maximilian-cassis@web.de";
      const subject = "CV Request - Maximilian Cassis Krizmanic";

      const body = `Hello Maximilian,

I'd like to request a copy of your CV for consideration. Please find my details below:

Name:
Company:
Reason for request:

Best regards,`;

      window.location.href =
        `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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

      window.location.href =
        `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  </script>

</body>
</html>
