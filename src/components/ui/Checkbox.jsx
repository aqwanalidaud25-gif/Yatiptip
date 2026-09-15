import { Check } from 'lucide-react'

export default function Checkbox({ label = 'Ingat saya', checked = false, onChange = () => {} }) {
  return <label className="yt-checkbox"><input type="checkbox" checked={checked} onChange={onChange} /><span className="yt-checkbox__box">{checked && <Check size={13} strokeWidth={3} />}</span><span>{label}</span></label>
}