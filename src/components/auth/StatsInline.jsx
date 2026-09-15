const defaultStats = [
	['120+', 'WILAYAH'],
	['3.400', 'MITRA'],
	['100%', 'BERBUKTI'],
]

export default function StatsInline({ stats = defaultStats }) {
	return <div className="yt-stats-inline">{stats.map((stat) => {
		const [value, label] = Array.isArray(stat) ? stat : stat.split(' ')
		return <div className="yt-stat-inline" key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></div>
	})}</div>
}