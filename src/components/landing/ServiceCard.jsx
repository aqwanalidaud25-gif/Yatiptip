import { ArrowRight, Search, ShoppingBag, Truck } from 'lucide-react'
const icons = { bag: ShoppingBag, truck: Truck, search: Search }

export default function ServiceCard({ icon = 'bag', title = 'Titip Beli', desc = 'Kamu tahu barangnya — mitra belikan lalu antar ke alamatmu.', dark = false }) {
  const Icon = typeof icon === 'string' ? icons[icon] || ShoppingBag : icon
  return <article className={`yt-service-card${dark ? ' yt-service-card--dark' : ''}`}><div className="yt-service-card__top"><span className="yt-service-card__icon"><Icon size={18} /></span><span className="yt-service-card__arrow"><ArrowRight size={14} /></span></div><h3>{title}</h3><p>{desc}</p></article>
}