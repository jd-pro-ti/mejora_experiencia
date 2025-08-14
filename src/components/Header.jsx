'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Container from '@/components/ui/Container'
import { applyNavbarScrollEffect } from '@/utils/scrollHandler'
import Button from '@/components/ui/Button'
// import Experiencia from '@/app/modals/experincia'

const Navbar = () => {
  const pathname = usePathname()

  const isInternalPage = [
    '/experiencias',
    '/restaurantes',
    '/noticias',
    '/eventos',
    '/actividades',
    '/pueblos-magicos',
    '/municipios',
    '/admin',
    '/@'
  ].some(path => pathname.startsWith(path))

  useEffect(() => {
    const cleanup = applyNavbarScrollEffect(isInternalPage)
    return cleanup
  }, [pathname])

  return (
    <nav className="fixed w-full z-50 transition-all duration-500 bg-transparent text-white">
      <Container className="flex items-center justify-between py-2">
        <a href="/" className="flex items-center cursor-pointer">
          <img
            src="/img/imagesGoMich/GoMichoacan.png"
            alt="GoMichoacán"
            className="w-[100px] md:w-[120px] lg:w-[140px]"
          />
        </a>

        <ul className="hidden lg:flex items-center space-x-6 font-semibold text-lg">
          <li className="relative group">
            <span className="nav-link opacity-60 cursor-not-allowed">Experiencias</span>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white text-sm text-gray-700 px-3 py-2 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 shadow-sm" />
              Próximamente
            </div>
          </li>
          <li className="relative group">
            <span className="nav-link opacity-60 cursor-not-allowed">Alojamientos</span>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white text-sm text-gray-700 px-3 py-2 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 shadow-sm" />
              Próximamente
            </div>
          </li>
          <li><a href="/eventos" className="nav-link hover:text-accent transition-colors duration-300">Eventos</a></li>
          <li><a href="/municipios" className="nav-link hover:text-accent transition-colors duration-300">Municipios</a></li>
          <li><a href="/noticias" className="nav-link hover:text-accent transition-colors duration-300">Noticias</a></li>
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <div className="relative group">
            <Button
              href=""
              text="Inicia Sesión"
              variant="accent"
              size="sm"
              className="pointer-events-none opacity-60 cursor-not-allowed"
            />
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white text-sm text-gray-700 px-3 py-2 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 shadow-sm" />
              Próximamente
            </div>
          </div>
          <div className="relative group">       {/*apartdo del boton de experinecia */}
            {/* <Experiencia></Experiencia> */}
          </div>
        </div>

        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label htmlFor="menu-toggle" className="lg:hidden text-3xl cursor-pointer text-primary">
          <svg className="peer-checked:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg className="hidden peer-checked:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </label>

        <div className="absolute left-0 w-full transition-all duration-300 bg-white top-[-500px] peer-checked:top-full peer-checked:opacity-100 opacity-0 pointer-events-none peer-checked:pointer-events-auto shadow-lg">
          <ul className="flex flex-col px-6 text-center text-primary">
            <li className="py-3 border-b relative group">
              <span className="opacity-60 cursor-not-allowed">Experiencias</span>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-sm text-gray-700 px-3 py-2 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 shadow-sm" />
                Próximamente
              </div>
            </li>
            <li className="py-2 border-b relative group">
              <span className="opacity-60 cursor-not-allowed">Alojamientos</span>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-sm text-gray-700 px-3 py-2 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 shadow-sm" />
                Próximamente
              </div>
            </li>
            <li className="py-2 border-b"><a href="/eventos" className="hover:text-secondary transition-colors duration-300">Eventos</a></li>
            <li className="py-2 border-b"><a href="/municipios" className="hover:text-secondary transition-colors duration-300">Municipios</a></li>
            <li className="py-2 border-b"><a href="/noticias" className="hover:text-secondary transition-colors duration-300">Noticias</a></li>
          </ul>

          <div className="flex flex-col gap-3 px-6 py-4 items-center">
            <div className="relative group w-full flex justify-center">
              <Button
                href="#"
                text="Inicia Sesión"
                variant="accent"
                size="sm"
                className="pointer-events-none opacity-60 cursor-not-allowed"
              />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white text-sm text-gray-700 px-3 py-2 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 shadow-sm" />
                Próximamente
              </div>
            </div>
            <div className="relative group w-full flex justify-center">
              <Button
                href="#"
                text="Anúnciate"
                variant="secondary"
                size="sm"
                className="pointer-events-none opacity-60 cursor-not-allowed"
              />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white text-sm text-gray-700 px-3 py-2 rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 shadow-sm" />
                Próximamente
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar