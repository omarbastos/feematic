import { Amount } from 'pages/Calculator'
import { useContext } from 'react'
import { formatMoney } from 'utils'
import { COP_DEFAULT, currencies, VES_DEFAULT } from 'utils/constants/constants'
import { RatesContext } from 'utils/contexts/RatesContext'

interface Props {
  amount: Amount
}

const Result = ({ amount }: Props) => {
  const { cop, ves } = useContext(RatesContext)
  const getExchangedAmount = (value: number, currency: string) => {
    if (!cop || !ves)
      return [
        `${formatMoney(value * COP_DEFAULT)} ${currencies.COP}`,
        `${formatMoney(value / (COP_DEFAULT / VES_DEFAULT))} ${currencies.VES}`
      ]
    switch (currency) {
      case currencies.USD:
        return [
          `${formatMoney(value * cop)} ${currencies.COP}`,
          `${formatMoney(value * ves)} ${currencies.VES}`
        ]
      case currencies.COP:
        return [
          `${formatMoney(value / cop)} ${currencies.USD}`,
          `${formatMoney(value / (cop / ves))} ${currencies.VES}`
        ]
      case currencies.VES:
        return [
          `${formatMoney(value * (cop / ves))} ${currencies.COP}`,
          `${formatMoney(value / ves)} ${currencies.USD}`
        ]
      default:
        return [
          `${formatMoney(value * cop)} ${currencies.COP}`,
          `${formatMoney(value * ves)} ${currencies.VES}`
        ]
    }
  }
  return (
    <div className="flex flex-col my-2 text-3xl font-light text-right text-gray-300">
      {getExchangedAmount(+amount.value, amount.currency).map(
        (exchangedAmount, index) => (
          <span key={index}>{exchangedAmount}</span>
        )
      )}
    </div>
  )
}

export default Result
