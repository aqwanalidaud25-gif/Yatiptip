import ServiceCard from './ServiceCard'
const defaultServices = [{ icon: 'bag', title: 'Titip Beli', desc: 'Kamu tahu barangnya — mitra belikan lalu antar ke alamatmu.' }, { icon: 'truck', title: 'Titip Antar', desc: 'Barangnya sudah ada — kami pindahkan dalam kota, antar kota, atau antar pulau.' }, { icon: 'search', title: 'Cari Barang', desc: 'Kamu tahu kebutuhanmu — mitra carikan. Bayar hanya kalau barangnya ketemu.', dark: true }]

export default function ServicesGrid({ services = defaultServices }) {
  return <section className="yt-section yt-services" id="layanan"><div className="yt-section__eyebrow"><span>3 LAYANAN UTAMA</span><em>Semua berjalan di satu alur yang sama</em></div><div className="yt-services__grid">{services.map((service) => <ServiceCard {...service} key={service.title} />)}</div></section>
}