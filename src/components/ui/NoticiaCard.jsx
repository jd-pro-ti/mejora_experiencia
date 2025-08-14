'use client'

import { getCategoryColor } from '@/utils/categoryColors'
import Link from 'next/link'

const NoticiaCard = ({ nota }) => {
  return (
    <Link
      href={`/noticias/${nota.slug || ''}`}
      className="block group no-underline text-inherit"
    >
      <div className="relative rounded-xl overflow-hidden transition-all duration-300 h-[250px] pointer-events-auto sm:pointer-events-none group hover:scale-[1.01] active:scale-[1.01]">
        <img
          src={nota.imagen}
          alt={nota.titulo}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-6 flex flex-col justify-end h-full">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 text-xs font-onest text-white rounded-full ${getCategoryColor(nota.categoria.toUpperCase())}`}>
              {nota.categoria.toUpperCase()}
            </span>
            <span className="text-white text-xs opacity-80">{nota.municipio}</span>
          </div>
          <h3 className="text-white font-onest text-lg sm:text-xl mt-2 leading-tight">
            {nota.titulo}
          </h3>
          <p className="text-sm text-gray-300 mt-1">{nota.descripcion}</p>
        </div>
      </div>
    </Link>
  )
}

export default NoticiaCard
