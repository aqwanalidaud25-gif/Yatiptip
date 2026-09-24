import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import Select from '../ui/Select'

const defaultLinks = ['Beranda', 'Layanan', 'Cara Kerja', 'Cakupan', 'Jadi Mitra']

export default function Navbar({ links = defaultLinks, activeLink = 'Beranda', onMenuClick = () => {} }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)
  const handleMenuClick = () => {
    setIsMenuOpen((isOpen) => !isOpen)
    onMenuClick()
  }

  const getHref = (link) => link === 'Jadi Mitra' ? '/mitra/daftar' : `#${link.toLowerCase().replaceAll(' ', '-')}`
  return <header className={`yt-navbar${isMenuOpen ? ' is-menu-open' : ''}`}><Logo /><nav className="yt-navbar__links" aria-label="Navigasi utama">{links.map((link) => <a className={link === activeLink ? 'is-active' : ''} href={getHref(link)} key={link}>{link}</a>)}</nav><div className="yt-navbar__actions"><Select options={['Semua Wilayah', 'Jabodetabek', 'Bali', 'Makassar']} /><Button href="/operator/login">Masuk</Button></div><button className="yt-navbar__menu" type="button" aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={isMenuOpen} onClick={handleMenuClick}>{isMenuOpen ? <X /> : <Menu />}</button>{isMenuOpen && <div className="yt-navbar__mobile-panel"><nav aria-label="Navigasi mobile">{links.map((link) => <a className={link === activeLink ? 'is-active' : ''} href={getHref(link)} key={link} onClick={closeMenu}>{link}</a>)}</nav><Select label="Wilayah" options={['Semua Wilayah', 'Jabodetabek', 'Bali', 'Makassar']} /><Button href="/operator/login" className="yt-navbar__mobile-cta" onClick={closeMenu}>Masuk</Button></div>}</header>
}