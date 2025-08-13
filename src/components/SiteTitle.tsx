'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SiteTitle() {
  const pathname = usePathname();

  // Don't show on homepage
  if (pathname === '/') {
    return null;
  }

  return (
    <div className="site-title-wrapper">
      <div className="site-title-content">
        <Link className="site-title" href="/" aria-label="Back to home">← enden.com</Link>
      </div>
    </div>
  );
}
