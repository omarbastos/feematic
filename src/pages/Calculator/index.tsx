import Loader from 'components/base/Loader'
import Pad from 'components/base/Pad'
import Operation from 'components/Operation'
import Result from 'components/Result'
import React, { useContext, useEffect, useState } from 'react'
import { getRates } from 'services/axios'
import { ActionsPad, currencies, CURRENCIES_ARRAY, pads } from 'utils/constants'
import { RatesContext } from 'utils/contexts/RatesContext'

export interface Amount {
  value: string
  currency: string
}

const Calculator = () => {
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
      return setAmount({ value: '', currency: currencies.USD })
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

  const [loading, setLoading] = useState(false)
  const { cop, ves, handleCop, handleVes } = useContext(RatesContext)
  const fetchRates = async () => {
    setLoading(true)

    try {
      const { cop: COP, ves: VES } = await getRates()
      handleCop!(+COP)
      handleVes!(+VES)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchRates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <Loader />

  return (
    <div className="overflow-y-auto w-screen md:w-96 h-screen md:h-[90vh] bg-[#303136] md:rounded-3xl md:shadow-2xl md:shadow-cyan-500/50">
      <div className="flex flex-col justify-between p-8 w-full h-auto">
        <div className="flex flex-col justify-center items-end w-full h-[40vh]">
          <Operation amount={amount}></Operation>
          <Result cop={cop!} ves={ves!} amount={amount}></Result>
        </div>
        <div className="grid grid-cols-4 gap-3 pb-12 w-full h-[50vh]">
          {pads.map(({ id, text, className, color }) => (
            <Pad
              key={id}
              data-testid={text}
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
