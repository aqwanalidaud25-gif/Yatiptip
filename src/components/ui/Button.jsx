import { ArrowRight } from 'lucide-react'

const buttonVariants = { primary: 'yt-button yt-button--primary', outline: 'yt-button yt-button--outline', ghost: 'yt-button yt-button--ghost' }
const buttonSizes = { md: '', lg: 'yt-button--large' }

export default function Button({ variant = 'primary', size = 'md', children = 'Mulai sekarang', icon = null, onClick, className = '', type = 'button', href }) {
  const content = <><span>{children}</span>{icon || (variant === 'ghost' ? <ArrowRight size={16} aria-hidden="true" /> : null)}</>
  const classes = `${buttonVariants[variant] || buttonVariants.primary} ${buttonSizes[size] || ''} ${className}`.trim()
  return href ? <a className={classes} href={href}>{content}</a> : <button className={classes} onClick={onClick} type={type}>{content}</button>
}