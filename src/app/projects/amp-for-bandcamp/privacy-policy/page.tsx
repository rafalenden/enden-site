import Link from 'next/link';

export default function AmpForBandcampPrivacyPolicy() {
  return (
    <main className="narrow-page">
      <div className="narrow-content">
        <Link href="/projects/amp-for-bandcamp" className="back-link">← Back to Amp for Bandcamp</Link>

        <h1>Privacy Policy - Amp for Bandcamp</h1>
        
        <p><strong>Last Updated:</strong> July 15, 2025</p>

        <h2>Information We Collect</h2>
        <p>Amp for Bandcamp does not collect, store, or transmit any personal information. The extension operates entirely locally on your device.</p>

        <h2>Data Storage</h2>
        <p>All extension settings and preferences are stored locally in your browser&apos;s storage. This data never leaves your device and is not accessible to us or any third parties.</p>

        <h2>Permissions</h2>
        <p>The extension requests minimal permissions necessary for operation:</p>
        <ul>
          <li><strong>Access to bandcamp.com:</strong> Required to enhance the Bandcamp website with additional functionality</li>
          <li><strong>Storage:</strong> Used to save your extension settings locally on your device</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>This extension does not integrate with any third-party analytics, tracking, or advertising services. It operates independently without external connections.</p>

        <h2>Data Security</h2>
        <p>Since no personal data is collected or transmitted, there are no data security risks associated with using this extension. All functionality is processed locally.</p>

        <h2>Children&apos;s Privacy</h2>
        <p>This extension does not collect any information from users of any age, including children under 13.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. Any changes will be reflected in the &quot;Last Updated&quot; date above.</p>

        <h2>Contact</h2>
        <p>If you have any questions about this privacy policy, please contact us through our website.</p>

        <h2>Disclaimer</h2>
        <p>Amp for Bandcamp is not affiliated with Bandcamp. It is an independent browser extension created to enhance the user experience on the Bandcamp platform.</p>
      </div>
    </main>
  );
}