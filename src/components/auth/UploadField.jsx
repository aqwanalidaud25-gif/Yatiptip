import { Upload } from 'lucide-react'
import { useState } from 'react'

export default function UploadField({ label, name }) {
  const [fileName, setFileName] = useState('')
  const handleChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!['image/jpeg', 'image/png'].includes(file.type) || file.size > 5 * 1024 * 1024) {
      event.target.value = ''
      setFileName('File JPG/PNG maksimal 5MB')
      return
    }
    setFileName(file.name)
  }
  return <label className="yt-upload-field"><span className="yt-field__label">{label} <b>*</b></span><input name={name} type="file" accept="image/jpeg,image/png" onChange={handleChange} required /><span className="yt-upload-field__box"><Upload size={18} /><strong>{fileName || 'Klik untuk upload'}</strong><small>{fileName ? 'File siap diverifikasi' : 'JPG/PNG - max 5MB'}</small></span></label>
}
