'use client'

import { ReactNode } from 'react';

interface EmailLinkProps {
  user: string;
  children: ReactNode;
}

export default function EmailLink({ user, children }: EmailLinkProps) {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        document.location.href = `mailto:${user}@enden.com`;
      }}
    >
      {children}
    </a>
  );
}
