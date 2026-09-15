export default function Badge({ text = 'Jasa Titip Terverifikasi', dot = true, variant = 'light' }) {
  return <span className={`yt-badge yt-badge--${variant}`}>{dot && <span className="yt-badge__dot" aria-hidden="true" />}{text}</span>
}