import { ArrowUpRight } from 'lucide-react'

export default function NewsletterForm({ placeholder = 'Masukkan emailmu', onSubmit = () => {} }) {
  return <form className="yt-newsletter" onSubmit={(event) => { event.preventDefault(); onSubmit(event) }}><input type="email" placeholder={placeholder} aria-label="Email newsletter" required /><button type="submit" aria-label="Kirim email"><ArrowUpRight size={18} /></button></form>
}