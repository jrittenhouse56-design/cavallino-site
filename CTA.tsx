import Link from 'next/link';
export default function CTA({text='Schedule a Confidential Conversation',href='/contact'}:{text?:string;href?:string}){ return (<section className="section" style={{background:'#F4F5F7'}}><div className="container" style={{textAlign:'center'}}><h2>Ready to discuss your boardroom needs?</h2><Link className="btn" href={href}>{text}</Link></div></section>); }
