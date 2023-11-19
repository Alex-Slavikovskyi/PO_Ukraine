import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.jsx';
import i18n from './i18n.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
      </Suspense>
    </RouterProvider>
    
  </React.StrictMode>,
)
