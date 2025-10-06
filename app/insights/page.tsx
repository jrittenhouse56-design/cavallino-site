import Link from "next/link"

// Map slugs to MDX modules (add new posts here later)
const postImports = {
  "how-investors-read-governance-signals": () =>
    import("@/content/insights/how-investors-read-governance-signals.mdx"),
  "boardroom-standard-compliance-to-strategy": () =>
    import("@/content/insights/boardroom-standard-compliance-to-strategy.mdx"),
} as const

async function getPosts() {
  const entries = await Promise.all(
    Object.entries(postImports).map(async ([slug, loader]) => {
      const mod = await loader()
      const meta = (mod as any).metadata || {}
      return {
        slug,
        title: meta.title ?? slug,
        description: meta.description ?? "",
        date: meta.date ?? "",
      }
    })
  )
  // newest first if dates present
  return entries.sort((a, b) => (b.date || "").localeCompare(a.date || ""))
}

export default async function InsightsIndex() {
  const posts = await getPosts()
  return (
    <section>
      <h1>Insights</h1>
      <p>Notes for directors and executives on governance signals and strategy.</p>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "1.25rem" }}>
        {posts.map((p) => (
          <li key={p.slug} style={{ marginBottom: "1rem" }}>
            <Link href={`/insights/${p.slug}`}>
              <strong>{p.title}</strong>
            </Link>
            {p.description ? <div style={{ color: "#6b7280" }}>{p.description}</div> : null}
            {p.date ? <div style={{ fontSize: ".85rem", color: "#9ca3af" }}>{p.date}</div> : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
