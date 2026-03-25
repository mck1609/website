import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Ignoriert interne Next.js Dateien und statische Assets (Bilder, etc.)
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Stellt sicher, dass die Middleware für API-Routen ausgeführt wird
    '/(api|trpc)(.*)',
  ],
};
