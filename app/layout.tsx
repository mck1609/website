import { SpeedInsights } from "@vercel/speed-insights/next"import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Das hier hat noch gefehlt: */}
        <SpeedInsights />
      </body>
    </html>
  );
}

