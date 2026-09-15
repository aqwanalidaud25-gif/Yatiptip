import { Camera, Handshake, Route, ShieldCheck } from 'lucide-react'
const icons = { shield: ShieldCheck, camera: Camera, route: Route, handshake: Handshake }

export default function FeatureCard({ title = 'Mitra terverifikasi', desc = 'Mitra di setiap wilayah melewati proses verifikasi.', icon = 'shield', dark = false }) { const Icon = icons[icon] || ShieldCheck; return <article className={`yt-feature-card${dark ? ' yt-feature-card--dark' : ''}`}><Icon size={21} /><h3>{title}</h3><p>{desc}</p></article> }