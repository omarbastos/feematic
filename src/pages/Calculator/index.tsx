import Pad from 'components/base/Pad'
import Operation from 'components/Operation'
import Result from 'components/Result'
import React, { useState } from 'react'
import { currencies, CURRENCIES_ARRAY, pads } from 'utils/constants'

export interface Amount {
  value: string
  currency: string
}

const Calculator = () => {
  const [amount, setAmount] = useState<Amount>({
    value: '',
    currency: currencies.USD
  })
  const [result, setResult] = useState(0)
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

  return (
    <div className="h-screen w-screen overflow-y-auto md:w-96 md:rounded-3xl bg-[#303136] md:shadow-2xl md:shadow-cyan-500/50">
      <div className="p-8 flex flex-col justify-between w-full h-auto">
        <div className="w-full h-[40vh] flex flex-col items-end justify-center">
          <Operation amount={amount}></Operation>
          <Result amount={amount}></Result>
        </div>
        <div className="w-full pb-12 h-[50vh] grid grid-cols-4 gap-3">
          {pads.map(({ text, className, color }) => (
            <Pad
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
