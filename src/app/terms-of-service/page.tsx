import EmailLink from '@/components/EmailLink';
import type { Metadata } from "next";
import NarrowPage from "@/components/NarrowPage";

const pageTitle = 'Terms of Service';

export const metadata: Metadata = {
  title: pageTitle,
};

export default function TermsOfService() {
  return (
    <NarrowPage pageTitle={pageTitle}>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily access the materials on EndCode Ltd&apos;s website for personal, non-commercial transitory viewing only.</p>

        <h2>3. Disclaimer</h2>
        <p>The materials on EndCode Ltd&apos;s website are provided on an &apos;as is&apos; basis. EndCode Ltd makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2>4. Limitations</h2>
        <p>In no event shall EndCode Ltd or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EndCode Ltd&apos;s website.</p>

        <h2>5. Revisions and Errata</h2>
        <p>The materials appearing on EndCode Ltd&apos;s website could include technical, typographical, or photographic errors. EndCode Ltd does not warrant that any of the materials on its website are accurate, complete, or current.</p>

        <h2>6. Links</h2>
        <p>EndCode Ltd has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by EndCode Ltd of the site.</p>

        <h2>7. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of England and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>


        <h2>8. Modifications</h2>
        <p>EndCode Ltd may revise these Terms of Service at any time without notice. By using this website, you agree to be bound by the then-current version of these Terms of Service.</p>

        <h2>9. Contact Information</h2>
        <p>If you have any questions about these Terms of Service, please contact us via <EmailLink user="site-terms">email</EmailLink>.</p>
    </NarrowPage>
  );
}
