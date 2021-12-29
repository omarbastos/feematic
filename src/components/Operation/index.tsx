import React from 'react'

interface Props {
  text: string
}

const Operation = ({ text }: Props) => {
  const regex = /[0-9]/g
  const textArr = [...text]
  return (
    <div className="text-right text-gray-300 font-light text-3xl">
      {textArr.map((char, index) =>
        new RegExp(regex).test(char) ? (
          char
        ) : (
          <span key={index} className="text-cyan-500 font-normal">
            {char}
          </span>
        )
      )}
    </div>
  )
}

export default Operation
