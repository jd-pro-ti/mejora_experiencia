'use client'

import { useState, useRef, useEffect } from "react"
import Container from "@/components/ui/Container"
import Button from '@/components/ui/Button'
import CardAlojamiento from '@/components/ui/CardAlojamiento'

import { alojamientos } from "@/data/alojamientos"
import { useFavorites } from "@/hooks/useFavorites"
import { sortAlojamientos } from "@/utils/sortAlojamientos"

export default function AlojamientosPage() {
  const [search, setSearch] = useState("")
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [randomPrices, setRandomPrices] = useState([])
  const [order, setOrder] = useState("Popularidad")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const { favorites, toggleFavorite } = useFavorites()
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
        {'\u2605'.repeat(fullStars)}
        {hasHalf && <span className="inline-block w-3">\u272E</span>}
        {'\u2606'.repeat(emptyStars)}
      </div>
    )
  }

  return (
    <>
      <div className="py-8">
        <div className="relative w-full h-[220px] md:h-[260px] lg:h-[380px] overflow-hidden">
          <img
            src="/img/imagesGoMich/Alojamientos.jpg"
            srcSet="/img/imagesGoMich/Alojamientos.jpg 640w, /img/imagesGoMich/Alojamientos.jpg 1024w, /img/imagesGoMich/Alojamientos.jpg 1600w"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
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
              <CardAlojamiento
                key={i}
                hotel={hotel}
                isFav={isFav}
                toggleFavorite={toggleFavorite}
                hotelPrice={hotelPrice}
                discount={discount}
                setSelectedHotel={setSelectedHotel}
                renderStars={renderStars}
              />
            )
          })}
        </div>
      </Container>
    </>
  )
}
