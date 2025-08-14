export function sortAlojamientos(alojamientos, order) {
  return [...alojamientos].sort((a, b) => {
    switch (order) {
      case "Mejor valorado":
        return b.rating - a.rating
      case "Precio (de menor a mayor)":
        return a.price - b.price
      case "Precio (de mayor a menor)":
        return b.price - a.price
      case "Novedad":
        return 0
      case "Popularidad":
      default:
        return 0
    }
  })
}
