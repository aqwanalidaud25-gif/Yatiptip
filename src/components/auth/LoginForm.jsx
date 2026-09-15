import { Eye, EyeOff, Info } from 'lucide-react'
import { useState } from 'react'
import Button from '../ui/Button'
import Checkbox from '../ui/Checkbox'
import Input from '../ui/Input'
import Select from '../ui/Select'

export default function LoginForm({ onLogin = (data) => console.log(data) }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [wilayah, setWilayah] = useState('Semua wilayah')
  const [rememberMe, setRememberMe] = useState(false)
  const submit = (event) => { event.preventDefault(); onLogin({ email, password, wilayah, rememberMe }) }
  return <form className="yt-login-form" onSubmit={submit}><h2>Masuk ke Console</h2><p>Akses khusus admin dan operator wilayah.</p><Input label="Email" name="email" type="email" placeholder="admin@yatiptip.id" value={email} onChange={(event) => setEmail(event.target.value)} /><Input label="Password" name="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={(event) => setPassword(event.target.value)} rightIcon={<button className="yt-input-action" type="button" aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'} onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>} /><Select label="Wilayah operasional" options={['Semua wilayah', 'Jabodetabek', 'Bali', 'Makassar']} value={wilayah} onChange={(event) => setWilayah(event.target.value)} /><div className="yt-login-form__options"><Checkbox label="Ingat saya" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} /><a href="#forgot-password">Lupa password?</a></div><Button type="submit" size="lg" className="yt-login-form__submit">Masuk</Button><small><Info size={15} /> Aktivitas admin tercatat. Semua perubahan status dan unggahan bukti memiliki jejak audit.</small></form>
}