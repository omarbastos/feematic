import Calculator from 'pages/Calculator'
import { useEffect, useState } from 'react'

function App() {
  const [USD_TO_COP, SET_USD_TO_COP] = useState(3750)

  const [USD_TO_VEF, SET_USD_TO_VEF] = useState(4.63)

  const COP_TO_USD = 1 / USD_TO_COP
  const COP_TO_VEF = COP_TO_USD * USD_TO_VEF
  const VEF_TO_USD = 1 / USD_TO_VEF
  const VEF_TO_COP = VEF_TO_USD * USD_TO_COP
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow' as const
    }

    fetch(
      'https://openexchangerates.org/api/latest.json?app_id=5fe7bbbc6f2f4500a692a133235cdd88',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const { COP, VES } = result.rates
        SET_USD_TO_COP(COP)
        SET_USD_TO_VEF(VES)
      })
      .catch((error) => console.log('error', error))
  }, [])
  const propsCalculator = {
    USD_TO_COP,
    USD_TO_VEF,
    VEF_TO_COP,
    VEF_TO_USD,
    COP_TO_VEF,
    COP_TO_USD
  }
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="flex justify-center items-center min-h-screen bg-[#DAF0FF] min-w-screen">
      <Calculator {...propsCalculator} />
    </div>
  )
}

export default App
