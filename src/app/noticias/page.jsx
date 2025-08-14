'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import noticias from '@/data/noticias'
import { sortNoticias } from '@/utils/sortNoticias'
import NoticiaCard from '@/components/ui/NoticiaCard'

const Noticias = () => {
  const [order, setOrder] = useState("Novedad")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const sortedNoticias = sortNoticias(noticias, "Todas", order)

  return (
    <>
      <div className="py-8">
        <div className="relative w-full h-[220px] md:h-[260px] lg:h-[380px] overflow-hidden">
          <img src="/img/imagesGoMich/mich.webp" alt="Noticias" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-20 text-white w-full flex flex-col justify-end">
            <div className="max-w-[1200px] 2xl:max-w-[1440px] mx-auto w-full h-full px-6 md:px-11">
              <div className="hidden lg:flex flex-col justify-end h-full pb-14">
                <h1 className="text-6xl font-bold drop-shadow-md mb-10 text-left">Noticias</h1>
                <div className="grid grid-cols-4 gap-x-8 text-left text-base font-onest">
                  <div><p className="text-2xl">146</p><p className="opacity-80">noticias publicadas</p></div>
                  <div><p className="text-2xl">312,489</p><p className="opacity-80">lectores mensuales</p></div>
                  <div><p className="text-2xl">24,891</p><p className="opacity-80">comentarios registrados</p></div>
                  <div><p className="text-2xl">9.5 / 10</p><p className="opacity-80">nivel de interés</p></div>
                </div>
              </div>
              <div className="py-10 lg:hidden flex-col justify-end h-full pb-20 sm:pb-16">
                <h1 className="text-4xl sm:text-5xl font-onest drop-shadow-md mb-6 sm:mb-8 text-center sm:text-left">Noticias</h1>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 text-xs sm:text-sm font-onest text-center sm:text-left">
                  <div><p className="text-lg sm:text-xl">146</p><p className="opacity-80">noticias publicadas</p></div>
                  <div><p className="text-lg sm:text-xl">312,489</p><p className="opacity-80">lectores mensuales</p></div>
                  <div><p className="text-lg sm:text-xl">24,891</p><p className="opacity-80">comentarios registrados</p></div>
                  <div><p className="text-lg sm:text-xl">9.5 / 10</p><p className="opacity-80">nivel de interés</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="mt-6 bg-white rounded-lg shadow px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 font-onest text-sm md:text-base">{sortedNoticias.length} noticias encontradas</p>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border rounded-full px-4 py-1 text-sm font-onest bg-white shadow hover:bg-gray-50 cursor-pointer"
            >
              Ordenar
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg text-sm font-onest z-50">
                {["Novedad", "Antiguas primero"].map((option, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setOrder(option)
                      setDropdownOpen(false)
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      <section className="py-16 relative">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {sortedNoticias.map((nota, i) => (
              <NoticiaCard key={i} nota={nota} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Noticias
