import Pad from 'components/base/Pad'
import Operation from 'components/Operation'
import Result from 'components/Result'
import React, { useState } from 'react'

interface Props {}

const Calculator = (props: Props) => {
  const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1']
  const operations = ['+', '-', '*', '/']
  const [currentOperation, setCurrentOperation] = useState('')
  const onPressPad = (value: string) => {
    if (value === '.') {
      return currentOperation.includes('.')
        ? null
        : setCurrentOperation(`${currentOperation}${value}`)
    }
    return setCurrentOperation(`${currentOperation}${value}`)
  }
  return (
    <div className="h-full w-full md:h-[80vh] md:w-96 md:rounded-3xl bg-[#303136] md:shadow-2xl md:shadow-cyan-500/50">
      <div className="p-8 flex flex-col justify-between w-full h-full">
        <div className="w-full h-1/3 flex flex-col items-end justify-center">
          <Operation text={currentOperation}></Operation>
          <Result text={12.454}></Result>
        </div>
        <div className="w-full h-2/3">
          <div className="w-3/4 grid aspect-square grid-cols-3 gap-3">
            {numbers.map((number) => (
              <Pad onClick={() => onPressPad(number)} text={number}></Pad>
            ))}
          </div>
          <div className="w-3/4 my-4 grid grid-flow-row-dense gap-3 grid-cols-3 grid-rows-3">
            <Pad
              onClick={() => onPressPad('0')}
              className="col-span-2 h-20"
              text="0"
            ></Pad>
            <Pad onClick={() => onPressPad('.')} text="."></Pad>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
