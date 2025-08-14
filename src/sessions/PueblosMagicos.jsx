'use client'

import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import '@/styles/carrousel.css'

import Container from '@/components/ui/Container'
import { pueblosMagicos } from '@/data/pueblosMagicos'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

const PueblosMagicos = () => {
  const router = useRouter()

  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <div className="flex items-center justify-between mb-4">
          <SectionTitle text="Pueblos Mágicos, experiencias únicas" color="accent" margin="mb-2 md:mb-4" />
          <Button
            href="/pueblos-magicos"
            text="Ver más"
            variant="accent"
            size="sm"
          />
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          className="pueblos-swiper"
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
          {pueblosMagicos.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => router.push(`/pueblos-magicos/${item.slug}`)}
                className="block relative overflow-hidden rounded-xl shadow-md group cursor-pointer"
              >
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-[280px] sm:h-[300px] lg:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-onest">{item.nombre}</h3>
                  <p className="text-sm opacity-80">{item.descripcion}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default PueblosMagicos
