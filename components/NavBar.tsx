import Link from 'next/link'

export default function NavBar() {
  return (
    <header>
      <nav className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1rem 0'}}>
        <div><Link href="/">Cavallino</Link></div>
        <div style={{display:'flex', alignItems:'center'}}>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
