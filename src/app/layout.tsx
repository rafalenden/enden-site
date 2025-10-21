import { Metadata } from 'next';
import Link from 'next/link';

import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s – enden.com',
    default: 'Rafał Enden – enden.com',
  },
  description: 'IT consulting and bespoke software development.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body>
        {children}

        <footer className="footer">
          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
          <div className="footer-info">
            <p>
              EndCode Ltd — 3rd Floor, 86-90 Paul Street, London, England, EC2A
              4NE
              <br />
              VAT Number: GB248764465
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
