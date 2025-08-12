import EmailLink from '@/components/EmailLink';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="home-page">
      <header className="header">
        <h1>EndCode Ltd</h1>
        <h2>Rafal Enden</h2>
        <p className="links">
          <Link href="/projects">Projects</Link>
          <Link href="https://link.enden.com/github?from=site">GitHub</Link>
          <Link href="https://link.enden.com/linkedin?from=site">LinkedIn</Link>
          <EmailLink user="site-contact">Contact</EmailLink>
        </p>
      </header>
    </main>
  );
}
