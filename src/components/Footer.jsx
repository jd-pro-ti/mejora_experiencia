'use client'

import Container from '@/components/ui/Container'
import TiktokIcon from '@/assets/icons/TiktokIcon'
import FacebookIcon from '@/assets/icons/FacebookIcon'
import InstagramIcon from '@/assets/icons/InstagramIcon'
import MailIcon from '@/assets/icons/MailIcon'
import PhoneIcon from '@/assets/icons/PhoneIcon'
import { pueblosMagicos } from '@/data/pueblosMagicos'
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 w-full">
      <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left font-onest">

        <div className="flex flex-col items-center md:items-start">
          <a href="/" className="flex items-center cursor-pointer">
            <img
              src="/img/imagesGoMich/GoMichoacan.png"
              alt="Go Michoacán"
              className="w-[150px] md:w-[200px] cursor-pointer"
            />
          </a>
          <p className="mt-2 text-sm">
            "Conoce, vive y siente la esencia de Michoacán."
          </p>
          <p className="font-onest mt-4">Síguenos</p>
          <div className="flex justify-center md:justify-start gap-4 text-lg mt-2">
            <a href="https://www.facebook.com/gomichoacan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FacebookIcon stroke="#fff" />
            </a>
            <a href="https://www.instagram.com/gomichoacan/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <InstagramIcon stroke="#fff" />
            </a>
            <a href="https://www.tiktok.com/@gomichoacan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <TiktokIcon stroke="#fff" />
            </a>
          </div>

        </div>

        <div>
          <p className="font-onest mb-2">Pueblos Mágicos</p>
          <ul className="space-y-1 text-sm">
            {pueblosMagicos.map(pueblo => (
              <li key={pueblo.slug}>
                <a
                  href={`/pueblos-magicos/${pueblo.slug}`}
                  className="hover:text-gray-300 cursor-pointer"
                >
                  {pueblo.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <p className="font-semibold mb-2">Enlaces</p>
          <ul className="space-y-1 text-sm">
            <li className="relative group cursor-not-allowed text-white/60 w-max">
              Restaurantes
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white text-sm text-gray-700 px-3 py-2 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50 whitespace-nowrap">
                <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 bg-white rotate-45 shadow-sm" />
                Próximamente
              </div>
            </li>
            <li className="relative group cursor-not-allowed text-white/60 w-max">
              Alojamientos
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white text-sm text-gray-700 px-3 py-2 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50 whitespace-nowrap">
                <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 bg-white rotate-45 shadow-sm" />
                Próximamente
              </div>
            </li>
            <li><a href="/eventos" className="hover:text-gray-300 cursor-pointer">Eventos</a></li>
            <li><a href="/municipios" className="hover:text-gray-300 cursor-pointer">Municipios</a></li>
            <li><a href="/noticias" className="hover:text-gray-300 cursor-pointer">Noticias</a></li>
          </ul>
        </div>


        <div>
          <p className="font-onest mb-2">Contacto</p>
          <ul className="space-y-1 text-sm">
            {['Anúnciate', 'Contacto', 'Sobre nosotros'].map((text, i) => (
              <li key={i} className="relative group cursor-not-allowed text-white/60 w-max">
                {text}
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white text-sm text-gray-700 px-3 py-2 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50 whitespace-nowrap">
                  <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 bg-white rotate-45 shadow-sm" />
                  Próximamente
                </div>
              </li>
            ))}
          </ul>
        </div>


      </Container>
    </footer>
  )
}

export default Footer
