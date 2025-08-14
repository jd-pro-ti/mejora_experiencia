'use client'

import Container from '@/components/ui/Container'
import { destinos } from "@/data/landingpage/topDestinos"
import SectionTitle from '@/components/ui/SectionTitle'

const TopDestinos = () => {
  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <SectionTitle text="Top Destinos" color="secondary" margin="mb-2 md:mb-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinos.map((item, index) => (
            <a
              key={index}
              href={`/destinos/${item.titulo.toLowerCase().replaceAll(" ", "-")}`}
              className="group relative overflow-hidden rounded-xl transition-all duration-500 border border-gray-200 shadow-xl active:scale-[1.03] hover:scale-[1.03]"
            >
              <img
                src={item.src}
                alt={item.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm active:scale-110 active:blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100 active:opacity-100 flex flex-col items-center justify-end pb-6">
                <h3 className="text-white text-lg md:text-xl font-onest text-center px-6 transition-all duration-500 translate-y-10 group-hover:translate-y-0 group-hover:scale-110 active:translate-y-0 active:scale-110">
                  {item.titulo}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TopDestinos
