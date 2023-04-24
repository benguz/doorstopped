const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc()({
  reactStrictMode: true,
  pageExtensions: ['js', 'md', 'mdoc'],
//   i18n: {
//     locales: ['en'],
//     defaultLocale: 'en'
//   },
  redirects() {
    return [
      {
        source: '/handbook',
        destination: 'https://handbook.onefact.org',
        permanent: true
      }
    ];
  },
  rewrites() {
    return [
      {
        source: '/spec',
        destination: '/spec.html'
      }
    ];
  }
});
