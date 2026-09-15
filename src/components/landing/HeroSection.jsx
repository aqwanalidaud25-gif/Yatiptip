import Badge from '../ui/Badge'
import Button from '../ui/Button'
import LiveTicker from './LiveTicker'

export default function HeroSection({ title = 'Titip Apa Saja, Ke Mana Saja', accent = 'di Indonesia.', description = 'Terhubung dengan Jastiper lokal terverifikasi dari kota besar sampai pulau kecil. Harga terbuka, bukti lengkap, tanpa perlu bepergian sendiri.' }) {
  return <section className="yt-hero" id="top"><Badge text="Jasa Titip Terverifikasi · 120+ Wilayah Indonesia" /><h1>{title} <span>{accent}</span></h1><p>{description}</p><div className="yt-hero__actions"><Button>Mulai Pesan Sekarang</Button><Button variant="outline">Gabung jadi Jastiper</Button></div><LiveTicker /></section>
}