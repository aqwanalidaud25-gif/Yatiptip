import logoAsset from '../../assets/yatiptip-text-logo.png'

export default function Logo({ href = '#top', light = false, className = '', ariaLabel = 'YATIPTIP beranda' }) {
  return <a className={`yt-logo${light ? ' yt-logo--light' : ''} ${className}`.trim()} href={href} aria-label={ariaLabel}><img className="yt-logo__image" src={logoAsset} alt="YATIPTIP" /></a>
}