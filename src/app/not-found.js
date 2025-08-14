'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/gomichoacan-7dd00.firebasestorage.app/o/imagesGoMich%2FGoMichoacan.png?alt=media&token=a30a2408-f81c-438b-a487-0d9e99f89d55"
        alt="Página no encontrada"
        width={600}
        height={400}
        className="mb-8 w-64 md:w-80 lg:w-96 h-auto"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">¡Oops! Página no encontrada</h1>
      <p className="text-gray-600 mb-6">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
      <button
        onClick={() => router.push('/')}
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition cursor-pointer"
      >
        Regresar al inicio
      </button>
    </div>
  )
}
