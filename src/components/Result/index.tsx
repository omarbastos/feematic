import { Amount } from 'pages/Calculator'
import React from 'react'
import { formatMoney } from 'utils'
import {
  COP_TO_USD,
  COP_TO_VEF,
  currencies,
  USD_TO_COP,
  USD_TO_VEF,
  VEF_TO_COP,
  VEF_TO_USD
} from 'utils/constants'

interface Props {
  amount: Amount
}

const Result = ({ amount }: Props) => {
  const getExchangedAmount = (value: number, currency: string) => {
    switch (currency) {
      case '🇺🇸':
        return [
          `${formatMoney(value * USD_TO_COP)} ${currencies.COP}`,
          `${formatMoney(value * USD_TO_VEF)} ${currencies.VEF}`
        ]
      case '🇨🇴':
        return [
          `${formatMoney(value * COP_TO_USD)} ${currencies.USD}`,
          `${formatMoney(value * COP_TO_VEF)} ${currencies.VEF}`
        ]
      case '🇻🇪':
        return [
          `${formatMoney(value * VEF_TO_COP)} ${currencies.COP}`,
          `${formatMoney(value * VEF_TO_USD)} ${currencies.USD}`
        ]
      default:
        return [
          `${formatMoney(value * USD_TO_COP)} ${currencies.COP}`,
          `${formatMoney(value * USD_TO_VEF)} ${currencies.VEF}`
        ]
    }
  }
  return (
    <div className="my-2 text-right text-gray-300 font-light text-3xl flex flex-col">
      {getExchangedAmount(+amount.value, amount.currency).map(
        (exchangedAmount, index) => (
          <span key={index}>{exchangedAmount}</span>
        )
      )}
    </div>
  )
}

export default Result
