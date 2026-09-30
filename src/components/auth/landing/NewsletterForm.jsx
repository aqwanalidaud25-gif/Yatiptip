import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function NewsletterForm({ placeholder = 'Masukkan emailmu', onSubmit = () => {} }) {
  const [feedback, setFeedback] = useState('')
  const submit = (event) => {
    event.preventDefault()
    onSubmit(event)
    setFeedback('Belum berlangganan: layanan newsletter belum terhubung ke server.')
  }
  return <><form className="yt-newsletter" onSubmit={submit}><input type="email" placeholder={placeholder} aria-label="Email newsletter" required /><button type="submit" aria-label="Kirim email"><ArrowUpRight size={18} /></button></form>{feedback && <small className="yt-newsletter__feedback" role="status">{feedback}</small>}</>
}