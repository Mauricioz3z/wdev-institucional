// Gera os HTML de /solucoes/ (hub + 1 página por segmento) e o sitemap.xml
// a partir de src/data/segments.js. Rode após editar os textos:
//   node scripts/generate-pages.mjs

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEGMENTS, SEGMENT_LIST, SITE_URL } from '../src/data/segments.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TODAY = new Date().toISOString().slice(0, 10);

const FONTS = `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />`;

function jsonLd(data) {
  return `<script type="application/ld+json">\n${JSON.stringify(data, null, 2)}\n</script>`;
}

function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, url], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      ...(url ? { item: url } : {}),
    })),
  };
}

function pageHtml({ title, description, path, segment }) {
  const url = `${SITE_URL}${path}`;
  const ldBlocks = [];

  ldBlocks.push(
    jsonLd(
      breadcrumbLd(
        segment
          ? [
              ['Início', `${SITE_URL}/`],
              ['Soluções', `${SITE_URL}/solucoes/`],
              [segment.shortLabel, null],
            ]
          : [
              ['Início', `${SITE_URL}/`],
              ['Soluções', null],
            ]
      )
    )
  );

  if (segment) {
    ldBlocks.push(
      jsonLd({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: segment.h1,
        serviceType: 'Desenvolvimento de software sob medida',
        description: segment.metaDescription,
        url,
        provider: {
          '@type': 'Organization',
          name: 'Wdev Digital',
          url: `${SITE_URL}/`,
          telephone: '+55-18-99701-8782',
        },
        areaServed: { '@type': 'Country', name: 'Brasil' },
        audience: { '@type': 'BusinessAudience', name: segment.shortLabel },
      })
    );
    ldBlocks.push(
      jsonLd({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: segment.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })
    );
  }

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#1a3a1f" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />

    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Wdev Digital" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${SITE_URL}/assets/og-cover.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${SITE_URL}/assets/og-cover.jpg" />
${FONTS}

    ${ldBlocks.join('\n    ')}
  </head>
  <body>
    <div id="app" data-segment="${segment ? segment.slug : 'index'}"></div>
    <noscript>
      <h1>${segment ? segment.h1 : 'Soluções de automação e software sob medida para o agronegócio'}</h1>
      <p>${description} Fale conosco: (18) 99701-8782 · wdevdigital.com.br</p>
    </noscript>
    <script type="module" src="/src/segment.js"></script>
  </body>
</html>
`;
}

async function writePage(relPath, html) {
  const full = join(ROOT, relPath);
  await mkdir(dirname(full), { recursive: true });
  await writeFile(full, html, 'utf8');
  console.log(`✓ ${relPath}`);
}

// Hub
await writePage(
  'solucoes/index.html',
  pageHtml({
    title: 'Soluções de Automação por Segmento do Agronegócio | Wdev',
    description:
      'Software sob medida para fazendas, pecuária, transportadoras, cooperativas, revendas de insumos e agroindústrias. Veja a solução para o seu segmento.',
    path: '/solucoes/',
    segment: null,
  })
);

// Páginas de segmento
for (const segment of SEGMENT_LIST) {
  await writePage(
    `solucoes/${segment.slug}/index.html`,
    pageHtml({
      title: segment.metaTitle,
      description: segment.metaDescription,
      path: `/solucoes/${segment.slug}/`,
      segment,
    })
  );
}

// Sitemap
const urls = [
  { loc: `${SITE_URL}/`, priority: '1.0' },
  { loc: `${SITE_URL}/solucoes/`, priority: '0.8' },
  ...SEGMENT_LIST.map((s) => ({ loc: `${SITE_URL}/solucoes/${s.slug}/`, priority: '0.8' })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

await writePage('public/sitemap.xml', sitemap);
console.log('\nConcluído. Lembre-se de rodar npm run build.');
