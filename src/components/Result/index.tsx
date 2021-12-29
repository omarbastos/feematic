import React from 'react'

interface Props {
  text: number
}

const Result = ({ text }: Props) => {
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value)
  }
  return (
    <div className="my-2 text-right text-white font-bold text-5xl">
      ={formatNumber(text)}
    </div>
  )
}

export default Result
