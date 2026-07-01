import React from 'react'

const GRADIENT = 'bg-[linear-gradient(180deg,#000000_0%,#393939_100%)] hover:shadow-2xl hover:text-red-500'

const VARIANTS = {
  primary: `${GRADIENT} py-4.75 px-12 text-xl text-white`,
  'primary-sm': `${GRADIENT} py-2 sm:py-3 px-5 sm:px-8 text-base text-white`,
  'primary-lg': `${GRADIENT} sm:py-7.5 py-5 px-15 sm:px-[84.5px] text-xl text-white`,
  'primary-wide': `${GRADIENT} py-4.75 px-14 text-xl text-white`,
}

const base = 'cursor-pointer border hover:scale-102 rounded-2xl duration-500 shadow-[0px_2px_10px_0px_#00000029] font-semibold border-black'

const Button = ({ children, variant = 'primary', className = '', type = 'button', ...props }) => {
  const variantClasses = VARIANTS[variant] || VARIANTS.primary
  const classes = `${variantClasses} ${base} ${className}`.trim()

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
