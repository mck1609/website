import type { Metadata } from "next"; // All imports at the top
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// 1. Define your Metadata here
export const metadata: Metadata = {
  title: 'Your Site Name',
  icons: {
    icon: '/Background_NYC.JPG',      // Tab Icon
    apple: '/Background_NYC.JPG',     // Favorites/Bookmark Preview
    shortcut: '/Background_NYC.JPG',  // Extra compatibility
  },
}

// 2. Then your Layout function
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}