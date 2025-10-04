# Cavallino Capital — Next.js + MDX Starter
Custom site aligned to your canvas with MDX Insights and CI.

## Quick Start
1. Install Node 18+
2. `npm install`
3. `npm run dev` → http://localhost:3000

## Deploy on Vercel
- Create a GitHub repo, push this project
- Import repo in Vercel → automatic deploys on push (no action file needed)

## Pages
- Home, About, Services, GIP, Case Studies, Contact, Privacy, Terms
- Insights (MDX): `/content/insights/*.mdx` → `/insights` & `/insights/[slug]`

### MDX Post Template
```mdx
export const metadata = {
  title: 'Post Title',
  description: 'Short summary',
  date: '2025-10-02',
  slug: 'post-title-slug',
  tags: ['Governance']
}

## Heading

Your content here.
```

## CI
- `.github/workflows/ci.yml` builds on push/PR
- Vercel deploy happens via Vercel’s GitHub integration

## Notes
- Colors & spacing: see `app/globals.css`
- Replace contact form `action` with your provider (Formspree, Basin, etc.)


