# ANO Docs : guide (Fumadocs + GitHub + Vercel)

## Tester sur ton PC

Dans ce dossier (`ano-docs`), ouvre un terminal :

```
npm run dev
```

Puis va sur http://localhost:3000. Chaque modification d'un fichier `.mdx` s'affiche tout de suite.

## À modifier avant de mettre en ligne

Dans `lib/shared.ts` :
- `links.store` : l'URL de ton store Tebex
- `gitConfig.user` : ton pseudo GitHub

## Ajouter / modifier des pages

- Les pages sont dans `content/docs/`, en Markdown (`.mdx`).
- Pour un nouveau script : copie `content/docs/scripts/example-script.mdx`, renomme-le (ex. `ano-garage.mdx`), puis ajoute `"ano-garage"` dans `content/docs/scripts/meta.json` et une carte dans `content/docs/scripts/index.mdx`.
- L'ordre du menu se règle dans les fichiers `meta.json`.
- Composants dispo : `<Callout>`, `<Cards>/<Card>`, `<Steps>/<Step>`, `<Tabs>/<Tab>`, `<Accordions>/<Accordion>` (exemples dans les pages existantes).

## Mettre en ligne (une seule fois)

### 1. GitHub
1. Crée un compte sur https://github.com puis un dépôt **ano-docs** (Private ou Public, peu importe). Ne coche rien (pas de README).
2. Dans ce dossier, ouvre un terminal :
   ```
   git init
   git add .
   git commit -m "ANO docs"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/ano-docs.git
   git push -u origin main
   ```

### 2. Vercel
1. Va sur https://vercel.com → **Sign up with GitHub** (offre Hobby, gratuite).
2. **Add New → Project** → choisis `ano-docs` → **Deploy**. Aucun réglage à changer (Next.js est détecté).
3. Après ~1 minute, ton site est en ligne sur `ano-docs.vercel.app`.

### 3. Ton domaine (optionnel)
1. Dans Vercel : projet → **Settings → Domains** → ajoute `docs.ano-scripts.com`.
2. Vercel t'indique un enregistrement **CNAME** (`docs` → `cname.vercel-dns.com`) à ajouter chez ton registrar (OVH, Cloudflare, Hostinger…).
3. Le HTTPS est activé automatiquement.

## Mettre à jour ensuite

Modifie tes pages, puis :

```
git add .
git commit -m "update docs"
git push
```

Vercel republie le site tout seul en ~1 minute.

## Lien sur Tebex

Dans le Storefront, bloc **Header**, mets le lien **Documentation** vers ton URL (`https://ano-docs.vercel.app` ou `https://docs.ano-scripts.com`).
