'use client'

import { useState, useRef } from 'react'
import Button from '@/components/ui/Button'

const SesionPreFooter = () => {
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
    <section className="relative w-full h-[400px] md:h-[500px] bg-primary overflow-hidden flex items-center">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/gomichoacan-7dd00.firebasestorage.app/o/imagesGoMich%2Fviejitos.jpg?alt=media&token=2cd1a2f8-ecf6-4ed9-908d-4b928427765c"
        alt="Fondo Catedral Michoacán"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-12 w-full flex flex-col items-center justify-center gap-6 md:gap-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-10 text-center md:text-left">
          <p className="text-white text-lg sm:text-2xl md:text-3xl font-onest leading-relaxed max-w-xl">
            Michoacán: un paraíso de tradiciones, paisajes únicos y sabores inolvidables.
            Ven y vive la magia que hace latir el corazón de México.
          </p>
          <img
            src="/img/imagesGoMich/GoMichoacan.png"
            alt="Logo Go Michoacán"
            className="w-[200px] md:w-[250px]"
          />
        </div>

        <div className="mt-2 md:mt-0">
          <Button
            text="Únete con nosotros"
            href=""
            onClick={handleClick}
            variant="accent"
            size="md"
            full={false}
            center={false}
          />
        </div>
      </div>

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

export default SesionPreFooter
