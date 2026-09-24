import { ArrowLeft, ArrowRight, Search, ShoppingBag, Truck } from 'lucide-react'

const services = [
  { icon: ShoppingBag, title: 'Titip Beli', desc: 'Kamu tahu barangnya — mitra belikan lalu antar ke alamatmu.' },
  { icon: Truck, title: 'Titip Antar', desc: 'Barangnya sudah ada — kami pindahkan dalam kota, antar kota, atau antar pulau.' },
  { icon: Search, title: 'Cari Barang', desc: 'Bayar hanya kalau barangnya ketemu. Mitra carikan di beberapa toko.', dark: true },
]

export default function ServicePicker({ onClose }) {
  return <div className="yt-service-picker" role="dialog" aria-modal="true" aria-labelledby="service-picker-title"><div className="yt-service-picker__panel"><div className="yt-service-picker__header"><button className="yt-service-picker__back" type="button" onClick={onClose} aria-label="Kembali"><ArrowLeft size={16} /></button><div><h2 id="service-picker-title">Pilih Layanan</h2><p>Semua berjalan di satu alur yang sama</p></div></div><div className="yt-service-picker__list">{services.map(({ icon: Icon, title, desc, dark }) => <button className={`yt-service-picker__card${dark ? ' is-dark' : ''}`} type="button" key={title}><span className="yt-service-picker__icon"><Icon size={20} /></span><ArrowRight className="yt-service-picker__arrow" size={17} /><span className="yt-service-picker__copy"><strong>{title}</strong><small>{desc}</small></span></button>)}</div><p className="yt-service-picker__note">Verifikasi mitra, harga terbuka, dan arsip bukti — semuanya tercatat.</p></div></div>
}
