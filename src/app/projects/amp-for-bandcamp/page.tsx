import Link from 'next/link';
import Image from "next/image";

export default function Projects() {
  return (
    <main className="narrow-page">
      <div className="narrow-content">
        <Link href="/projects" className="back-link">← Back to Projects</Link>

        <h1>Amp for Bandcamp</h1>

        <div className="links">
          <Link href="https://apps.apple.com/pl/app/amp-for-bandcamp/id6745343456">Add to Safari</Link>
          <Link href="https://chromewebstore.google.com/detail/amp-for-bandcamp/gjmlgkbcolbleloakpcfhfaodldlheld">Add to Chrome</Link>
          <Link href="https://addons.mozilla.org/en-US/firefox/addon/amp-for-bandcamp/">Add to Firefox</Link>
          <Link href="https://github.com/rafenden/amp-for-bandcamp">Source Code</Link>
          <Link href="/projects/amp-for-bandcamp/privacy-policy">Privacy Policy</Link>
        </div>

        <p>Transform your Bandcamp listening experience with Amp for Bandcamp, a browser extension that adds powerful
          playback controls and UI improvements to make music discovery and listening more enjoyable.</p>

        <h2>Key Features</h2>

        <p><strong>Auto-Play Next Track</strong> - Never miss a beat with automatic track progression when songs end</p>

        <p><strong>Keyboard Shortcuts</strong> - Control playback without clicking:</p>
        <div><kbd>Space</kbd> Play/Pause</div>
        <div><kbd>↑</kbd> Previous Track</div>
        <div><kbd>↓</kbd> Next Track</div>
        <div><kbd>→</kbd> Fast Forward</div>
        <div><kbd>←</kbd> Rewind</div>

        <p><strong>Sticky Player</strong> - Keep the player visible as you scroll through album pages for easy control
          access</p>

        <p><strong>Progress Indicators</strong> - Visual progress bars on feed and discover pages show current playback
          status</p>

        <p><strong>Privacy & Permissions:</strong> This extension only works on Bandcamp.com and requires minimal
          permissions. No personal data is collected or transmitted. All settings are stored locally on your device.</p>

        <p><strong>Important Note:</strong> This extension is not affiliated with Bandcamp. It&apos;s an independent project
          designed to enhance your Bandcamp experience while respecting the original platform.</p>

        <p>Perfect for music enthusiasts who spend time discovering and listening to music on Bandcamp and want a more
          streamlined, feature-rich experience.</p>

        <Image src="/projects/amp-for-bandcamp/screenshot-1.png" alt="Screenshot 1" width="800" height="500"/>
      </div>
    </main>
  );
} 