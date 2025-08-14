'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { obtenerEventos, eliminarEvento } from '@/utils/firebaseEventos'
import Button from '@/components/ui/Button'

export default function EventosAdminPage() {
  const [eventos, setEventos] = useState({})
  const [eventoAEliminar, setEventoAEliminar] = useState(null)
  const router = useRouter()

  const cargarEventos = async () => {
    const data = await obtenerEventos()
    setEventos(data)
  }

  const confirmarEliminacion = async () => {
    if (eventoAEliminar) {
      await eliminarEvento(eventoAEliminar)
      setEventoAEliminar(null)
      cargarEventos()
    }
  }

  useEffect(() => {
    cargarEventos()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-8 md:px-12">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-primary">Eventos</h2>
          <Button
            text="Crear nuevo evento"
            variant="primary"
            onClick={() => router.push('/admin/eventos/nuevo')}
          />
        </div>

        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Título</th>
              <th className="border px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(eventos).map(([id, evento]) => (
              <tr key={id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{evento.titulo}</td>
                <td className="border px-4 py-2 space-x-2">
                  <Button
                    text="Editar"
                    variant="accent"
                    size="sm"
                    onClick={() => router.push(`/admin/eventos/${id}`)}
                  />
                  <Button
                    text="Eliminar"
                    variant="secondary"
                    size="sm"
                    onClick={() => setEventoAEliminar(id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {eventoAEliminar && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-80 text-center space-y-4">
              <h3 className="text-lg font-semibold">¿Eliminar este evento?</h3>
              <p className="text-sm text-gray-600">Esta acción no se puede deshacer.</p>
              <div className="flex justify-center gap-4">
                <Button
                  text="Sí, eliminar"
                  variant="secondary"
                  onClick={confirmarEliminacion}
                />
                <Button
                  text="Cancelar"
                  variant="accent"
                  onClick={() => setEventoAEliminar(null)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
