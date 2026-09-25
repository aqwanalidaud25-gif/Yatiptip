import { useEffect, useState } from 'react'
import Button from '../../ui/Button'
import ServicePicker from './ServicePicker'
import StepCard from './StepCard'
const steps = [['Pesan lewat form', 'Pilih layanan dan wilayah, isi detail titipan.'], ['Mitra menerima', 'Jastiper terverifikasi di wilayahmu mengambil order.'], ['Setujui & bayar', 'Kamu menyetujui penawaran mitra sebelum barang dibelikan.'], ['Sampai + bukti', 'Foto struk dan serah terima masuk ke halaman order.']]

export default function HowItWorksSection() {
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

	return <section className="yt-section yt-how" id="cara-kerja"><div className="yt-how__intro"><span className="yt-label">CARA KERJA</span><h2>Empat langkah, dari niat titip sampai barang di tangan.</h2><p>Semua tahap tercatat dan bisa dipantau lewat link tracking - tidak perlu bolak-balik menanyakan kabar order.</p><Button onClick={() => setIsPickerOpen(true)}>Mulai Pesan Sekarang</Button></div><div className="yt-how__steps">{steps.map(([title, desc], index) => <StepCard key={title} number={index + 1} title={title} desc={desc} dark={index === 3} />)}</div>{isPickerOpen && <ServicePicker onClose={() => setIsPickerOpen(false)} />}</section>
}