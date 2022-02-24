import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'
import App from 'App'
import { registerSW } from 'virtual:pwa-register'
registerSW({ immediate: true })

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
