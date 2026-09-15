import Badge from '../ui/Badge'
import ChecklistItem from './ChecklistItem'
import StatsInline from './StatsInline'
import Logo from '../ui/Logo'
export default function LoginHeroPanel({ title = 'Kelola order, quote, dan bukti dari satu tempat.' }) { return <section className="yt-login-hero"><Logo href="#login" /><Badge text="ADMIN CONSOLE" dot={false} /><h1>{title}</h1><ul><ChecklistItem>Quote engine dengan fee platform otomatis</ChecklistItem><ChecklistItem>Batch antar wilayah untuk menekan biaya antar</ChecklistItem><ChecklistItem>Verifikasi pembayaran &amp; arsip bukti permanen</ChecklistItem></ul><StatsInline /></section> }