'use client'

import { useState, useRef, useEffect } from "react"
import Container from "@/components/ui/Container"

import WifiIcon from '@/assets/icons/WifiIcon'
import FoodIcon from '@/assets/icons/FoodIcon'
import LuxuryIcon from '@/assets/icons/LuxuryIcon'
import HotWaterIcon from '@/assets/icons/HotWaterIcon'
import HeartIcon from '@/assets/icons/HeartIcon'
import HeartFilledIcon from '@/assets/icons/HeartFilledIcon'
import LocationIcon from '@/assets/icons/LocationIcon'
import Button from '@/components/ui/Button'

import { alojamientos } from "@/data/alojamientos"
import { useFavorites } from "@/hooks/useFavorites"
import { sortAlojamientos } from "@/utils/sortAlojamientos"

export default function AlojamientosPage() {
  const habilitado = false

  if (!habilitado) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-6">
        <div className="bg-white rounded-xl shadow-xl p-10 max-w-md w-full">
          <h1 className="text-2xl font-bold text-primary mb-4">📌 Próximamente</h1>
          <p className="text-gray-600">Esta sección estará próximamente disponible. Gracias por tu paciencia.</p>
        </div>
      </div>
    )
  }
  const [search, setSearch] = useState("")
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [randomPrices, setRandomPrices] = useState([])
  const [order, setOrder] = useState("Popularidad")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const { favorites, toggleFavorite, isFavorite } = useFavorites()
  const modalRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedHotel(null)
      }
    }
    if (selectedHotel) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [selectedHotel])

  useEffect(() => {
    const newPrices = alojamientos.map(() => ({
      price: Math.floor(Math.random() * 500) + 400,
      discount: Math.random() < 0.4 ? Math.floor(Math.random() * 30) + 10 : null
    }))
    setRandomPrices(newPrices)
  }, [])

  const alojamientosConPrecio = alojamientos.map((hotel, index) => ({
    ...hotel,
    price: randomPrices[index]?.price || 0
  }))

  const sortedHotels = sortAlojamientos(alojamientosConPrecio, order)

  const filteredHotels = sortedHotels.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase())
  )

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalf = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

    return (
      <div className="text-yellow-400 text-sm">
        {'★'.repeat(fullStars)}
        {hasHalf && <span className="inline-block w-3">✮</span>}
        {'☆'.repeat(emptyStars)}
      </div>
    )
  }

  return (
    <>
      <div className="py-8">
        <div className="relative w-full h-[220px] md:h-[260px] lg:h-[380px] overflow-hidden">
          <img
            src="/img/imagesGoMich/Alojamientos.jpg"
            srcSet="/img/imagesGoMich/Alojamientos.jpg 640w,
              /img/imagesGoMich/Alojamientos.jpg 1024w,
              /img/imagesGoMich/Alojamientos.jpg 1600w"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1024px) 100vw,
              100vw"
            alt="Alojamientos en Michoacán"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-20 text-white w-full flex flex-col justify-end">
            <div className="max-w-[1200px] 2xl:max-w-[1440px] mx-auto w-full h-full px-6 md:px-11">
              <div className="hidden lg:flex flex-col justify-end h-full pb-14">
                <h1 className="text-6xl font-onest drop-shadow-md mb-10 text-left">Alojamientos</h1>
                <div className="grid grid-cols-4 gap-x-8 text-left text-base font-onest">
                  <div><p className="text-2xl">85</p><p className="opacity-80">alojamientos registrados</p></div>
                  <div><p className="text-2xl">3,764,122</p><p className="opacity-80">viajeros hospedados</p></div>
                  <div><p className="text-2xl">245,901</p><p className="opacity-80">opiniones verificadas</p></div>
                  <div><p className="text-2xl">9.3 / 10</p><p className="opacity-80">nivel de satisfacción</p></div>
                </div>
              </div>

              <div className="py-10 lg:hidden flex-col justify-end h-full pb-20 sm:pb-16">
                <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-md mb-6 sm:mb-8 text-center sm:text-left">Alojamientos</h1>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 text-xs sm:text-sm font-onest text-center sm:text-left">
                  <div><p className="text-lg sm:text-xl">85</p><p className="opacity-80">alojamientos registrados</p></div>
                  <div><p className="text-lg sm:text-xl">3,764,122</p><p className="opacity-80">viajeros hospedados</p></div>
                  <div><p className="text-lg sm:text-xl">245,901</p><p className="opacity-80">opiniones verificadas</p></div>
                  <div><p className="text-lg sm:text-xl">9.3 / 10</p><p className="opacity-80">nivel de satisfacción</p></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="mt-6 bg-white rounded-lg shadow px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-gray-700 font-onest text-sm md:text-base">{filteredHotels.length} alojamientos en Michoacán</p>
          <div className="flex items-center gap-2">
            <div className="border rounded-full flex items-center overflow-hidden text-sm">
              <button className="px-3 py-1 bg-gray-100 text-gray-700">Cuadrícula</button>
              <span className="text-gray-400">|</span>
              <button className="px-3 py-1 text-gray-500 hover:text-gray-700">Mapa</button>
            </div>
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="border rounded-full px-4 py-1 text-sm font-onest bg-white shadow hover:bg-gray-50">
                Ordenar
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg text-sm font-onest z-50">
                  {["Popularidad", "Mejor valorado", "Novedad", "Precio (de menor a mayor)", "Precio (de mayor a menor)"].map((option, idx) => (
                    <div key={idx} onClick={() => { setOrder(option); setDropdownOpen(false) }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      <Container className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredHotels.map((hotel, i) => {
            const isFav = favorites[hotel.name] || false
            const hotelPrice = hotel.price
            const discount = randomPrices[i]?.discount

            return (
              <a href={`/alojamientos/${hotel.slug || i}`} key={i} className="block group">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden relative flex flex-col transition-all duration-300 transform hover:scale-105 active:scale-105 focus:scale-105 min-h-[480px]">
                  <div className="relative w-full h-44 overflow-hidden">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105" />
                    {discount && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-onest px-2 py-1 rounded-full shadow">
                        {discount}% OFF
                      </div>
                    )}
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(hotel.name) }} className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:scale-110 transition">
                      {isFav ? <HeartFilledIcon w={20} h={20} fill="#e11d48" /> : <HeartIcon w={20} h={20} stroke="#666" />}
                    </button>
                  </div>
                  <div className="p-4 text-left flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-bold text-primary leading-snug">{hotel.name}</h3>
                      <div className="flex items-center gap-2 text-yellow-400 text-sm">{renderStars(hotel.rating)}<span className="text-gray-500 text-xs">({hotel.rating.toFixed(1)})</span></div>
                      <p className="text-sm text-gray-600 font-onest flex items-center gap-1"><LocationIcon className="w-5 h-5 text-accent" />{hotel.municipio}</p>
                      <p className="text-xs text-gray-400 italic">{hotel.categoria}</p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{hotel.descripcion}</p>
                    </div>
                    <div className="flex items-center flex-wrap gap-3 text-xs text-gray-600 mt-3">
                      {hotel.internet && <div className="flex items-center gap-1"><WifiIcon /> Internet</div>}
                      {hotel.comida && <div className="flex items-center gap-1"><FoodIcon /> Comida</div>}
                      {hotel.lujo && <div className="flex items-center gap-1"><LuxuryIcon /> Lujo</div>}
                      {hotel.aguaCaliente && <div className="flex items-center gap-1"><HotWaterIcon /> Agua caliente</div>}
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-primary font-onest">
                        Desde <span className="text-lg">${hotelPrice}</span> MXN
                      </div>

                      <Button
                        text="Ver disponibilidad"
                        variant="accent"
                        size="sm"
                        full={false}
                        center={false}
                        onClick={(e) => {
                          e.preventDefault()
                          setSelectedHotel(hotel)
                        }}
                      />

                    </div>

                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </Container>
    </>
  )
}
