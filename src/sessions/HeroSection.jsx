'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { getWeatherIcon } from '@/utils/getWeatherIcon'

const HeroSection = () => {
  const weatherRef = useRef()

  useEffect(() => {
    const getWeather = async (lat, lon) => {
      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        const data = await res.json()
        const temp = Math.round(data.current_weather.temperature)
        const icon = getWeatherIcon(data.current_weather.weathercode)
        if (weatherRef.current) weatherRef.current.innerText = `${icon} ${temp}°C`
      } catch {
        if (weatherRef.current) weatherRef.current.innerText = `⛅ No disponible`
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => getWeather(pos.coords.latitude, pos.coords.longitude),
        () => getWeather(19.7008, -101.1844)
      )
    }
  }, [])

  return (
    <div className="relative w-full h-[75vh] flex items-center justify-center bg-white/70">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/gomichoacan-7dd00.firebasestorage.app/o/imagesGoMich%2FFondo.jpg?alt=media&token=db6703c1-4513-45e5-8d59-ca1c4480e0f9"
          alt="Fondo Michoacán"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="bg-white/90 rounded-xl shadow-lg px-6 md:px-10 py-10 md:py-14 w-full h-auto flex flex-col justify-between mt-24 md:mt-24">

          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6 text-center md:text-left">
            <div className="flex items-center justify-center flex-wrap gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-onest text-primary">
                  Descubre Michoacán
                </h2>
                <p className="text-gray-600 mt-1">El Alma de México</p>
              </div>

              <div className="bg-white rounded-full shadow-md px-6 py-3 flex items-center border border-gray-300 text-base font-onest">
                <p ref={weatherRef} className="text-gray-700">⛅ Obteniendo clima...</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full mt-6 items-center gap-4">
            <input
              type="text"
              placeholder="¿A qué municipio deseas viajar?"
              disabled
              className="w-full md:flex-1 px-4 py-3 focus:outline-none border border-gray-300 rounded-full shadow-sm text-gray-700 text-center md:text-left bg-white opacity-60 cursor-not-allowed"
            />

            <div className="relative group">
              <Button
                text="Buscar"
                variant="accent"
                size="md"
                full={false}
                className="pointer-events-none opacity-60 cursor-not-allowed"
              />
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-sm text-gray-700 px-3 py-2 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 shadow-sm" />
                Próximamente
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default HeroSection
