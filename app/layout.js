import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Hendrix Studios — Independent software studio',
  description: 'Hendrix & Co. LLC is an independent software studio building focused, contemplative apps.',
  openGraph: {
    title: 'Hendrix Studios',
    description: 'Independent software studio building focused, contemplative apps.',
    url: 'https://hendrixstudios.com',
    siteName: 'Hendrix Studios',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Newsreader:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PMJN9F0TT0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PMJN9F0TT0');
          `}
        </Script>
      </body>
    </html>
  );
}
