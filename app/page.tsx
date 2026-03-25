"use client"
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="min-h-screen text-white px-6 py-10 flex justify-center">
      <div className="max-w-2xl w-full">

        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">
            Maximilian Cassis Krizmanic
          </h1>
          <p className="opacity-80">
            Freelance Broadcast Technician | Rigger | CS Student
          </p>

          {/* AUTH SECTION */}
          <div className="mt-4 flex gap-3 items-center">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="px-4 py-2 border rounded-lg">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="px-4 py-2 border rounded-lg">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </header>

        {/* ABOUT */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2 border-b pb-1">About</h2>
          <p className="opacity-90">
            Computer Science Student with professional experience in live broadcast
            production and rigging. Contributed to international projects such as
            Rolling Loud and the UEFA Women's Euro. Experienced working under
            pressure in fast-paced environments.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2 border-b pb-1">CS Projects</h2>

          <div className="mt-3 p-4 bg-slate-800 rounded-lg">
            <h3 className="font-semibold mb-1">Personal Website</h3>
            <p className="opacity-80">
              Building a website to showcase projects, integrate NAS features,
              and gain experience in web development.
            </p>
          </div>
        </section>

        {/* CV */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2 border-b pb-1">
            CV and References
          </h2>

          <p className="opacity-80 mb-4">
            Request via email:
          </p>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => {
                window.location.href =
                  "mailto:Maximilian-cassis@web.de?subject=CV Request"
              }}
              className="px-4 py-2 border rounded-lg"
            >
              Request CV
            </button>

            <button
              onClick={() => {
                window.location.href =
                  "mailto:Maximilian-cassis@web.de?subject=Reference Request"
              }}
              className="px-4 py-2 border rounded-lg"
            >
              Request References
            </button>
          </div>
        </section>

        {/* CONTACT */}
        <section>
          <h2 className="text-xl font-semibold mb-2 border-b pb-1">Contact</h2>

          <div className="flex flex-col gap-2 mt-3">
            <div className="flex gap-4">
              <a href="mailto:Maximilian-Cassis@web.de">E-Mail</a>
              <a href="https://instagram.com/max.imilian1609" target="_blank">
                Instagram
              </a>
            </div>

            <a href="https://linkedin.com/in/Bloodwork0815" target="_blank">
              LinkedIn
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}
