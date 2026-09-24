import LoginForm from '../components/auth/LoginForm'
import LoginHeroPanel from '../components/auth/LoginHeroPanel'

export default function LoginPage() {
  return (
    <div className="yt-login-page yt-role-login-page">
      <LoginHeroPanel badge="OPERATOR CONSOLE" title="Kelola order wilayah kamu, dari pool tersedia sampai serah terima." items={['Klaim order dari pool wilayah kamu (siapa cepat dia dapat)', 'Assign ke jastiper, upload bukti, verifikasi tuntas', 'Payout harian & laporan pendapatan mitra kamu']} stats={[["100%", 'SCOPED'], ['10 mnt', 'SLA CLAIM'], ['HARIAN', 'PAYOUT']]} />
      <main className="yt-login-page__form-panel">
        <LoginForm role="operator" onLogin={() => {}} />
      </main>
    </div>
  )
}