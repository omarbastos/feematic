import Calculator from 'pages/Calculator'
import { RatesProvider } from 'utils/contexts/RatesContext'

function App() {
  return (
    <RatesProvider>
      <div className="flex relative justify-center items-center min-h-screen bg-[#DAF0FF] min-w-screen">
        <Calculator />
      </div>
    </RatesProvider>
  )
}

export default App
