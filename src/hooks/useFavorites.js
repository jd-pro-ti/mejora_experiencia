import { useState } from 'react'

export function useFavorites() {
  const [favorites, setFavorites] = useState({})

  const toggleFavorite = (key) => {
    setFavorites(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const isFavorite = (key) => {
    return !!favorites[key]
  }

  return { favorites, toggleFavorite, isFavorite }
}
