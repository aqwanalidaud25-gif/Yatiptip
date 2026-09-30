import { ShieldCheck } from 'lucide-react'
import { useEffect, useState } from 'react'
import Button from '../../ui/Button'
import ServicePicker from './ServicePicker'

export default function CTABanner() {
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

	const chooseService = (service) => { window.location.assign(`/pesan/${service}`) }
	return <section className="yt-cta" id="jadi-mitra"><h2>Wilayahmu belum ada di daftar?</h2><p>Daftar sebagai mitra wilayah — kamu jalankan layanan di daerahmu, kami sediakan sistem order, quote, dan buktinya.</p><div><Button href="/mitra/daftar">Daftar sebagai Mitra</Button><Button onClick={() => setIsPickerOpen(true)} variant="outline">Mulai Pesan Sekarang</Button></div><small><ShieldCheck size={13} /> Pembayaran terverifikasi admin · bukti tersimpan permanen</small>{isPickerOpen && <ServicePicker onClose={() => setIsPickerOpen(false)} onSelect={chooseService} />}</section>
}