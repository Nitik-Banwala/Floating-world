import React from 'react'

const Button = ({ children, className = '', type = 'button', ...props }) => {
  const baseClasses = 'bg-[linear-gradient(180deg,#000000_0%,#393939_100%)] hover:shadow-2xl hover:text-red-500 cursor-pointer border rounded-2xl py-4.75 text-xl duration-500 shadow-[0px_2px_10px_0px_#00000029] font-semibold text-white border-black'

  return (
    <button  type={type} className={`${baseClasses} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}

export default Button
