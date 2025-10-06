import Link from "next/link"

const posts = [
  {
    slug: "how-investors-read-governance-signals",
    title: "How Investors Read Governance Signals",
    description: "A pragmatic lens for boards",
    date: "2025-01-05",
  },
  {
    slug: "boardroom-standard-compliance-to-strategy",
    title: "Boardroom Standard: Compliance → Strategy",
    description: "Raising the floor and the ceiling",
    date: "2025-02-10",
  },
]

export default function InsightsIndex() {
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
            {p.description ? (
              <div style={{ color: "#6b7280" }}>{p.description}</div>
            ) : null}
            {p.date ? (
              <div style={{ fontSize: ".85rem", color: "#9ca3af" }}>{p.date}</div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
