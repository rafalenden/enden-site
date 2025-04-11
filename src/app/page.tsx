import EmailLink from '@/components/EmailLink';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="home-page">
          <header className="header">
      <h1>EndCode Ltd</h1>
      <h2>Rafal Enden</h2>
      <p>3rd Floor, 86-90 Paul Street, London, England, EC2A 4NE</p>
      <p>VAT Number: GB248764465</p>
      <div className="links">
        <EmailLink user="site-contact">Contact</EmailLink>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
      </div>
    </header> 
    </main>
  );
}
