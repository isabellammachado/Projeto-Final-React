import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routers } from './routes'
import { FavoritesProvider } from './hooks/FavoritesContext'
import './global.css'
import { AuthProvider } from './hooks/useAuth'

// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <FavoritesProvider>
      <Routers />
    </FavoritesProvider>
  </AuthProvider>

)
