'use client'

import { useState, useRef } from 'react'
import Container from "@/components/ui/Container"
import { galeria } from "@/data/landingpage/galeria"
import SectionTitle from '@/components/ui/SectionTitle'

const Galeria = () => {
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
        <SectionTitle text="Rostros y Paisajes de Michoacán" color="primary" margin="mb-2 md:mb-4" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {galeria
            .filter(item => item?.titulo && item?.src)
            .map((item, index) => (
              <a
                key={index}
                onClick={handleClick}
                className="relative overflow-hidden rounded-lg transition-all duration-500 shadow-sm cursor-pointer group touch-manipulation"
              >
                <img
                  src={item.src}
                  alt={item.titulo}
                  className="w-full h-[140px] sm:h-[180px] lg:h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-onest bg-accent transition-opacity duration-500 opacity-0 group-hover:opacity-80">
                  {item.titulo}
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

export default Galeria
