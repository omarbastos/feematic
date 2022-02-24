import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | React.ReactNode
  className?: string
  isActive: boolean
}

const Pad = ({ text, className, isActive, ...props }: Props) => {
  return (
    <div className={className}>
      <button
        {...props}
        className={`rounded-2xl  text-4xl bg-gray-900 text-cyan-500 w-full h-full grid place-items-center ${
          isActive ? 'shadow-2xl shadow-cyan-500/50' : ''
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
