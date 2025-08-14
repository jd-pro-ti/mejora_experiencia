'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { crearEvento } from '@/utils/firebaseEventos'
import Button from '@/components/ui/Button'

const camposBase = {
  slug: '',
  titulo: '',
  fecha: '',
  lugar: '',
  precio: ''
}

export default function CrearEvento() {
  const [evento, setEvento] = useState(camposBase)
  const router = useRouter()

  const handleInput = (e) => {
    const { name, value } = e.target
    setEvento({ ...evento, [name]: value })
  }

  const handleSubmit = async () => {
    if (!evento.slug || !evento.titulo) return alert('Slug y título son obligatorios')
    await crearEvento(evento)
    router.push('/admin/eventos')
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-8 md:px-12">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Crear nuevo evento</h2>

        {Object.entries(evento).map(([key, value]) => (
          <div key={key} className="mb-4">
            <label className="block mb-1 font-medium capitalize">{key}</label>
            <input
              name={key}
              value={value}
              onChange={handleInput}
              className="border border-gray-300 px-4 py-2 rounded w-full"
            />
          </div>
        ))}

        <div className="mt-6">
          <Button
            text="Guardar evento"
            variant="primary"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}
