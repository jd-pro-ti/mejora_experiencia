const InstagramIcon = ({ w = 32, h = 32, fill, stroke = "#000" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            viewBox="0 0 24 24"
            fill={fill || "none"}
            stroke={stroke}
        >
            <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke={stroke}
                strokeWidth="1.2"
            />
            <path
                d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                stroke={stroke}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.6361 7H17.6477"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default InstagramIcon
