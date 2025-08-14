export function sortNoticias(noticias, categoria, order) {
  return [...noticias]
    .filter(n => 
      categoria === "Todas" || 
      n.categoria.toLowerCase() === categoria.toLowerCase()
    )
    .sort((a, b) => {
      switch (order) {
        case "Alfabéticamente":
        case "A-Z":
          return a.titulo.localeCompare(b.titulo)
        case "Antiguas primero":
          return a.fecha.localeCompare(b.fecha)
        case "Novedad":
        default:
          return b.fecha.localeCompare(a.fecha)
      }
    })
}
