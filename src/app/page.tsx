import EmailLink from '@/components/EmailLink';
import Link from 'next/link';
import { Logo } from '@/components/Logo';

export default function Home() {
  return (
    <main className="home-page">
      <header className="header">
        <h1>
          enden<span className="color-blue">.</span>com
        </h1>

        <Logo />

        <h2>Rafal Enden</h2>

        <div className="home-links">
          <Link href="/projects">Projects</Link>
          <Link href="https://link.enden.com/github?from=site">GitHub</Link>
          <Link href="https://link.enden.com/linkedin?from=site">LinkedIn</Link>
          <EmailLink user="site-contact">Contact</EmailLink>
        </div>
      </header>
    </main>
  );
}
