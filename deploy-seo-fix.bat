@echo off
echo ===== SEO Indexing Fix Deployment Script =====
echo This script will deploy the SEO indexing fixes to Netlify

echo 1. Building optimized client code...
call npm run build:optimized

echo 2. Deploying to Netlify...
call npx netlify deploy --prod --dir=dist

echo 3. Requesting Google to recrawl your site...
echo Open this URL in your browser to request Google recrawling:
echo https://search.google.com/search-console/inspect?resource_id=sc-domain%3Adestiny33.site

echo 4. Done! Your site should now be properly indexed by search engines.
echo Monitor Google Search Console for the next few days to confirm.
