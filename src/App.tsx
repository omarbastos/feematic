import Loader from 'components/base/Loader'
import Calculator from 'pages/Calculator'
import { useEffect, useState } from 'react'
import { getRates } from 'services/axios'

function App() {
  const [cop, setCop] = useState(3750)
  const [ves, setVes] = useState(4.63)
  const [loading, setLoading] = useState(false)

  const fetchRates = async () => {
    setLoading(true)

    try {
      const { cop, ves } = await getRates()
      setCop(+cop)
      setVes(+ves)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchRates()
  }, [])
  if (loading) return <Loader />
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#DAF0FF] min-w-screen">
      <Calculator cop={cop} ves={ves} />
    </div>
  )
}

export default App
