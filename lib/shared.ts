import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'ANO Scripts';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';

// ANO links: change them here, they are used everywhere on the site.
export const links = {
  store: 'https://ano-scripts.tebex.store',
  discord: 'https://discord.gg/Ab3vYufTh3',
  keymaster: 'https://keymaster.fivem.net/asset-grants',
};

// Your GitHub repository (used by the "Open in GitHub" / "Edit" buttons).
export const gitConfig = {
  user: 'aloizwinters-glitch', // TODO: your GitHub username
  repo: 'ano-docs',
  branch: 'main',
};

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
