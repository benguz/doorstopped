// @ts-check
const fs = require('fs');
const path = require('path');

/**
 * The legacy site lives in public/ as plain .html files. These rewrites give
 * them the same pretty URLs Netlify served them under (/about -> about.html,
 * /doorstops -> doorstops/index.html), so every legacy URL keeps working while
 * pages are converted to React routes one at a time. A converted route in app/
 * automatically wins over the rewrite (rewrites run only when no route or
 * static file matches).
 */
function legacyDirectoryIndexRewrites() {
  const publicDir = path.join(__dirname, 'public');
  const rewrites = [];
  const walk = dir => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const full = path.join(dir, entry.name);
        if (fs.existsSync(path.join(full, 'index.html'))) {
          const urlPath = '/' + path.relative(publicDir, full).split(path.sep).join('/');
          rewrites.push({ source: urlPath, destination: `${urlPath}/index.html` });
        }
        walk(full);
      }
    }
  };
  walk(publicDir);
  return rewrites;
}

/** @type {import('next').NextConfig} */
module.exports = {
  turbopack: { root: __dirname },
  async headers() {
    // mirrors public/_headers: Netlify header rules don't reliably apply to
    // responses served through the Next runtime, so the embed CSP for
    // /dashboard is declared here too
    return [
      {
        source: '/dashboard',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "frame-ancestors 'self' https://benguzovsky.com https://blog.benguzovsky.com",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      fallback: [
        { source: '/', destination: '/index.html' },
        // /images/ was a byte-for-byte duplicate of /assets/images/; the
        // duplicated files were removed and fall back to the canonical copies
        // (files still physically in public/images/ are served normally)
        { source: '/images/:path*', destination: '/assets/images/:path*' },
        ...legacyDirectoryIndexRewrites(),
        // generic pretty-URL fallback: /foo -> /foo.html
        { source: '/:path*', destination: '/:path*.html' },
      ],
    };
  },
};
