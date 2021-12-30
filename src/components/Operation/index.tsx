import { Amount } from 'pages/Calculator'
import React from 'react'

interface Props {
  amount: Amount
}

const Operation = ({ amount }: Props) => {
  const regex = /[0-9]/g
  const textArr = [...amount.value]
  return (
    <div className="text-right text-white font-bold text-5xl">
      {textArr.map((char, index) =>
        new RegExp(regex).test(char) ? (
          char
        ) : (
          <span key={index} className="text-cyan-500 font-normal">
            {char}
          </span>
        )
      )}
      {amount.currency}
    </div>
  )
}

export default Operation
