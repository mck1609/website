"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen text-white px-6 py-10 flex justify-center">
      <div className="max-w-2xl w-full">
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">
            Maximilian Cassis Krizmanic
          </h1>
          <p className="opacity-80">
            Freelance Broadcast Technician | Rigger | CS Student
          </p>

          <div className="mt-4 flex gap-3 items-center">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 border rounded-lg">Sign In</button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="px-4 py-2 border rounded-lg">Sign Up</button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2 border-b pb-1">About</h2>
          <p className="opacity-90">
            Computer Science Student with professional experience in live broadcast
            production and rigging.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2 border-b pb-1">Projects</h2>
          <div className="mt-3 p-4 bg-slate-800 rounded-lg">
            <h3 className="font-semibold mb-1">Personal Website</h3>
            <p className="opacity-80">
              Building a website to showcase projects and learn web development.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
