import Badge from '../../ui/Badge'
import Button from '../../ui/Button'
import { useEffect, useState } from 'react'
import LiveTicker from './LiveTicker'
import ServicePicker from './ServicePicker'

export default function HeroSection({ title = 'Titip Apa Saja, Ke Mana Saja', accent = 'di Indonesia.', description = 'Terhubung dengan Jastiper lokal terverifikasi dari kota besar sampai pulau kecil. Harga terbuka, bukti lengkap, tanpa perlu bepergian sendiri.' }) {
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  useEffect(() => {
    if (!isPickerOpen) return undefined
    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => { if (event.key === 'Escape') setIsPickerOpen(false) }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isPickerOpen])
  return <section className="yt-hero" id="top"><Badge text="Jasa Titip Terverifikasi · 120+ Wilayah Indonesia" /><h1>{title} <span>{accent}</span></h1><p>{description}</p><div className="yt-hero__actions"><Button onClick={() => setIsPickerOpen(true)}>Mulai Pesan Sekarang</Button><Button href="/jastiper/daftar" variant="outline">Gabung jadi Jastiper</Button></div><LiveTicker />{isPickerOpen && <ServicePicker onClose={() => setIsPickerOpen(false)} />}</section>
}