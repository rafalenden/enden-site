'use client';

import { useState, useEffect, ReactNode } from 'react';

interface EmailLinkProps {
  user: string;
  children: ReactNode;
}

export default function EmailLink({ user, children }: EmailLinkProps) {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    setEmail(`${user}@enden.com`);
  }, [user]);

  return (
    <a 
      href={`mailto:${email}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}