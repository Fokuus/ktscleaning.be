export async function GET() {
  const baseUrl = 'https://ktscleaning.be';
  
  const staticPages = [
    '',
    '/about',
    '/contact', 
    '/reviews',
    '/diensten/crime-scene-cleaning',
    '/diensten/gespecialiseerde-schoonmaak', 
    '/diensten/industriele-reiniging',
    '/privacybeleid',
    '/algemene-voorwaarden',
    '/bedankt'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'weekly' : page.includes('/diensten/') ? 'monthly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/diensten/') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 