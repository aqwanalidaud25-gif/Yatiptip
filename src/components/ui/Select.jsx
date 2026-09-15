import { ChevronDown } from 'lucide-react'

export default function Select({ label = '', options = ['Semua wilayah'], value = options[0], onChange = () => {}, name }) {
  return <label className="yt-field">{label && <span className="yt-field__label">{label}</span>}<span className="yt-field__control yt-field__control--select"><select name={name} value={value} onChange={onChange}>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select><ChevronDown size={16} aria-hidden="true" /></span></label>
}