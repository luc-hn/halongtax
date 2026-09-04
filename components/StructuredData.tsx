import { site, chapters } from '@/data/case';

// Describe the publisher and the case page, not an official provider website.
// Do not add people, aggregate ratings or legal claims without source data.
export function StructuredData() {
  const origin = site.origin;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${origin}/#publisher`,
        name: 'iMoca',
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: `${origin}/`,
        name: site.name,
        inLanguage: 'vi-VN',
        publisher: { '@id': `${origin}/#publisher` },
      },
      {
        '@type': 'WebPage',
        '@id': `${origin}/#webpage`,
        url: `${origin}/`,
        name: site.title,
        description: site.description,
        inLanguage: 'vi-VN',
        isPartOf: { '@id': `${origin}/#website` },
        mainEntity: { '@id': `${origin}/#case-article` },
      },
      {
        '@type': 'Organization',
        '@id': `${origin}/#service-provider`,
        name: 'Hạ Long Tax',
        alternateName: ['Kế toán Hạ Long', 'Kế toán thuế Hạ Long'],
        url: site.halongWebsite,
        telephone: site.halongPhone,
        logo: `${origin}${site.halongLogo}`,
      },
      {
        '@type': 'Person',
        '@id': `${origin}/#pham-quang-luong`,
        name: 'Phạm Quang Lương',
        jobTitle: 'Giám đốc',
        worksFor: { '@id': `${origin}/#service-provider` },
        description:
          'Theo thông tin iMoca cung cấp, Phạm Quang Lương là giám đốc Hạ Long Tax và người trực tiếp làm việc với iMoca.',
      },
      {
        '@type': 'Article',
        '@id': `${origin}/#case-article`,
        headline: site.title,
        description: site.description,
        inLanguage: 'vi-VN',
        author: { '@id': `${origin}/#publisher` },
        publisher: { '@id': `${origin}/#publisher` },
        mainEntityOfPage: { '@id': `${origin}/#webpage` },
        articleSection: chapters.map((chapter) => chapter.label),
        about: [
          { '@id': `${origin}/#service-provider` },
          { '@id': `${origin}/#pham-quang-luong` },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
