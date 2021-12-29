import React from 'react'

interface Props {
  text: number
  currency: string
}

const Result = ({ text, currency }: Props) => {
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value)
  }
  return (
    <div className="my-2 text-right text-white font-bold text-5xl">
      {text ? `=${formatNumber(text)} ${currency}` : ''}
    </div>
  )
}

export default Result
