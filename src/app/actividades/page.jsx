'use client'

import Container from '@/components/ui/Container'

const Actividades = () => {
  const habilitado = false

  if (!habilitado) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-6">
        <div className="bg-white rounded-xl shadow-xl p-10 max-w-md w-full">
          <h1 className="text-2xl font-bold text-primary mb-4">📌 Próximamente</h1>
          <p className="text-gray-600">Esta sección estará próximamente disponible. Gracias por tu paciencia.</p>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="py-8">
        <div className="relative w-full h-[220px] md:h-[260px] lg:h-[380px] overflow-hidden">
          <img src="/img/imagesGoMich/mich.webp" alt="Actividades" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-20 text-white w-full flex flex-col justify-end">
            <div className="max-w-[1200px] 2xl:max-w-[1440px] mx-auto w-full h-full px-6 md:px-11">
              <div className="hidden lg:flex flex-col justify-end h-full pb-14">
                <h1 className="text-6xl font-onest drop-shadow-md mb-10 text-left">Actividades</h1>
              </div>
              <div className="flex sm:hidden flex-col justify-end h-full pb-9 text-center">
                <h1 className="text-4xl font-onest drop-shadow-md mb-6">Actividades</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Actividades
