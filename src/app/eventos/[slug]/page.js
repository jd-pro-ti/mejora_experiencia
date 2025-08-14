'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getEventosDeFirebase } from '@/lib/getEventos'
import Container from '@/components/ui/Container'
import { ClockIcon } from '@/assets/icons/ClockIcon'
import { PaidEntryIcon } from '@/assets/icons/PaidEntryIcon'
import FacebookIcon from '@/assets/icons/FacebookIcon'
import { FamiliarIcon } from '@/assets/icons/FamiliarIcon'
import FoodIcon from '@/assets/icons/FoodIcon'
import { CameraIcon } from '@/assets/icons/CameraIcon'
import InstagramIcon from '@/assets/icons/InstagramIcon'
import LocationIcon from '@/assets/icons/LocationIcon'
import { MusicIcon } from '@/assets/icons/MusicIcon'
import { ReservationIcon } from '@/assets/icons/ReservationIcon'
import SpicyIcon from '@/assets/icons/SpicyIcon'
import TiktokIcon from '@/assets/icons/TiktokIcon'
import WineIcon from '@/assets/icons/WineIcon'

const EventoDetallePage = () => {
  const params = useParams()
  const slug = params?.slug || ''

  const [evento, setEvento] = useState(null)

  useEffect(() => {
    const cargarEvento = async () => {
      const eventos = await getEventosDeFirebase()
      const encontrado = eventos.find(e => e.slug === slug)
      setEvento(encontrado)
    }
    cargarEvento()
  }, [slug])

  if (!evento) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Evento no encontrado</h1>
        <p className="text-gray-600">No pudimos encontrar el evento solicitado.</p>
      </Container>
    )
  }

  const mapQuery = encodeURIComponent(`${evento.lugar}, Michoacán, México`)

  return (
    <section className="py-16 bg-white">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative">
        <img src={evento.src} alt={evento.titulo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-md text-center px-4">
            {evento.titulo}
          </h1>
        </div>
      </div>

      <Container className="py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
          <div className="md:w-2/3">
            <div className="mb-6 space-y-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Descripción general</h2>
              <div className="mb-6 space-y-2">
                <p className="text-lg text-gray-700 flex items-center gap-2">
                  <LocationIcon className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Ubicación:</span> {evento.lugar}
                </p>
                <p className="text-lg text-gray-700 flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Fecha:</span> {evento.fecha} de {evento.mes}
                </p>
                <p className="text-lg text-gray-700 flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Horario:</span> {evento.horario}
                </p>
                <p className="text-lg text-gray-700 flex items-center gap-2">
                  <PaidEntryIcon className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Precio:</span> {evento.precio}
                </p>
                <p className="text-lg text-gray-700 flex items-center gap-2">
                  <WineIcon className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Tipo de evento:</span> {evento.tipo}
                </p>
              </div>

            </div>

            <p className="text-base text-gray-800 leading-relaxed mb-8">{evento.descripcion}</p>

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-primary mb-4">¿Por qué asistir?</h2>
              <ul className="list-none space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><FamiliarIcon className="w-5 h-5 text-primary" /> Ambiente familiar y seguro</li>
                <li className="flex items-center gap-2"><MusicIcon className="w-5 h-5 text-primary" /> Actividades culturales y artísticas</li>
                <li className="flex items-center gap-2"><FoodIcon className="w-5 h-5 text-primary" /> Gastronomía tradicional</li>
                <li className="flex items-center gap-2"><MusicIcon className="w-5 h-5 text-primary" /> Conciertos en vivo y espectáculos</li>
                <li className="flex items-center gap-2"><WineIcon className="w-5 h-5 text-primary" /> Expositores de arte local</li>
                <li className="flex items-center gap-2"><ReservationIcon className="w-5 h-5 text-primary" /> Talleres para niños y adultos</li>
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-primary mb-4">Programa del evento</h2>
              <ul className="list-none space-y-3 text-gray-700">
                <li className="flex items-center gap-2"><ClockIcon className="w-5 h-5 text-primary" /> 10:00 AM - Inauguración y bienvenida</li>
                <li className="flex items-center gap-2"><MusicIcon className="w-5 h-5 text-primary" /> 11:00 AM - Espectáculo de danza folklórica</li>
                <li className="flex items-center gap-2"><FoodIcon className="w-5 h-5 text-primary" /> 01:00 PM - Exhibición gastronómica</li>
                <li className="flex items-center gap-2"><MusicIcon className="w-5 h-5 text-primary" /> 03:00 PM - Concierto de música regional</li>
                <li className="flex items-center gap-2"><FamiliarIcon className="w-5 h-5 text-primary" /> 05:00 PM - Actividades para niños</li>
                <li className="flex items-center gap-2"><SpicyIcon className="w-5 h-5 text-primary" /> 08:00 PM - Show de luces y cierre</li>
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-primary mb-4">Galería del evento</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {(evento.galeria || [evento.src, evento.src, evento.src]).map((img, i) => (
                  <img key={i} src={img} alt={`Galería ${i + 1}`} className="rounded-lg object-cover h-32 w-full cursor-pointer" />
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-primary mb-4">Lugares recomendados cerca</h2>
              <ul className="list-none space-y-3 text-gray-700">
                <li className="flex items-center gap-2"><LocationIcon className="w-5 h-5 text-primary" /> Hotel Misión Patzcuaro - 5 estrellas</li>
                <li className="flex items-center gap-2"><FoodIcon className="w-5 h-5 text-primary" /> Restaurante La Surtidora - comida tradicional</li>
                <li className="flex items-center gap-2"><CameraIcon className="w-5 h-5 text-primary" /> Basílica de Nuestra Señora de la Salud</li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/3 bg-gray-100 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ubicación</h3>
            <div className="w-full h-48 rounded-md overflow-hidden">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-101.5,19.6,-101.4,19.7&layer=mapnik&marker=19.65,-101.45&query=${mapQuery}`}
                className="w-full h-full border-none"
                loading="lazy"
                allowFullScreen
                title="Mapa del evento"
              ></iframe>
            </div>
            <p className="text-sm text-gray-700 mt-4">{evento.infoMapa}</p>

            
          </div>
        </div>
      </Container>
    </section>
  )
}

export default EventoDetallePage