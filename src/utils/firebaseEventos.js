'use client'

import { db } from '@/lib/firebase'
import { ref, get, set, update, remove } from 'firebase/database'

// Crear evento con slug como ID
export const crearEvento = async (data) => {
  const { slug, ...rest } = data
  if (!slug) throw new Error('Falta el campo slug')
  await set(ref(db, `eventos/${slug}`), { slug, ...rest })
}

// Obtener todos los eventos
export const obtenerEventos = async () => {
  const snapshot = await get(ref(db, 'eventos'))
  return snapshot.exists() ? snapshot.val() : {}
}

// Actualizar evento usando slug como ID
export const actualizarEvento = async (slug, data) => {
  await update(ref(db, `eventos/${slug}`), data)
}

// Eliminar evento usando slug
export const eliminarEvento = async (slug) => {
  await remove(ref(db, `eventos/${slug}`))
}
