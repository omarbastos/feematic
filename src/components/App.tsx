import Calculator from 'pages/Calculator'
import { useState } from 'react'

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onOfflineReady() {}
})

function App() {
  const [showUpdateSW, setShowUpdateSW] = useState<boolean>(true)
  const handleOk = () => {
    setShowUpdateSW(false)
    updateSW()
  }
  return (
    <div className="bg-[#DAF0FF] flex min-w-screen min-h-screen justify-center items-center">
      {showUpdateSW && (
        <div className="w-80 px-4 py-2 rounded-lg fixed bottom-0 right-0 flex justify-between items-center bg-gray-300 ">
          <span className="text-gray-900 text-sm">Ready to work offline</span>
          <button
            onClick={handleOk}
            className="bg-cyan-500 hover:bg-blue text-blue-dark hover:text-white px-4 border border-blue hover:border-transparent rounded"
          >
            OK
          </button>
        </div>
      )}
      <Calculator />
    </div>
  )
}

export default App
