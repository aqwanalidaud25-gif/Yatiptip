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
  const isFreelancer = role === 'freelancer'
  const submit = (event) => { event.preventDefault(); onLogin({ email, password, wilayah, rememberMe }) }
  return <form className="yt-login-form" onSubmit={submit}><h2>{isFreelancer ? 'Masuk Jastiper' : 'Masuk Operator'}</h2><p>{isFreelancer ? 'Akses khusus untuk jastiper freelance YatiPtip.' : 'Akses khusus staff mitra Jastiper.'}</p><Input label="Email" name="email" type="email" placeholder={isFreelancer ? 'nama@email.com' : 'operator@wilayahmu.local'} value={email} onChange={(event) => setEmail(event.target.value)} required /><Input label="Password" name="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={(event) => setPassword(event.target.value)} required rightIcon={<button className="yt-input-action" type="button" aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'} onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>} />{!isFreelancer && <Select label="Wilayah operasional" options={['Semua wilayah', 'Jabodetabek', 'Bali', 'Makassar']} value={wilayah} onChange={(event) => setWilayah(event.target.value)} /> }<div className="yt-login-form__options"><Checkbox label="Ingat saya" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} /><a href="#forgot-password">Lupa password?</a></div><Button type="submit" size="lg" className="yt-login-form__submit">Masuk</Button><a className="yt-role-switch" href={isFreelancer ? '/operator/login' : '/jastiper/login'}>Login sebagai {isFreelancer ? 'Operator' : 'Jastiper'}</a><small><Info size={15} /> Anda hanya bisa melihat dan mengelola order yang ditugaskan ke wilayah/partner Anda.</small></form>
}