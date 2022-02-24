import Calculator from 'pages/Calculator'
import { useEffect, useState } from 'react'
import { getRates } from 'services/axios'

function App() {
  const [cop, setCop] = useState(3750)

  const [ves, setVes] = useState(4.63)

  const fetchRates = async () => {
    const { cop, ves } = await getRates()
    setCop(+cop)
    setVes(+ves)
  }
  useEffect(() => {
    fetchRates()
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#DAF0FF] min-w-screen">
      <Calculator cop={cop} ves={ves} />
    </div>
  )
}

export default App
