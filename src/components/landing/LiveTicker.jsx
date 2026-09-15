import { Bike, Box, Truck } from 'lucide-react'

export default function LiveTicker({ activeCount = 148, cities = ['Lombok', 'Bali', 'Batam', 'Madura'] }) {
  return <div className="yt-ticker"><span className="yt-ticker__status"><i /> {activeCount} titipan sedang jalan</span><div className="yt-ticker__route"><span><Bike size={15} /></span><span><Box size={15} /></span><span className="is-dark"><Truck size={15} /></span></div><span className="yt-ticker__cities">{cities.join(' · ')}</span></div>
}