import { Eye, EyeOff, Info } from 'lucide-react'
import { useState } from 'react'
import Button from '../ui/Button'
import Checkbox from '../ui/Checkbox'
import Input from '../ui/Input'
import Select from '../ui/Select'

export default function LoginForm({ role = 'operator', onLogin = () => {} }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [wilayah, setWilayah] = useState('Semua wilayah')
  const [rememberMe, setRememberMe] = useState(false)
  const [feedback, setFeedback] = useState('')
  const isFreelancer = role === 'freelancer'
  const isConsole = role === 'console'
  const submit = (event) => { event.preventDefault(); onLogin({ email, password, wilayah, rememberMe }); setFeedback('Login belum tersedia karena autentikasi belum terhubung ke server. Data tidak dikirim.') }
  const title = isFreelancer ? 'Masuk Jastiper' : isConsole ? 'Masuk ke Console' : 'Masuk Operator'
  const subtitle = isFreelancer ? 'Akses khusus untuk jastiper freelance YatiPtip.' : isConsole ? 'Akses khusus admin dan operator wilayah.' : 'Akses khusus staff mitra Jastiper.'
  const emailPlaceholder = isFreelancer ? 'nama@email.com' : isConsole ? 'admin@yatiptip.id' : 'operator@wilayahmu.local'
  const note = isConsole ? 'Aktivitas admin tercatat. Semua perubahan status dan unggahan bukti memiliki jejak audit.' : 'Anda hanya bisa melihat dan mengelola order yang ditugaskan ke wilayah/partner Anda.'
  return <form className="yt-login-form" onSubmit={submit}><h2>{title}</h2><p>{subtitle}</p><Input label="Email" name="email" type="email" placeholder={emailPlaceholder} value={email} onChange={(event) => setEmail(event.target.value)} required /><Input label="Password" name="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={(event) => setPassword(event.target.value)} required rightIcon={<button className="yt-input-action" type="button" aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'} onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>} />{!isFreelancer && <Select label="Wilayah operasional" options={['Semua wilayah', 'Jabodetabek', 'Bali', 'Makassar']} value={wilayah} onChange={(event) => setWilayah(event.target.value)} /> }<div className="yt-login-form__options"><Checkbox label="Ingat saya" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} /><button className="yt-login-form__forgot" type="button" onClick={() => setFeedback('Reset password belum tersedia karena layanan autentikasi belum terhubung.')}>Lupa password?</button></div><Button type="submit" size="lg" className="yt-login-form__submit">Masuk</Button>{feedback && <p className="yt-login-form__feedback" role="status">{feedback}</p>}{isConsole ? <div className="yt-login-form__role-options"><a href="/operator/login">Login sebagai Operator</a><a href="/jastiper/login">Login sebagai Jastiper</a></div> : <a className="yt-role-switch" href={isFreelancer ? '/operator/login' : '/jastiper/login'}>Login sebagai {isFreelancer ? 'Operator' : 'Jastiper'}</a>}<small><Info size={15} /> {note}</small></form>
}