'use client'

import { useRouter } from 'next/navigation'
import Container from '@/components/ui/Container'
import { pueblosMagicos } from '@/data/pueblosMagicos'
import Button from '@/components/ui/Button'

const PueblosPage = () => {
  const router = useRouter()

  return (
    <>
      <section className="py-8">
        <div className="relative w-full h-[220px] md:h-[260px] lg:h-[380px] overflow-hidden">
          <img
            src="/img/imagesGoMich/Fondo.jpg"
            srcSet="/img/imagesGoMich/Fondo.jpg 640w, /img/imagesGoMich/Fondo.jpg 1024w, /img/imagesGoMich/Fondo.jpg 1600w"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Pueblos Mágicos de Michoacán"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-20 text-white w-full flex flex-col justify-end">
            <div className="max-w-[1200px] 2xl:max-w-[1440px] mx-auto w-full h-full px-6 md:px-11">
              <div className="hidden lg:flex flex-col justify-end h-full pb-14">
                <h1 className="text-6xl font-bold drop-shadow-md mb-10 text-left">Pueblos Mágicos</h1>
                <div className="grid grid-cols-4 gap-x-8 text-left text-base font-onest">
                  <div><p className="text-2xl">10</p><p className="opacity-80">pueblos reconocidos</p></div>
                  <div><p className="text-2xl">+1M</p><p className="opacity-80">visitantes anuales</p></div>
                  <div><p className="text-2xl">450K</p><p className="opacity-80">opiniones verificadas</p></div>
                  <div><p className="text-2xl">9.5 / 10</p><p className="opacity-80">nivel de encanto</p></div>
                </div>
              </div>
              <div className="py-10 lg:hidden flex-col justify-end h-full pb-20 sm:pb-16">
                <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-md mb-6 sm:mb-8 text-center sm:text-left">Pueblos Mágicos</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-6 auto-rows-[220px] gap-4">
            {pueblosMagicos.map((pueblo, index) => {
              const spanClass =
                index % 7 === 0
                  ? 'col-span-3 row-span-2'
                  : index % 5 === 0
                    ? 'col-span-3 row-span-1'
                    : 'col-span-3 row-span-1'

              return (
                <div
                  key={index}
                  onClick={() => router.push(`/pueblos-magicos/${pueblo.slug}`)}
                  className={`relative rounded-2xl overflow-hidden group transition-shadow duration-300 hover:shadow-xl bg-white cursor-pointer ${spanClass}`}
                >
                  <img
                    src={pueblo.imagen}
                    alt={pueblo.nombre}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 flex items-end">
                    <div className="text-white p-4 z-20">
                      <h3 className="text-lg md:text-2xl font-bold mb-1 line-clamp-2">{pueblo.nombre}</h3>
                      <p className="text-sm md:text-base opacity-90 line-clamp-3">{pueblo.descripcion}</p>
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

export default PueblosPage
