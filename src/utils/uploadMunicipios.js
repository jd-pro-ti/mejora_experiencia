import { getDatabase, ref, set } from 'firebase/database'
import { app } from '@/lib/firebase'
import municipios from '@/data/municipios'

const uploadMunicipios = async () => {
  const db = getDatabase(app)
  const municipiosRef = ref(db, 'municipios')

  try {
    await set(municipiosRef, municipios)
    console.log('Municipios subidos correctamente a Firebase')
  } catch (error) {
    console.error('Error al subir municipios:', error)
  }
}

uploadMunicipios()
