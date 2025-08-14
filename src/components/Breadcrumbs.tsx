import Link from 'next/link';
import { Breadcrumb } from "@/types";

export default function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
  return (
    <nav className="breadcrumbs">
      <Link className="breadcrumb" href="/" aria-label="Back to home">← enden.com</Link>
      {breadcrumbs.map((crumb) => (
        <span key={crumb.href}>
          <span className="breadcrumb-separator"> / </span>
          <Link  className="breadcrumb" href={crumb.href}>{crumb.title}</Link>
        </span>
      ))}
    </nav>
  );
}
