import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | ANO Scripts Docs',
    default: 'ANO Scripts Documentation',
  },
  description:
    'Installation guides, configuration reference and fixes for every ANO Scripts FiveM resource.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.className} dark`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{ forcedTheme: 'dark', defaultTheme: 'dark' }}>{children}</RootProvider>
      </body>
    </html>
  );
}
