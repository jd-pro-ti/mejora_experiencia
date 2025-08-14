'use client'

import { getDatabase, ref, set } from 'firebase/database'
import { app } from '@/lib/firebase'
import municipios from '@/data/municipios'
import { useEffect, useState } from 'react'

export default function UploadMunicipios() {
  const [status, setStatus] = useState('Esperando...')

  const subirDatos = async () => {
    try {
      const db = getDatabase(app)
      const municipiosRef = ref(db, 'municipios')
      await set(municipiosRef, municipios)
      setStatus('✅ Municipios subidos correctamente')
    } catch (error) {
      setStatus(`❌ Error: ${error.message}`)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-2xl font-bold mb-4">Subir Municipios a Firebase</h1>
      <button
        onClick={subirDatos}
        className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary/80 transition"
      >
        Subir Municipios
      </button>
      <p className="mt-6 text-sm text-gray-700">{status}</p>
    </div>
  )
}
