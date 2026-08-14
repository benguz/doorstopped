import SearchClient from './search-client';

export const metadata = {
  title: 'Change School',
  description:
    "Swipe through 1,000's of Doorstops, personalized strategies for being happier in school.",
  openGraph: {
    url: 'https://doorstopped.org/',
    title: 'Change School With Doorstops',
    description:
      "1,000's of personalized strategies for being happier in school. Swipe, play, learn, and find the perfect Doorstop.",
    images: [{ url: 'https://doorstopped.org/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Change School',
    description:
      "Swipe through 1,000's of Doorstops, personalized strategies for being happier in school.",
    images: ['https://doorstopped.org/og.jpg'],
  },
};

export default function SearchPage() {
  return <SearchClient />;
}
