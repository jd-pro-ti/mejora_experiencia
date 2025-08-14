'use client'

import { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database'
import { db } from '@/lib/firebase'

import Container from '@/components/ui/Container'
import WifiIcon from '@/assets/icons/WifiIcon'
import FoodIcon from '@/assets/icons/FoodIcon'
import PetFriendlyIcon from '@/assets/icons/PetFriendlyIcon'

const Municipios = () => {
  const [municipios, setMunicipios] = useState([])

  useEffect(() => {
    const municipiosRef = ref(db, 'municipios')
    const unsubscribe = onValue(municipiosRef, (snapshot) => {
      const data = snapshot.val()
      if (data) setMunicipios(data)
    })
    return () => unsubscribe()
  }, [])

  return (
    <>
      <section className="relative w-full h-[240px] md:h-[300px] lg:h-[420px] overflow-hidden">
        <img
          src="/img/imagesGoMich/Fondo.jpg"
          alt="Municipios de Michoacán"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 z-20 text-white flex items-center">
          <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12">
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold drop-shadow-md mb-4">Municipios</h1>
              <p className="text-base sm:text-lg opacity-90 max-w-2xl">Descubre los municipios destacados de Michoacán, llenos de cultura, historia y paisajes inolvidables.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div><p className="text-3xl font-bold text-primary">12</p><p className="text-sm opacity-70">municipios destacados</p></div>
          <div><p className="text-3xl font-bold text-primary">1,210,523</p><p className="text-sm opacity-70">visitantes registrados</p></div>
          <div><p className="text-3xl font-bold text-primary">78,945</p><p className="text-sm opacity-70">opiniones comunitarias</p></div>
          <div><p className="text-3xl font-bold text-primary">9.1 / 10</p><p className="text-sm opacity-70">nivel de recomendación</p></div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {municipios.map((municipio, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 shadow-md overflow-hidden bg-white hover:shadow-lg hover:scale-[1.015] transition-all duration-300 text-center"
              >
                <div className="bg-gray-100 flex items-center justify-center h-40">
                  <img
                    src={municipio.imagen}
                    alt={municipio.nombre}
                    className="w-24 h-auto object-contain"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block bg-primary text-white text-[10px] px-2 py-1 rounded-full mb-2">
                    {municipio.region}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800">{municipio.nombre}</h3>
                  <p className="text-xs text-gray-600 mt-1">{municipio.descripcion}</p>
                  <div className="flex justify-center gap-3 mt-4 text-primary">
                    <WifiIcon className="w-4 h-4" />
                    <FoodIcon className="w-4 h-4" />
                    <PetFriendlyIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Municipios
