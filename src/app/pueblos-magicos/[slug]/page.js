'use client'

import { useParams } from 'next/navigation'
import { pueblosMagicos } from '@/data/pueblosMagicos'
import Container from '@/components/ui/Container'

const PuebloDetallePage = () => {
    const params = useParams()
    const slug = params?.slug || ''
    const pueblo = pueblosMagicos.find(p => p.nombre.toLowerCase().replaceAll(' ', '-') === slug)

    if (!pueblo) {
        return (
            <Container className="py-20 text-center">
                <h1 className="text-3xl font-bold mb-4">Pueblo no encontrado</h1>
                <p className="text-gray-600">No pudimos encontrar el pueblo mágico solicitado.</p>
            </Container>
        )
    }

    const mapQuery = encodeURIComponent(`${pueblo.nombre}, Michoacán, México`)

    return (
        <section className="py-16 bg-white">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative">
                <img
                    src={pueblo.imagen}
                    alt={pueblo.nombre}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-md text-center px-4">
                        {pueblo.nombre}
                    </h1>
                </div>
            </div>

            <Container className="py-10">
                <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
                    <div className="md:w-2/3">
                        <div className="mb-6 space-y-2">
                            <p className="text-lg text-gray-700"><span className="font-semibold">Ubicación:</span> {pueblo.nombre}, Michoacán</p>
                            <p className="text-lg text-gray-700"><span className="font-semibold">Atractivo:</span> Pueblo Mágico</p>
                        </div>

                        <p className="text-base text-gray-800 leading-relaxed mb-8">
                            {pueblo.descripcion || 'Este Pueblo Mágico es uno de los destinos más encantadores de Michoacán, conocido por su belleza natural, tradiciones y cultura local.'}
                        </p>

                        <div className="mt-6">
                            <h2 className="text-2xl font-bold text-primary mb-4">¿Por qué visitarlo?</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Cultura y tradiciones vivas</li>
                                <li>Artesanías locales</li>
                                <li>Gastronomía típica</li>
                                <li>Paisajes naturales y arquitectura colonial</li>
                            </ul>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-2xl font-bold text-primary mb-4">Galería</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[pueblo.imagen, pueblo.imagen, pueblo.imagen].map((img, i) => (
                                    <img key={i} src={img} alt={`Galería ${i + 1}`} className="rounded-lg object-cover h-32 w-full" />
                                ))}
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-2xl font-bold text-primary mb-4">Lugares cercanos</h2>
                            <ul className="list-none space-y-3 text-gray-700">
                                <li>⛪ Centro histórico y parroquia</li>
                                <li>🛍️ Plazas artesanales</li>
                                <li>🌄 Miradores naturales</li>
                            </ul>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-2xl font-bold text-primary mb-4">Comentarios recientes</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <p className="text-sm text-gray-800 mb-1 font-semibold">Valeria R.</p>
                                    <p className="text-sm text-gray-600">Es un lugar mágico y acogedor, ideal para descansar y conocer la cultura michoacana.</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <p className="text-sm text-gray-800 mb-1 font-semibold">Carlos M.</p>
                                    <p className="text-sm text-gray-600">Los paisajes y la comida hacen que quieras volver.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/3 bg-gray-100 p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Ubicación</h3>
                        <div className="w-full h-48 rounded-md overflow-hidden">
                            <iframe
                                src={`https://www.openstreetmap.org/export/embed.html?bbox=-101.5,19.6,-101.4,19.7&layer=mapnik&marker=19.65,-101.45&query=${mapQuery}`}
                                className="w-full h-full border-none"
                                loading="lazy"
                                allowFullScreen
                                title="Mapa del pueblo"
                            ></iframe>
                        </div>

                        <p className="text-sm text-gray-700 mt-4">
                            Ubicado en el estado de Michoacán, accesible por carretera y con servicios turísticos disponibles.
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Redes sociales</h3>
                        <p className="text-sm text-blue-600 underline mb-2">facebook.com/{pueblo.nombre.replaceAll(' ', '')}</p>
                        <p className="text-sm text-pink-600 underline">instagram.com/{pueblo.nombre.replaceAll(' ', '')}</p>

                        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Contacto</h3>
                        <p className="text-sm text-gray-700">✉️ contacto@pueblosmagicos.mx</p>
                        <p className="text-sm text-gray-700">📞 443 111 2222</p>

                        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">¿Cómo llegar?</h3>
                        <p className="text-sm text-gray-700">
                            Puedes llegar desde Morelia o Uruapan por carretera. Hay señalización adecuada y servicios públicos disponibles.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PuebloDetallePage