import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  className?: string
}

const Pad = ({ text, className, ...props }: Props) => {
  return (
    <div className={className}>
      <button
        {...props}
        className="rounded-2xl bg-gray-900 text-5xl  text-cyan-500 w-full h-full grid place-items-center"
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
