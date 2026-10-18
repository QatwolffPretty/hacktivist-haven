import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Hacktivist Haven | Practical Cybersecurity Education',description:'Practical cybersecurity learning for adults, IT students and younger learners.',openGraph:{title:'Hacktivist Haven',description:'Practical cybersecurity education managed by Nexaris.my',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
