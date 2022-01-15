import Pad from 'components/base/Pad'
import Operation from 'components/Operation'
import Result from 'components/Result'
import React, { useState } from 'react'
import { currencies, CURRENCIES_ARRAY, pads } from 'utils/constants'
import { nanoid } from 'nanoid'

export interface Amount {
  value: string
  currency: string
}
interface CalculatorProps {
  USD_TO_COP: number
  USD_TO_VEF: number
  VEF_TO_COP: number
  VEF_TO_USD: number
  COP_TO_VEF: number
  COP_TO_USD: number
}

const Calculator = ({
  USD_TO_COP,
  USD_TO_VEF,
  VEF_TO_COP,
  VEF_TO_USD,
  COP_TO_VEF,
  COP_TO_USD
}: CalculatorProps) => {
  const [amount, setAmount] = useState<Amount>({
    value: '',
    currency: currencies.USD
  })

  const onPressPad = (value: string) => {
    if (CURRENCIES_ARRAY.includes(value))
      return setAmount({
        ...amount,
        currency: value
      })
    if (value === '❌')
      return setAmount({ value: '', currency: currencies.USD })
    if (value === '.') {
      return amount?.value.includes('.')
        ? null
        : setAmount({
            value: `${amount?.value}${value}`,
            currency: amount?.currency
          })
    }
    return setAmount({
      value: `${amount?.value}${value}`,
      currency: amount?.currency
    })
  }
  const resultProps = {
    USD_TO_COP,
    USD_TO_VEF,
    VEF_TO_COP,
    VEF_TO_USD,
    COP_TO_VEF,
    COP_TO_USD
  }
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="overflow-y-auto w-screen md:w-96 h-screen bg-[#303136] md:rounded-3xl md:shadow-2xl md:shadow-cyan-500/50">
      <div className="flex flex-col justify-between p-8 w-full h-auto">
        <div className="flex flex-col justify-center items-end w-full h-[40vh]">
          <Operation amount={amount}></Operation>
          <Result {...resultProps} amount={amount}></Result>
        </div>
        <div className="grid grid-cols-4 gap-3 pb-12 w-full h-[50vh]">
          {pads.map(({ text, className, color }) => (
            <Pad
              key={nanoid()}
              className={className}
              onClick={() => onPressPad(text)}
              text={text}
              color={color}
              isActive={amount.currency === text}
            ></Pad>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculator
