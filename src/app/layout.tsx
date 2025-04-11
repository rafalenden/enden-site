import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "EndCode Ltd - IT Consultancy",
  description: "EndCode Ltd - IT Consultancy",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
