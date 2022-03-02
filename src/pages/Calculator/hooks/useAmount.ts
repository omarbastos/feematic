import { useState } from 'react'
import {
  CURRENCIES_ARRAY,
  ActionsPad,
  currencies
} from 'utils/constants/constants'
import { Amount } from '..'

export const useAmount = () => {
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
    if (value === ActionsPad.CLEAR)
      return setAmount(({ currency }) => ({
        value: '',
        currency
      }))
    if (value === ActionsPad.C)
      return setAmount(({ currency }) => ({
        value: amount?.value?.slice(0, -1),
        currency
      }))

    if (value === ActionsPad.DECIMAL) {
      return amount?.value.includes(ActionsPad.DECIMAL)
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
  return { onPressPad, amount }
}
