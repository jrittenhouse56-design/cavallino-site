import { notFound } from "next/navigation"

// Keep this in sync with page.tsx
const postImports = {
  "how-investors-read-governance-signals": () =>
    import("@/content/insights/how-investors-read-governance-signals.mdx"),
  "boardroom-standard-compliance-to-strategy": () =>
    import("@/content/insights/boardroom-standard-compliance-to-strategy.mdx"),
} as const

type Slug = keyof typeof postImports

export async function generateStaticParams() {
  return Object.keys(postImports).map((slug) => ({ slug }))
}

export default async function InsightPage({ params }: { params: { slug: Slug } }) {
  const loader = postImports[params.slug]
  if (!loader) return notFound()

  const mod = await loader()
  const MDX = (mod as any).default
  const meta = (mod as any).metadata || {}

  return (
    <article>
      <h1>{meta.title || params.slug}</h1>
      {meta.description ? <p style={{ color: "#6b7280" }}>{meta.description}</p> : null}
      {meta.date ? <p style={{ fontSize: ".85rem", color: "#9ca3af" }}>{meta.date}</p> : null}
      <div style={{ marginTop: "1.25rem" }}>
        <MDX />
      </div>
    </article>
  )
}
