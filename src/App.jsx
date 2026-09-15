import LandingPage from './pages/landingpage'
import LoginPage from './pages/login'

function App() {
  return window.location.pathname === '/login' ? <LoginPage /> : <LandingPage />
}

export default App
