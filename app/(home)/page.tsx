import Link from 'next/link';
import { links } from '@/lib/shared';

const sections = [
  {
    title: 'Getting started',
    text: 'Download from Keymaster, install dependencies and start your first ANO script.',
    href: '/docs/getting-started/installation',
  },
  {
    title: 'Frameworks',
    text: 'ESX, QBCore, Qbox, QS-Core or standalone: how the built-in bridge works.',
    href: '/docs/getting-started/frameworks',
  },
  {
    title: 'Common errors',
    text: 'Escrow, entitlement, oxmysql and game build errors, with their fixes.',
    href: '/docs/getting-started/troubleshooting',
  },
  {
    title: 'Scripts',
    text: 'Configuration, exports and events for every ANO Scripts resource.',
    href: '/docs/scripts',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-20 text-center">
      <img src="/ano-icon.png" alt="ANO Scripts" width={96} height={96} className="mb-6 rounded-2xl" />
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-fd-muted-foreground">
        FiveM Resources
      </p>
      <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
        ANO Scripts <span className="ano-gradient-text">Documentation</span>
      </h1>
      <p className="mb-8 max-w-xl text-fd-muted-foreground">
        Installation guides, configuration reference and fixes for every ANO Scripts resource on
        ESX, QBCore, Qbox and QS-Core.
      </p>
      <div className="mb-16 flex flex-wrap justify-center gap-3">
        <Link href="/docs" className="ano-btn ano-btn-primary">
          Read the docs
        </Link>
        <a href={links.discord} target="_blank" rel="noreferrer" className="ano-btn ano-btn-ghost">
          Get support on Discord
        </a>
      </div>
      <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-2">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="ano-card">
            <h2 className="mb-1 font-bold">{s.title}</h2>
            <p className="text-sm text-fd-muted-foreground">{s.text}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
