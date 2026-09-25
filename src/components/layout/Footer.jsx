import NewsletterForm from '../auth/landing/NewsletterForm'
import Logo from '../ui/Logo'

const columns = [
  ['LAYANAN', [['Titip Beli', '#layanan'], ['Titip Antar', '#layanan'], ['Cari Barang', '#layanan'], ['Batch antar wilayah', '#cakupan']]],
  ['MITRA', [['Jadi mitra', '/mitra/daftar'], ['Syarat mitra', '/mitra/daftar'], ['Buka wilayah baru', '/mitra/daftar'], ['Panduan bukti', '#cara-kerja']]],
  ['BANTUAN', [['Cara pesan', '#cara-kerja'], ['Biaya & fee', '#jadi-mitra'], ['Lacak order', '/operator/login'], ['Hubungi kami', 'mailto:halo@yatiptip.id']]],
]

export default function Footer({ copyright = '© 2026 YATIPTIP Indonesia' }) {
  return <footer className="yt-footer"><div className="yt-footer__grid"><div><Logo href="/" light /><p>Infrastruktur pendukung untuk Jastiper di seluruh Indonesia.</p><span className="yt-footer__newsletter-label">BERLANGGANAN KABAR WILAYAH BARU</span><NewsletterForm /></div>{columns.map(([title, items]) => <div key={title}><span className="yt-footer__label">{title}</span>{items.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>)}</div><div className="yt-footer__bottom"><span>{copyright}</span><span><a href="#syarat">Syarat &amp; Ketentuan</a> · <a href="#privasi">Privasi</a></span></div></footer>
}