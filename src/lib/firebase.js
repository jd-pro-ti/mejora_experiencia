import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDB5Ne9lSTQ8fxCYx8CGZpvZfQj6l5LaLI",
  authDomain: "gomichoacan-7dd00.firebaseapp.com",
  databaseURL: "https://gomichoacan-7dd00-default-rtdb.firebaseio.com",
  projectId: "gomichoacan-7dd00",
  storageBucket: "gomichoacan-7dd00.firebasestorage.app",
  messagingSenderId: "160678579736",
  appId: "1:160678579736:web:671b5fd5e421cb8c13fd6d",
  measurementId: "G-Y28H1HREGP"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export { app, database as db }
