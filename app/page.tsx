import Card from '@/components/Card'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <section>
      <h1>Governance Intelligence Platform</h1>
      <p>We help boards turn governance signals into strategy. Former services shown on cavallinollc.com are experience only; not current offerings.</p>
      <div style={{display:'grid', gap:'1rem', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', marginTop:'1.5rem'}}>
        <Card title="Boardroom Intelligence" body="Signals synthesis, scenario planning, investor readouts." />
        <Card title="Governance Data Pipelines" body="Modernized pipelines for filings, proxy data, and market signals." />
        <Card title="Executive Communications" body="Clear, decision-useful materials for directors." />
      </div>
      <CTA href="/insights" label="Read Insights" />
    </section>
  )
}
