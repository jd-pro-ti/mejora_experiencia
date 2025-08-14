const categoryColors = {
    TURISMO: "bg-accent",
    CULTURA: "bg-secondary",
    TRADICIONES: "bg-primary",
    DESTACADA: "bg-secondary",
    "ÚLTIMO MOMENTO": "bg-accent"
  }
  
  export const getCategoryColor = (category) => {
    return categoryColors[category.toUpperCase()] || "bg-secondary-accent"
  }
  