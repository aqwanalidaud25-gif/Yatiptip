import LoginForm from '../components/auth/LoginForm'
import LoginHeroPanel from '../components/auth/LoginHeroPanel'

const roleConfig = {
  freelancer: {
    badge: 'JASTIPER FREELANCE',
    title: 'Terima order titipan langsung, kelola trip perjalananmu sendiri.',
    items: ['Deklarasikan trip (asal-tujuan) supaya order yang cocok masuk ke pool kamu', 'Catat order privat dari customer WhatsApp langsung dari dashboard', 'Payout harian setelah setiap order selesai'],
  },
  operator: {
    badge: 'OPERATOR CONSOLE',
    title: 'Kelola order wilayah kamu, dari pool tersedia sampai serah terima.',
    items: ['Klaim order dari pool wilayah kamu (siapa cepat dia dapat)', 'Assign ke jastiper, upload bukti, verifikasi tuntas', 'Payout harian & laporan pendapatan mitra kamu'],
  },
}

export default function RoleLoginPage({ role = 'operator' }) {
  const config = roleConfig[role] || roleConfig.operator
  return <div className="yt-login-page yt-role-login-page"><LoginHeroPanel {...config} stats={[["100%", 'SCOPED'], ['10 mnt', 'SLA CLAIM'], ['HARIAN', 'PAYOUT']]} /><main className="yt-login-page__form-panel"><LoginForm role={role} onLogin={() => {}} /></main></div>
}
