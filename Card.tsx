import { ReactNode } from 'react';
export default function Card({title,children}:{title:string;children:ReactNode}){ return (<div className="card"><h3 style={{marginTop:0}}>{title}</h3><div>{children}</div></div>); }
