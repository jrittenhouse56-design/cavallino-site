import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export const metadata: Metadata={title:'Cavallino Capital | Governance & Advisory',description:'Governance advisory and board leadership expertise led by John H. Rittenhouse.',openGraph:{title:'Cavallino Capital | Governance & Advisory',description:'Boardroom clarity and investor credibility.',type:'website'}}
export default function RootLayout({children}:{children:React.ReactNode}){ return (<html lang="en"><body><NavBar/><main>{children}</main><Footer/></body></html>); }
