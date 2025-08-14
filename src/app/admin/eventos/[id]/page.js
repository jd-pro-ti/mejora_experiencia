'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { obtenerEventos, actualizarEvento } from '@/utils/firebaseEventos'
import Button from '@/components/ui/Button'

export default function EditarEvento() {
  const [evento, setEvento] = useState(null)
  const router = useRouter()
  const { id } = useParams()

  useEffect(() => {
    const cargarEvento = async () => {
      const data = await obtenerEventos()
      if (data[id]) {
        const eventoCargado = { ...data[id] }
        if (!Array.isArray(eventoCargado.comentarios)) {
          eventoCargado.comentarios = []
        }
        setEvento(eventoCargado)
      } else {
        router.push('/admin/eventos')
      }
    }
    cargarEvento()
  }, [id])

  const handleInput = (e) => {
    const { name, value } = e.target
    setEvento({ ...evento, [name]: value })
  }

  const handleAgregarComentario = () => {
    const nuevos = [...(evento.comentarios || []), { nombre: '', texto: '' }]
    setEvento({ ...evento, comentarios: nuevos })
  }

  const handleCambiarComentario = (index, campo, valor) => {
    const nuevos = [...evento.comentarios]
    nuevos[index][campo] = valor
    setEvento({ ...evento, comentarios: nuevos })
  }

  const handleEliminarComentario = (index) => {
    const nuevos = evento.comentarios.filter((_, i) => i !== index)
    setEvento({ ...evento, comentarios: nuevos })
  }

  const handleSubmit = async () => {
    await actualizarEvento(id, evento)
    router.push('/admin/eventos')
  }

  if (!evento) return <p className="text-center pt-24">Cargando...</p>

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-8 md:px-12">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Editar evento</h2>

        {Object.entries(evento).map(([key, value]) => (
          key === 'comentarios' ? (
            <div key={key} className="mb-6">
              <label className="block font-medium mb-2 capitalize">{key}</label>
              {(value || []).map((comentario, index) => (
                <div key={index} className="flex flex-col gap-2 mb-4 border p-3 rounded relative">
                  <div className="absolute top-2 right-2">
                    <Button
                      text="Eliminar"
                      variant="secondary"
                      size="sm"
                      onClick={() => handleEliminarComentario(index)}
                    />
                  </div>
                  <input
                    placeholder="Nombre"
                    value={comentario?.nombre || ''}
                    onChange={(e) => handleCambiarComentario(index, 'nombre', e.target.value)}
                    className="border border-gray-300 px-2 py-1 rounded"
                  />
                  <input
                    placeholder="Comentario"
                    value={comentario?.texto || ''}
                    onChange={(e) => handleCambiarComentario(index, 'texto', e.target.value)}
                    className="border border-gray-300 px-2 py-1 rounded"
                  />
                </div>
              ))}
              <Button
                text="+ Agregar comentario"
                variant="accent"
                size="sm"
                onClick={handleAgregarComentario}
              />
            </div>
          ) : (
            <div key={key} className="mb-4">
              <label className="block mb-1 font-medium capitalize">{key}</label>
              <input
                name={key}
                value={typeof value === 'object' ? JSON.stringify(value) : value}
                onChange={handleInput}
                className="border border-gray-300 px-4 py-2 rounded w-full"
                disabled={key === 'slug'}
              />
            </div>
          )
        ))}

        <div className="mt-6">
          <Button
            text="Guardar cambios"
            variant="primary"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}
