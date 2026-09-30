import { useState } from 'react'
import AuthHeader from '../components/auth/AuthHeader'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

const serviceDetails = {
  'titip-beli': { title: 'Titip Beli', prompt: 'Barang apa yang ingin dibelikan?', placeholder: 'Nama Barang, merek, ukuran, atau tautan produk' },
  'titip-antar': { title: 'Titip Antar', prompt: 'Barang apa yang ingin diantarkan?', placeholder: 'Deskripsi barang dan perkiraan ukuran' },
  'cari-barang': { title: 'Cari Barang', prompt: 'Barang apa yang sedang dicari?', placeholder: 'Nama Barang, spesifikasi, merek, atau foto referensi' },
}

export default function CustomerOrderPage({ service }) {
  const details = serviceDetails[service]
  const [showStatus, setShowStatus] = useState(false)

  if (!details) return <div className="yt-auth-page"><AuthHeader /><main className="yt-auth-card yt-order-card"><h1>Layanan tidak ditemukan</h1><p>Pilih salah satu layanan dari beranda untuk memulai permintaan.</p><Button href="/">Kembali ke Beranda</Button></main></div>

  const submit = (event) => {
    event.preventDefault()
    setShowStatus(true)
  }

  return <div className="yt-auth-page yt-order-page"><AuthHeader /><main className="yt-auth-card yt-order-card"><span className="yt-auth-kicker">PERMINTAAN LAYANAN</span><h1>{details.title}</h1><p className="yt-auth-card__subtitle">Isi detail permintaan. Kami akan mencocokkan kebutuhanmu dengan mitra yang tersedia.</p><form className="yt-order-form" onSubmit={submit}><Input label="Nama lengkap *" name="name" autoComplete="name" required /><Input label="Nomor WhatsApp *" name="phone" type="tel" inputMode="tel" placeholder="0812xxxxxxx" pattern="[0-9+ -]{8,}" required /><Input label="Email *" name="email" type="email" autoComplete="email" required /><label className="yt-field"><span className="yt-field__label">{details.prompt} *</span><textarea name="itemDetails" placeholder={details.placeholder} required /></label><div className="yt-order-form__grid"><Input label="Wilayah asal *" name="origin" placeholder="Contoh: Mataram" required /><Input label="Wilayah tujuan *" name="destination" placeholder="Contoh: Lombok Tengah" required /></div><label className="yt-field"><span className="yt-field__label">Catatan tambahan (opsional)</span><textarea name="notes" placeholder="Waktu, preferensi, atau informasi lain" /></label><Button type="submit" size="lg">Kirim Permintaan</Button>{showStatus && <p className="yt-form-notice" role="status">Form sudah valid, tetapi belum terkirim karena layanan pemesanan belum terhubung ke server. Data yang kamu isi tidak disimpan.</p>}</form></main></div>
}
