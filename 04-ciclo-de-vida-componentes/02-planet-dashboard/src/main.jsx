import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './App.css'
import { StatusProvider } from './context/StatusContext.jsx'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider>
      <StatusProvider>
        <App />
      </StatusProvider>
    </ConfigProvider>
  </StrictMode>
)
