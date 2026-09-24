import ChecklistItem from './ChecklistItem'

export default function AuthBenefits({ items = [], className = '' }) {
  return <ul className={`yt-auth-benefits ${className}`.trim()}>{items.map(([title, description]) => <ChecklistItem key={title}><strong>{title}</strong>{description && <small>{description}</small>}</ChecklistItem>)}</ul>
}
