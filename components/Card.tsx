export default function Card({ title, body }: { title: string; body: string }) {
  return (
    <div style={{border:'1px solid #e5e7eb', borderRadius:'12px', padding:'1rem'}}>
      <h3 style={{margin:'0 0 .5rem', fontSize:'1.1rem'}}>{title}</h3>
      <p style={{margin:0}}>{body}</p>
    </div>
  )
}
