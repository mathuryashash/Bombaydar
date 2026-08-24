import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/schema';

interface Crumb {
  name: string;
  url: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: 'Home', url: '/' }, ...items];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(all)) }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>
          {all.map((crumb, i) => {
            const isLast = i === all.length - 1;
            return (
              <li key={crumb.url}>
                {isLast ? (
                  <span aria-current="page">{crumb.name}</span>
                ) : (
                  <>
                    <Link href={crumb.url}>{crumb.name}</Link>
                    <span className="breadcrumb-sep" aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
