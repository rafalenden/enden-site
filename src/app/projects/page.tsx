import type { Metadata } from 'next';
import NarrowPage from '@/components/NarrowPage';

const pageTitle = 'Projects';

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Projects() {
  return (
    <NarrowPage pageTitle={pageTitle}>
      <h2>
        <a href="/projects/amp-for-bandcamp">Amp for Bandcamp</a>
      </h2>
      <p>
        Browser extension that amplifies Bandcamp functionality with shortcuts,
        playback controls and UI improvements.
      </p>
    </NarrowPage>
  );
}
