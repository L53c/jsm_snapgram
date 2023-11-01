import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { QueryProvider } from './lib/react-query/QueryProvider'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryProvider>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </QueryProvider>
)
