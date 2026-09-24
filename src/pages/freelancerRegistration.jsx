import { useState } from 'react'
import AuthBenefits from '../components/auth/AuthBenefits'
import AuthHeader from '../components/auth/AuthHeader'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import UploadField from '../components/auth/UploadField'

const benefits = [
  ['Verifikasi KTP wajib', 'untuk keamanan customer & operator.'],
  ['Fee platform 10%', 'sama dengan operator wilayah.'],
  ['Payout harian', 'ke rekening Anda.'],
  ['Kalau ada dispute', 'YatiPtip cover dulu — recovery dilakukan lewat payout.'],
]

export default function FreelancerRegistrationPage() {
  const [submitted, setSubmitted] = useState(false)
  const [region, setRegion] = useState('Lombok')
  const submit = (event) => { event.preventDefault(); setSubmitted(true) }
  return <div className="yt-auth-page yt-registration-page"><AuthHeader /><main className="yt-registration-layout yt-registration-layout--freelance"><section className="yt-auth-intro"><h1>Freelance langsung ke YatiPtip.</h1><p>Punya rute perjalanan rutin atau one-off? Deklarasikan trip Anda, ambil order yang searah, dapatkan komisi. Tidak perlu bergabung dengan operator wilayah.</p><div className="yt-auth-benefit-card"><AuthBenefits items={benefits} /></div></section><form className="yt-auth-card yt-registration-card" onSubmit={submit}><Input label="Nama Lengkap (sesuai KTP) *" name="name" required /><Input label="No. WhatsApp Aktif *" name="phone" type="tel" placeholder="0812xxxxxxx" pattern="[0-9+ -]{8,}" required /><Input label="Email (untuk login) *" name="email" type="email" required /><Select label="Wilayah kerja utama *" name="region" options={['Lombok', 'Bali', 'Mataram', 'Jabodetabek']} value={region} onChange={(event) => setRegion(event.target.value)} /><Input label="NIK (16 digit) *" name="nik" placeholder="16 digit angka" pattern="[0-9]{16}" maxLength={16} required /><div className="yt-upload-grid"><UploadField label="Foto KTP" name="ktp" /><UploadField label="Selfie Holding KTP" name="selfie" /></div><span className="yt-form-section-label">REKENING PAYOUT</span><div className="yt-form-grid"><Select label="Bank" name="bank" options={['BCA', 'BRI', 'Mandiri', 'BNI']} /><Input label="No. Rekening" name="account" inputMode="numeric" /></div><Input label="Atas Nama (sesuai buku tabungan)" name="accountName" /><label className="yt-field"><span className="yt-field__label">Alasan bergabung (opsional)</span><textarea name="reason" placeholder="Ceritakan singkat — mis. rute rutin Mataram–Bali tiap minggu..." /></label><Button type="submit" size="lg">Daftar sebagai Jastiper Freelance</Button>{submitted && <p className="yt-form-success" role="status">Pendaftaran tersimpan. Tim YatiPtip akan memverifikasi data kamu.</p>}<small className="yt-auth-disclaimer">Dengan mendaftar, Anda setuju YatiPtip melakukan verifikasi KTP untuk keamanan.</small></form></main></div>
}
