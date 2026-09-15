import { ArrowRight } from 'lucide-react'

const buttonVariants = { primary: 'yt-button yt-button--primary', outline: 'yt-button yt-button--outline', ghost: 'yt-button yt-button--ghost' }
const buttonSizes = { md: '', lg: 'yt-button--large' }

export default function Button({ variant = 'primary', size = 'md', children = 'Mulai sekarang', icon = null, onClick, className = '', type = 'button' }) {
  return <button className={`${buttonVariants[variant] || buttonVariants.primary} ${buttonSizes[size] || ''} ${className}`.trim()} onClick={onClick} type={type}><span>{children}</span>{icon || (variant === 'ghost' ? <ArrowRight size={16} aria-hidden="true" /> : null)}</button>
}