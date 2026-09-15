import NewsletterForm from '../landing/NewsletterForm'
import Logo from '../ui/Logo'

const columns = [['LAYANAN', 'Titip Beli', 'Titip Antar', 'Cari Barang', 'Batch antar wilayah'], ['MITRA', 'Jadi mitra', 'Syarat mitra', 'Buka wilayah baru', 'Panduan bukti'], ['BANTUAN', 'Cara pesan', 'Biaya & fee', 'Lacak order', 'Hubungi kami']]

export default function Footer({ copyright = '© 2026 YATIPTIP Indonesia' }) {
  return <footer className="yt-footer"><div className="yt-footer__grid"><div><Logo light /><p>Infrastruktur pendukung untuk Jastiper di seluruh Indonesia.</p><span className="yt-footer__newsletter-label">BERLANGGANAN KABAR WILAYAH BARU</span><NewsletterForm /></div>{columns.map(([title, ...items]) => <div key={title}><span className="yt-footer__label">{title}</span>{items.map((item) => <a href="#" key={item}>{item}</a>)}</div>)}</div><div className="yt-footer__bottom"><span>{copyright}</span><span>Syarat &amp; Ketentuan · Privasi</span></div></footer>
}