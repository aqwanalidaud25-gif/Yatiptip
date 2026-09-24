import Badge from '../ui/Badge'
import ChecklistItem from './ChecklistItem'
import StatsInline from './StatsInline'
import Logo from '../ui/Logo'

const defaultItems = ['Quote engine dengan fee platform otomatis', 'Batch antar wilayah untuk menekan biaya antar', 'Verifikasi pembayaran & arsip bukti permanen']

export default function LoginHeroPanel({ badge = 'OPERATOR CONSOLE', title = 'Kelola order, quote, dan bukti dari satu tempat.', items = defaultItems, stats }) {
	return <section className="yt-login-hero"><Logo href="/" /><Badge text={badge} dot={false} /><h1>{title}</h1><ul>{items.map((item) => <ChecklistItem key={item}>{item}</ChecklistItem>)}</ul><StatsInline stats={stats} /></section>
}