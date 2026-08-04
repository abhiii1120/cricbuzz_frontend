import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.jsx'
import AppRoutes from './app/routes/AppRoutes'
import SocketProvider from './context/socket.context'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SocketProvider>
    <AppRoutes />
    </SocketProvider>
  </Provider>,
)
