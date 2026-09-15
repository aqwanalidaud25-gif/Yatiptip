export default function Logo({ href = '#top', light = false, mark = 'leaf', className = '', ariaLabel = 'YATIPTIP beranda' }) {
  return <a className={`yt-logo${light ? ' yt-logo--light' : ''} ${className}`.trim()} href={href} aria-label={ariaLabel}><span className={`yt-logo__mark yt-logo__mark--${mark}`} aria-hidden="true"><i /><b /></span><strong>YATIPTIP</strong></a>
}