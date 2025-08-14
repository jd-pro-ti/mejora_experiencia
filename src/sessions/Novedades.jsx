'use client'

import { useState, useRef } from 'react'
import Container from '@/components/ui/Container'
import { novedades } from '@/data/landingpage/novedades'
import SectionTitle from '@/components/ui/SectionTitle'

const Novedades = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const modalRef = useRef()

  const handleClick = (e) => {
    e.preventDefault()
    setModalOpen(true)
  }

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalOpen(false)
    }
  }

  return (
    <section className="py-12 bg-gray-100 relative">
      <Container>
        <SectionTitle text="Hospédate, Degusta y Descubre" color="accent" margin="mb-2 md:mb-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {novedades.map((item, index) => (
            <a
              key={index}
              onClick={handleClick}
              className={`relative overflow-hidden rounded-lg transition-all duration-500 shadow-sm group 
                ${index === 0 || index === 5 ? "md:col-span-2" : "md:col-span-1"}`}
            >
              <img
                src={item.src}
                alt={item.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/50 transition-opacity duration-500 opacity-0 group-hover:opacity-100 cursor-pointer" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-primary/70 text-white text-center transition-all duration-500 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-lg font-onest">{item.titulo}</h3>
                <p className="text-sm opacity-80">{item.descripcion}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-xl max-w-sm w-full text-center shadow-xl"
          >
            <h2 className="text-xl font-semibold text-primary mb-4">Próximamente</h2>
            <p className="text-gray-600 mb-6">Esta sección estará próximamente disponible.</p>
            <button
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-accent text-white font-medium hover:bg-accent/80 transition cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Novedades
