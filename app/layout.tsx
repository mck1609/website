import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";


export const metadata: Metadata = {
  title: 'Krizmanic Portfolio',
  icons: {
    icon: '/Background_NYC.JPG',
    apple: '/Background_NYC.JPG',
  },
}


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
        <Analytics />
      </body>
    </html>
  );
}