import Link from 'next/link';

export default function Projects() {
  return (
    <main className="narrow-page">
      <div className="narrow-content">
        <h1>Projects</h1>

        <h2><a href="/projects/amp-for-bandcamp">Amp for Bandcamp</a></h2>
        <p>Browser extension that amplifies Bandcamp functionality with shortcuts, playback controls and UI improvements.</p>

        <Link href="/" className="back-link">← Back to Home</Link>
      </div>
    </main>
  );
} 