import { Breadcrumb } from '@/types';
import Breadcrumbs from '@/components/Breadcrumbs';

type NarrowPageProps = {
  pageTitle: string;
  breadcrumbs?: Breadcrumb[];
  children: React.ReactNode;
};

export default function NarrowPage({
  pageTitle,
  breadcrumbs = [],
  children,
}: NarrowPageProps) {
  return (
    <main className="narrow-page">
      <div className="narrow-content">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h1>{pageTitle}</h1>
        {children}
      </div>
    </main>
  );
}
