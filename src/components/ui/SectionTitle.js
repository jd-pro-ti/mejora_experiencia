const SectionTitle = ({ text, color = "primary", margin = "mb-4" }) => {
    const colors = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      accent: "bg-accent",
    }
  
    return (
      <div>
        <h2 className={`text-3xl font-onest text-gray-800 ${margin}`}>{text}</h2>
        <div className={`w-50 h-[5px] ${colors[color] || "bg-primary"} mb-6`} />
      </div>
    )
  }
  
  export default SectionTitle
  