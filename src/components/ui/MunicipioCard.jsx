'use client'

import Link from 'next/link'

const MunicipioCard = ({ municipio }) => {
  return (
    <Link
      href={`/municipios/${municipio.nombre.toLowerCase().replaceAll(' ', '-')}`}
      className="block group no-underline text-inherit"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:scale-105">
        <div className="relative h-44 sm:h-52 md:h-60">
          <img src={municipio.imagenFondo} alt={municipio.nombre} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-5 rounded-2xl shadow-md">
              <img
                src={municipio.icono}
                alt={`${municipio.nombre} icono`}
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="text-center py-6 px-4">
          <h3 className="text-lg sm:text-xl font-bold text-[#1e3355] font-onest">
            Municipio de {municipio.nombre}
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default MunicipioCard
