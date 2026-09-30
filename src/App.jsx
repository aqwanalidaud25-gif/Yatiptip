import LandingPage from './pages/landingpage'
import LoginPage from './pages/login'
import FreelancerRegistrationPage from './pages/freelancerRegistration'
import OperatorRegistrationPage from './pages/operatorRegistration'
import RoleLoginPage from './pages/roleLogin'

function App() {
  const path = window.location.pathname
  if (path === '/mitra/daftar') return <OperatorRegistrationPage />
  if (path === '/jastiper/daftar') return <FreelancerRegistrationPage />
  if (path === '/jastiper/login') return <RoleLoginPage role="freelancer" />
  if (path === '/operator/login' || path === '/login') return path === '/login' ? <LoginPage /> : <RoleLoginPage role="operator" />
  return <LandingPage />
}

export default App
