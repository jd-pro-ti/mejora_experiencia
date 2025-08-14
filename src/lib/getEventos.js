import { db } from './firebase'
import { ref, get } from 'firebase/database'

export const getEventosDeFirebase = async () => {
  const snapshot = await get(ref(db, 'eventos'))
  if (!snapshot.exists()) return []
  const data = snapshot.val()
  return Object.values(data)
}

export const getEventoPorSlug = async (slug) => {
  const snapshot = await get(ref(db, `eventos/${slug}`))
  return snapshot.exists() ? snapshot.val() : null
}
