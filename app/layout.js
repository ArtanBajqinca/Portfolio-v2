import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Artan Bajqinca - App Developer Portfolio',
  description:
    'App & system developer based in Sweden. I have a passion for creating beautiful and functional websites and applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-700">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
