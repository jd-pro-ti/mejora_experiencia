import HeroSection from "@/sessions/HeroSection"
import Novedades from "@/sessions/Novedades"
import TopDestinos from "@/sessions/TopDestinos"
import Eventos from "@/sessions/Eventos"
import PueblosMagicos from "@/sessions/PueblosMagicos"
import NoticiasRecientes from "@/sessions/NoticiasRecientes"
import Galeria from "@/sessions/Galeria"
import SesionPreFooter from "@/sessions/SesionPreFooter"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Novedades />
      <Eventos />
      <PueblosMagicos />
      <NoticiasRecientes />
      <Galeria />
      <SesionPreFooter />
    </>
  )
}
