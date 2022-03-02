import React from 'react'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
}

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <div className="relative py-4">
      <label htmlFor="email" className="text-sm font-semibold text-gray-200">
        {label}
      </label>
      <input
        {...rest}
        className="p-4 w-full h-10 placeholder-transparent text-gray-900 bg-gray-100 rounded-xl border border-gray-300 focus:border-cyan-600 focus:outline-none"
      />
    </div>
  )
}
export default Input
