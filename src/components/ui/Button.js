'use client'

import Link from 'next/link'

const variantClasses = {
  accent: 'bg-accent hover:bg-accent/90',
  primary: 'bg-primary hover:bg-primary/90',
  secondary: 'bg-secondary hover:bg-secondary/90'
}

const sizeClasses = {
  sm: 'px-4 py-1.5 rounded-md shadow text-sm',
  md: 'px-6 py-2 rounded-lg text-sm font-onest',
  lg: 'px-8 py-3 md:py-4 md:px-6 rounded-full text-base font-onest'
}

const Button = ({ href, text, variant = 'accent', size = 'md', full = false, center = false, onClick }) => {
  const classes = `inline-block text-white transition duration-300 cursor-pointer
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${full ? 'w-full' : 'w-auto'}
    ${center ? 'mx-auto text-center' : ''}
  `

  if (href) {
    return (
      <Link href={href} className={classes}>
        {text}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {text}
    </button>
  )
}

export default Button
