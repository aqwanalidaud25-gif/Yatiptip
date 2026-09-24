export default function RouteIllustrationCard({ variant = 'truck', title = 'Titip Antar', desc = 'Barang besar, antar kota & pulau' }) {
	return <article className={`yt-route-card yt-route-card--${variant}`}><div className={`yt-route-card__illustration yt-route-card__illustration--${variant}`} aria-hidden="true"><i /><b /><em /></div><span>{title}</span><p>{desc}</p></article>
}