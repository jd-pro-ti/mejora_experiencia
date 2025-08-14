'use client'

import HeartIcon from '@/assets/icons/HeartIcon'
import HeartFilledIcon from '@/assets/icons/HeartFilledIcon'
import LocationIcon from '@/assets/icons/LocationIcon'
import Button from '@/components/ui/Button'
import WifiIcon from '@/assets/icons/WifiIcon'
import FoodIcon from '@/assets/icons/FoodIcon'
import LuxuryIcon from '@/assets/icons/LuxuryIcon'
import HotWaterIcon from '@/assets/icons/HotWaterIcon'
import WineIcon from '@/assets/icons/WineIcon'
import SpicyIcon from '@/assets/icons/SpicyIcon'
import AccessibilityIcon from '@/assets/icons/AccessibilityIcon'
import { TakeawayIcon } from '@/assets/icons/TakeawayIcon'
import { DeliveryIcon } from '@/assets/icons/DeliveryIcon'
import { ReservationIcon } from '@/assets/icons/ReservationIcon'
import { TerraceIcon } from '@/assets/icons/TerraceIcon'
import { ParkingIcon } from '@/assets/icons/ParkingIcon'
import { PetIcon } from '@/assets/icons/PetIcon'
import { MusicIcon } from '@/assets/icons/MusicIcon'
import { ClockIcon } from '@/assets/icons/ClockIcon'
import { Open24Icon } from '@/assets/icons/Open24Icon'

const IconList = ({ rest }) => {
  const icons = [
    { icon: <FoodIcon />, label: 'Tradicional', show: rest.tradicional },
    { icon: <WineIcon />, label: 'Bar', show: rest.bar },
    { icon: <SpicyIcon />, label: 'Picante', show: rest.picante },
    { icon: <AccessibilityIcon />, label: 'Accesible', show: rest.accesible },
    { icon: <TakeawayIcon />, label: 'Para llevar', show: rest.takeaway },
    { icon: <DeliveryIcon />, label: 'Entrega', show: rest.delivery },
    { icon: <ReservationIcon />, label: 'Reservaciones', show: rest.reservaciones },
    { icon: <TerraceIcon />, label: 'Terraza', show: rest.terraza },
    { icon: <ParkingIcon />, label: 'Parking', show: rest.estacionamiento },
    { icon: <PetIcon />, label: 'Pet friendly', show: rest.petFriendly },
    { icon: <WifiIcon />, label: 'Wi-Fi', show: rest.wifi },
    { icon: <MusicIcon />, label: 'Música', show: rest.musica },
    { icon: <ClockIcon />, label: 'Abierto ahora', show: rest.abierto },
    { icon: <Open24Icon />, label: '24h', show: rest.horario24 },
  ]

  return (
    <ul className="flex flex-wrap gap-2 mt-3">
      {icons.filter(i => i.show).map((item, index) => (
        <li key={index} tabIndex={0} className="relative group flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full cursor-default focus:outline-none focus:ring-2 focus:ring-secondary">
          {item.icon}
          <span className="absolute bottom-full mb-1 px-2 py-1 text-[10px] rounded bg-black text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition text-center whitespace-nowrap z-50 max-w-[150px]">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  )
}

const RestaurantCard = ({ rest, i, isFav, toggleFavorite, discount }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden border border-gray-100 relative hover:scale-105 active:scale-105">
      <div className="relative w-full h-44 overflow-hidden group">
        <img src={rest.image} alt={rest.name} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
        {discount && (
          <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-onest px-2 py-1 rounded-full shadow">
            {discount}% OFF
          </div>
        )}
        <button onClick={(e) => { e.stopPropagation(); toggleFavorite(rest.name) }} className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:scale-110 transition">
          {isFav ? <HeartFilledIcon w={20} h={20} fill="#e11d48" /> : <HeartIcon w={20} h={20} stroke="#666" />}
        </button>
      </div>
      <div className="p-4 text-left flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold text-primary leading-snug">{rest.name}</h3>
          <div className="flex items-center gap-2 text-yellow-400 text-sm">
            {'★'.repeat(Math.floor(rest.rating))}{rest.rating % 1 >= 0.5 && '✮'}{'☆'.repeat(5 - Math.floor(rest.rating) - (rest.rating % 1 >= 0.5 ? 1 : 0))}
            <span className="text-gray-500 text-xs">({rest.rating.toFixed(1)})</span>
          </div>
          <p className="text-sm text-gray-600 font-semibold flex items-center gap-1">
            <LocationIcon className="w-5 h-5 text-secondary" />{rest.municipio}
          </p>
          <p className="text-xs text-gray-400 italic">{rest.categoria}</p>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{rest.descripcion}</p>
        </div>
        <IconList rest={rest} />
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-primary font-onest">
            Desde <span className="text-lg">${rest.price}</span> MXN
          </div>
          <Button
            href={`/restaurantes/${rest.slug || i}`}
            text="Reservar"
            variant="secondary"
            size="sm"
            full={false}
          />
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
