import EmailLink from '@/components/EmailLink';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="legal-content">
        <Link href="/" className="back-link">← Back to Home</Link>

        <h1>Privacy Policy</h1>

        <h2>1. Introduction</h2>
        <p>EndCode Ltd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>

        <h2>2. Information We Collect</h2>
        <p>We do not collect any personal information through our website. Our website is purely informational and does not use cookies or tracking technologies.</p>

        <h2>3. Contact Information</h2>
        <p>If you choose to contact us via email, we will only use your email address to respond to your inquiry. We do not share this information with third parties.</p>

        <h2>4. Data Security</h2>
        <p>We implement appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data.</p>

        <h2>5. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2>6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us via <EmailLink user="site-privacy">email</EmailLink>.</p>
      </div>
    </main>
  );
} 