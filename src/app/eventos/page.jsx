'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Container from '@/components/ui/Container'
import { getEventosDeFirebase } from '@/lib/getEventos'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import '@/styles/carrousel.css'
import LocationIcon from '@/assets/icons/LocationIcon'
import FoodIcon from '@/assets/icons/FoodIcon'
import { FreeEntryIcon } from '@/assets/icons/FreeEntryIcon'
import { PaidEntryIcon } from '@/assets/icons/PaidEntryIcon'
import { FamiliarIcon } from '@/assets/icons/FamiliarIcon'
import { AmigosIcon } from '@/assets/icons/AmigosIcon'
import { ParejaIcon } from '@/assets/icons/ParejaIcon'

const generarExtras = (eventos) => {
  const preferencias = [
    ['familiar'], ['amigos'], ['pareja'],
    ['familiar', 'amigos'], ['familiar', 'pareja'], ['amigos', 'pareja']
  ]
  return eventos.map((e, i) => ({
    ...e,
    entradaLibre: i % 3 === 0,
    preferencia: preferencias[i % preferencias.length],
    index: i
  }))
}

const EventosPage = () => {
  const router = useRouter()
  const [eventos, setEventos] = useState([])
  const [filtro, setFiltro] = useState('todos')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const cargar = async () => {
      const data = await getEventosDeFirebase()
      setEventos(generarExtras(data))
    }
    cargar()
  }, [])

  const eventosFiltrados = eventos.filter(evento => {
    if (filtro === 'todos') return true
    if (filtro === 'entradaLibre') return evento.entradaLibre
    if (filtro === 'costo') return !evento.entradaLibre
    return evento.preferencia.includes(filtro)
  })

  const swiperEventos = eventosFiltrados.slice(0, 6)
  const bentoEventos = eventosFiltrados.slice(6, 18)

  return (
    <>
      <section className="py-8">
        <div className="relative w-full h-[220px] md:h-[260px] lg:h-[380px] overflow-hidden">
          <img src="/img/imagesGoMich/Fondo.jpg" alt="Eventos en Michoacán" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-20 text-white w-full flex flex-col justify-end">
            <div className="max-w-[1200px] 2xl:max-w-[1440px] mx-auto w-full h-full px-6 md:px-11">
              <div className="hidden lg:flex flex-col justify-end h-full pb-14">
                <h1 className="text-6xl font-bold drop-shadow-md mb-10 text-left">Eventos</h1>
                <div className="grid grid-cols-4 gap-x-8 text-left text-base font-onest">
                  <div><p className="text-2xl">{eventos.length}</p><p className="opacity-80">eventos activos</p></div>
                  <div><p className="text-2xl">847,130</p><p className="opacity-80">asistentes registrados</p></div>
                  <div><p className="text-2xl">91,563</p><p className="opacity-80">comentarios publicados</p></div>
                  <div><p className="text-2xl">9.6 / 10</p><p className="opacity-80">nivel de satisfacción</p></div>
                </div>
              </div>
              <div className="py-10 lg:hidden flex-col justify-end h-full pb-20 sm:pb-16">
                <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-md mb-6 sm:mb-8 text-center sm:text-left">Eventos</h1>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 text-xs sm:text-sm font-onest text-center sm:text-left">
                  <div><p className="text-lg sm:text-xl">{eventos.length}</p><p className="opacity-80">eventos activos</p></div>
                  <div><p className="text-lg sm:text-xl">847,130</p><p className="opacity-80">asistentes registrados</p></div>
                  <div><p className="text-lg sm:text-xl">91,563</p><p className="opacity-80">comentarios publicados</p></div>
                  <div><p className="text-lg sm:text-xl">9.6 / 10</p><p className="opacity-80">nivel de satisfacción</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container>
        <div className="mt-6 bg-white rounded-lg shadow px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 font-onest text-sm md:text-base">{eventosFiltrados.length} eventos encontrados</p>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border rounded-full px-4 py-1 text-sm font-onest bg-white shadow hover:bg-gray-50 cursor-pointer"
            >
              Filtrar
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg text-sm font-onest z-50">
                <div onClick={() => { setFiltro('todos'); setDropdownOpen(false) }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Todos</div>
                <div onClick={() => { setFiltro('entradaLibre'); setDropdownOpen(false) }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Entrada libre</div>
                <div onClick={() => { setFiltro('costo'); setDropdownOpen(false) }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Costo entrada</div>
                <div onClick={() => { setFiltro('familiar'); setDropdownOpen(false) }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Familiar</div>
                <div onClick={() => { setFiltro('amigos'); setDropdownOpen(false) }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Amigos</div>
                <div onClick={() => { setFiltro('pareja'); setDropdownOpen(false) }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pareja</div>
              </div>
            )}
          </div>
        </div>
      </Container>

      <section className="pb-16 bg-white">
        <Container className="px-2 py-8 sm:px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Próximamente</h2>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            loop={false}
            spaceBetween={16}
            className="eventos-swiper"
            breakpoints={{
              320: { slidesPerView: 1.05 },
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 1.6 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 }
            }}
          >
            {swiperEventos.map((evento, index) => (
              <SwiperSlide key={index} onClick={() => router.push(`/eventos/${evento.slug}`)} className="!h-auto !flex !items-stretch cursor-pointer">
                <div className="block h-full rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:scale-[1.01] transition-transform duration-300 ease-in-out overflow-hidden flex flex-col sm:flex-row cursor-pointer no-underline">
                  <div className="w-full sm:w-1/3 h-[200px] sm:h-auto relative">
                    <img src={evento.src} alt={evento.titulo} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 z-20 bg-secondary text-white rounded-lg w-12 h-12 flex flex-col items-center justify-center shadow-lg">
                      <p className="text-sm font-bold leading-none">{evento.fecha}</p>
                      <p className="text-[10px] uppercase tracking-wide">{evento.mes}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between p-4 sm:w-2/3 h-full">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 min-h-[48px]">{evento.titulo}</h3>
                      <p className="text-sm text-gray-500">{evento.lugar}</p>
                      <p className="text-sm text-gray-700 mt-2">{evento.descripcion}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs mt-1 items-center">
                      {evento.entradaLibre ? (
                        <FreeEntryIcon className="w-6 h-6" />
                      ) : (
                        <PaidEntryIcon className="w-6 h-6" />
                      )}
                      {evento.preferencia.includes('familiar') && <FamiliarIcon className="w-6 h-6" />}
                      {evento.preferencia.includes('amigos') && <AmigosIcon className="w-6 h-6" />}
                      {evento.preferencia.includes('pareja') && <ParejaIcon className="w-6 h-6" />}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-sm font-bold text-emerald-600">{evento.precio}</p>
                      <span className="inline-block bg-accent text-white text-sm px-4 py-2 rounded-md font-medium">Ver más</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Más eventos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
            {bentoEventos.map((evento, index) => {
              const spanClass = index % 9 === 0 || index % 7 === 0 || index % 5 === 0 ? 'col-span-3 row-span-1' : 'col-span-3 row-span-2'
              return (
                <div key={index} onClick={() => router.push(`/eventos/${evento.slug}`)} className={`relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition p-4 flex flex-col justify-between cursor-pointer ${spanClass}`}>
                  <img src={evento.src} alt={evento.titulo} className="w-full h-40 object-cover rounded-md mb-3" />
                  <div className="absolute top-3 left-3 z-20 bg-secondary text-white rounded-lg w-12 h-12 flex flex-col items-center justify-center shadow-lg">
                    <p className="text-sm font-bold leading-none">{evento.fecha}</p>
                    <p className="text-[10px] uppercase tracking-wide">{evento.mes}</p>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">{evento.titulo}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <LocationIcon className="w-4 h-4 text-accent" /> {evento.lugar}
                      </p>
                      <p className="text-sm text-gray-600">{evento.descripcion}</p>
                    </div>
                    <div className="mt-4 flex flex-col gap-1">
                      <div className="flex flex-wrap gap-2 text-xs mt-1 items-center">
                        {evento.entradaLibre ? (
                          <FreeEntryIcon className="w-6 h-6" />
                        ) : (
                          <PaidEntryIcon className="w-6 h-6" />
                        )}
                        {evento.preferencia.includes('familiar') && <FamiliarIcon className="w-6 h-6" />}
                        {evento.preferencia.includes('amigos') && <AmigosIcon className="w-6 h-6" />}
                        {evento.preferencia.includes('pareja') && <ParejaIcon className="w-6 h-6" />}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-emerald-600">{evento.precio}</span>
                        <span className="inline-block bg-accent text-white text-sm px-4 py-2 rounded-md font-medium">Ver más</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}

export default EventosPage
