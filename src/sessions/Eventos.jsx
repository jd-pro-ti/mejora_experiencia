'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import '@/styles/carrousel.css'

import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { getEventosDeFirebase } from '@/lib/getEventos'
import { FreeEntryIcon } from '@/assets/icons/FreeEntryIcon'
import { PaidEntryIcon } from '@/assets/icons/PaidEntryIcon'
import { FamiliarIcon } from '@/assets/icons/FamiliarIcon'
import { AmigosIcon } from '@/assets/icons/AmigosIcon'
import { ParejaIcon } from '@/assets/icons/ParejaIcon'

const getRandomPreferencias = () => {
  const opciones = [
    ['familiar'],
    ['amigos'],
    ['pareja'],
    ['familiar', 'amigos'],
    ['amigos', 'pareja'],
    ['familiar', 'pareja']
  ]
  return opciones[Math.floor(Math.random() * opciones.length)]
}

const Eventos = () => {
  const router = useRouter()
  const [eventos, setEventos] = useState([])

  useEffect(() => {
    const fetchEventos = async () => {
      const data = await getEventosDeFirebase()
      const conExtras = data.map(e => ({
        ...e,
        entradaLibre: Math.random() < 0.5,
        preferencia: getRandomPreferencias()
      }))
      setEventos(conExtras)
    }
    fetchEventos()
  }, [])

  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <div className="flex items-center justify-between mb-4">
          <SectionTitle text="Eventos" color="primary" margin="mb-2 md:mb-4" />
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          loop={true}
          className="pueblos-swiper"
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
        >
          {eventos.map((evento, index) => (
            <SwiperSlide key={index} className="!overflow-visible px-1.5">
              <div
                onClick={() => router.push(`/eventos/${evento.slug}`)}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md mb-6 cursor-pointer"
              >
                <div className="overflow-hidden relative rounded-t-xl">
                  <img
                    src={evento.src}
                    alt={evento.titulo}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="absolute top-3 left-3 z-20 bg-secondary text-white rounded-lg w-12 h-12 flex flex-col items-center justify-center shadow-lg">
                    <p className="text-sm font-bold leading-none">{evento.fecha}</p>
                    <p className="text-[10px] uppercase tracking-wide">{evento.mes}</p>
                  </div>
                </div>
                <div className="p-4 text-center md:text-left flex flex-col justify-between min-h-[250px]">
                  <div>
                    <h3 className="text-lg font-onest mt-2 line-clamp-2">{evento.titulo}</h3>
                    <p className="text-gray-600 text-sm">{evento.lugar}</p>
                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">{evento.descripcion}</p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                    {evento.entradaLibre ? (
                      <FreeEntryIcon className="w-6 h-6 text-black" />
                    ) : (
                      <PaidEntryIcon className="w-6 h-6 text-black" />
                    )}
                    {evento.preferencia.includes('familiar') && <FamiliarIcon className="w-6 h-6 text-black" />}
                    {evento.preferencia.includes('amigos') && <AmigosIcon className="w-6 h-6 text-black" />}
                    {evento.preferencia.includes('pareja') && <ParejaIcon className="w-6 h-6 text-black" />}
                  </div>

                  <div className="mt-4">
                    <Button
                      href={`/eventos/${evento.slug}`}
                      text="Ver más"
                      variant="accent"
                      size="md"
                      full={true}
                      center={true}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev !top-[220px] !z-30" />
          <div className="swiper-button-next !top-[220px] !z-30" />
        </Swiper>
      </Container>
    </section>
  )
}

export default Eventos