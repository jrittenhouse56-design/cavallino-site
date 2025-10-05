import Link from 'next/link'

export default function CTA({ href, label }: { href: string; label: string }) {
  return <Link href={href} className="btn">{label}</Link>
}
