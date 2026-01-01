import JsonLd from './JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/seo.config';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsSEOProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbsSEO({ items }: BreadcrumbsSEOProps) {
  const breadcrumbItems = [
    { name: 'Accueil', url: SITE_CONFIG.url },
    ...items,
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbItems)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-secondary/40 dark:text-accent/40"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {item.url && index < breadcrumbItems.length - 1 ? (
                <a
                  href={item.url}
                  className="text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <span className="text-secondary dark:text-accent font-medium">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
