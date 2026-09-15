import LoginForm from '../components/auth/LoginForm'
import LoginHeroPanel from '../components/auth/LoginHeroPanel'

export default function LoginPage() {
  return (
    <div className="yt-login-page">
      <LoginHeroPanel />
      <main className="yt-login-page__form-panel">
        <LoginForm onLogin={(data) => console.log('YATIPTIP admin login', data)} />
      </main>
    </div>
  )
}