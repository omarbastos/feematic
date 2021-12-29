import Pad from 'components/base/Pad'
import Operation from 'components/Operation'
import Result from 'components/Result'
import React, { useState } from 'react'
import {
  COP_TO_USD,
  COP_TO_VEF,
  CURRENCIES,
  currencies,
  pads,
  USD_TO_COP,
  USD_TO_VEF,
  VEF_TO_COP,
  VEF_TO_USD
} from 'utils/constants'

interface Props {}

const Calculator = (props: Props) => {
  const [currentOperation, setCurrentOperation] = useState('')
  const [result, setResult] = useState(0)
  const [currency, setCurrency] = useState<CURRENCIES>('🇺🇸')
  const onPressPad = (value: string) => {
    if (value === '.') {
      return currentOperation.includes('.')
        ? null
        : setCurrentOperation(`${currentOperation}${value}`)
    }
    return setCurrentOperation(`${currentOperation}${value}`)
  }
  const handleResult = (text: string) => {
    switch (text) {
      case '🇺🇸':
        if (currency === '🇨🇴') {
          setResult(+currentOperation * COP_TO_USD)
        }
        if (currency === '🇻🇪') {
          setResult(+currentOperation * VEF_TO_USD)
        }
        setCurrency('🇺🇸')
        break
      case '🇨🇴':
        if (currency === '🇺🇸') {
          setResult(+currentOperation * USD_TO_COP)
        }
        if (currency === '🇻🇪') {
          setResult(+currentOperation * VEF_TO_COP)
        }
        setCurrency('🇨🇴')
        break
      case '🇻🇪':
        if (currency === '🇺🇸') {
          setResult(+currentOperation * USD_TO_VEF)
        }
        if (currency === '🇨🇴') {
          setResult(+currentOperation * COP_TO_VEF)
        }
        setCurrency('🇻🇪')
        break
      default:
        setResult(0)
        setCurrentOperation('')
    }
  }
  return (
    <div className="h-full w-full md:h-[80vh] md:w-96 md:rounded-3xl bg-[#303136] md:shadow-2xl md:shadow-cyan-500/50">
      <div className="p-8 flex flex-col justify-between w-full h-full">
        <div className="w-full h-1/3 flex flex-col items-end justify-center">
          <Operation text={currentOperation}></Operation>
          <Result currency={currency} text={result}></Result>
        </div>
        <div className="w-full h-2/3 grid grid-cols-4 gap-3">
          {pads.map(({ text, className, color }) => (
            <Pad
              className={className}
              onClick={() =>
                currencies.includes(text)
                  ? handleResult(text)
                  : onPressPad(text)
              }
              text={text}
              isActive={currency.includes(text)}
              color={color}
            ></Pad>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculator
