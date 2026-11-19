import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, links } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2">
          <img src="/ano-icon.png" alt="" width={28} height={28} className="rounded-md" />
          <span className="font-extrabold tracking-wide">
            ANO <span className="ano-gradient-text">SCRIPTS</span>
          </span>
        </span>
      ),
      transparentMode: 'top',
    },
    themeSwitch: { enabled: false },
    links: [
      { text: 'Documentation', url: '/docs', active: 'nested-url' },
      { text: 'Store', url: links.store, external: true },
      { text: 'Discord', url: links.discord, external: true },
    ],
  };
}

export const siteTitle = appName;
