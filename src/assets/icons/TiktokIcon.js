const TiktokIcon = ({ w = 32, h = 32, fill, stroke = "#000" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={ w }
            height={ h }
            viewBox="0 0 24 24"
            fill={ fill || "none"}
            stroke={ stroke }
            >
            <path /><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
        </svg>
    )
}

export default TiktokIcon