'use client'

import Container from "@/components/ui/Container"
import { noticias } from "@/data/landingpage/noticias"
import SectionTitle from '@/components/ui/SectionTitle'

const getCategoryColor = (category) => {
  switch (category) {
    case "TURISMO":
      return "bg-accent"
    case "CULTURA":
      return "bg-secondary"
    case "TRADICIONES":
      return "bg-primary"
    default:
      return "bg-secondary-accent"
  }
}

const NoticiasRecientes = () => {
  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <SectionTitle text="Noticias Recientes" color="secondary" margin="mb-2 md:mb-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map((noticia, index) => (
            <a
              key={index}
              href={`/noticias/${noticia.titulo.toLowerCase().replaceAll(" ", "-")}`}
              className={`block relative rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 
                ${index === 2 ? "lg:col-span-2 h-[250px] lg:order-last" : "h-[250px]"}`}
              title={`Leer: ${noticia.titulo}`}
              onTouchStart={(e) => {
                const target = e.currentTarget
                if (target && target.classList) {
                  target.classList.add('hovered')
                  setTimeout(() => {
                    target.classList.remove('hovered')
                  }, 500)
                }
              }}
            >
              <img
                src={noticia.src}
                alt={noticia.titulo}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 text-xs font-onest text-white rounded-full ${getCategoryColor(noticia.categoria)}`}>
                    {noticia.categoria}
                  </span>
                  <span className="text-white text-xs opacity-80"> {noticia.ubicacion}</span>
                </div>

                <h3 className="text-white font-onest text-lg sm:text-xl mt-2 leading-tight">
                  {noticia.titulo}
                </h3>

                <p className="text-sm text-gray-300 mt-1">
                  {noticia.descripcion}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default NoticiasRecientes
