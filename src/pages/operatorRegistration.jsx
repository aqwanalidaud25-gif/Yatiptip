import { useState } from 'react'
import AuthBenefits from '../components/auth/AuthBenefits'
import AuthHeader from '../components/auth/AuthHeader'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'

const benefits = [
  ['Dashboard operator profesional', 'Kelola order masuk, quote, driver, dan verifikasi pembayaran di satu tempat.'],
  ['Payout harian otomatis', 'Sistem tunggu otomatis, kamu terima settlement setiap hari tanpa harus rekap manual.'],
  ['Multi-tenant terisolasi', 'Data operator wilayahmu 100% terpisah dari operator wilayah lain.'],
  ['Support penuh saat verifikasi', 'Tim YatiPtip bantu proses onboarding, aktivasi akun, dan setup awal.'],
]

export default function OperatorRegistrationPage() {
  const [submitted, setSubmitted] = useState(false)
  const [wilayah, setWilayah] = useState('Lombok')
  const submit = (event) => { event.preventDefault(); setSubmitted(true) }
  return <div className="yt-auth-page yt-registration-page"><AuthHeader /><main className="yt-registration-layout"><section className="yt-auth-intro"><span className="yt-auth-kicker">JADI MITRA JASTIPER</span><h1>Bangun bisnis jastip di wilayahmu — sistemnya kami sediakan.</h1><p>YatiPtip membantu jastiper lokal mengelola order, penawaran, pembayaran, dan bukti dari satu dashboard. Kamu jalankan layanannya, kami urus platform-nya.</p><AuthBenefits items={benefits} /></section><form className="yt-auth-card yt-registration-card" onSubmit={submit}><h2>Daftar Sekarang</h2><p className="yt-auth-card__subtitle">Isi data di bawah, Tim YatiPtip akan verifikasi dalam 1–2 hari kerja.</p><Input label="Nama lengkap *" name="name" required /><Input label="Nomor WhatsApp *" name="phone" type="tel" placeholder="0812xxxxxxx" pattern="[0-9+ -]{8,}" required /><Input label="Email (jadi email login operator) *" name="email" type="email" placeholder="nama@email.com" required /><Select label="Wilayah layanan *" name="region" options={['Lombok', 'Bali', 'Jabodetabek', 'Makassar']} value={wilayah} onChange={(event) => setWilayah(event.target.value)} /><label className="yt-field"><span className="yt-field__label">Kenapa ingin gabung? (opsional)</span><textarea name="reason" placeholder="Ceritakan pengalaman jastip / motivasi kamu gabung" /></label><Button type="submit" size="lg">Kirim Pendaftaran</Button>{submitted && <p className="yt-form-success" role="status">Pendaftaran tersimpan. Tim YatiPtip akan menghubungi kamu.</p>}<small className="yt-auth-disclaimer">Dengan mendaftar, kamu setuju datamu diproses oleh Tim YatiPtip untuk keperluan verifikasi mitra.</small></form></main></div>
}
