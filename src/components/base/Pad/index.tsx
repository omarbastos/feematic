import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  className?: string
  isActive: boolean
}

const Pad = ({ text, className, isActive, ...props }: Props) => {
  return (
    <div className={className}>
      <button
        {...props}
        className={`rounded-2xl bg-gray-900 text-4xl text-cyan-500 w-full h-full grid place-items-center ${
          isActive ? 'bg-cyan-500 text-white' : ''
        }`}
      >
        {text}
      </button>
    </div>
  )
}
Pad.defaultProps = {
  className: ''
}
export default Pad
