import Button from '../ui/Button'

export default function HighlightFeatureCard({ title = 'Satu alur untuk semua layanan', desc = 'Pesan → penawaran → bayar → bukti. Persis sama untuk Titip Beli, Titip Antar, dan Cari Barang, di kota besar maupun pulau kecil.' }) {
	return <article className="yt-highlight-card"><div><h3>{title}</h3><p>{desc}</p><Button variant="primary">Lihat alurnya</Button></div><div className="yt-highlight-card__visual" aria-hidden="true"><i /><b /><em /></div></article>
}