import type { Metadata } from "next";

const pageTitle = 'Projects';

export const metadata: Metadata = {
  title: `${pageTitle} — enden.com`,
  description: `${pageTitle} — enden.com`,
};

export default function Projects() {
  return (
    <main className="narrow-page">
      <div className="narrow-content">
        <h1>{pageTitle}</h1>

        <h2><a href="/projects/amp-for-bandcamp">Amp for Bandcamp</a></h2>
        <p>Browser extension that amplifies Bandcamp functionality with shortcuts, playback controls and UI improvements.</p>
      </div>
    </main>
  );
}
