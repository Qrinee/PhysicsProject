import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SelectIngredientScreen from './views/SelectIngredientScreen.jsx'
import SelectFastFoodScreen from './views/SelectFastFoodScreen.jsx'
import Results from './views/Results.jsx'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { FastFoodProvider } from './context/FastFoodContext.jsx'
import { HealthyFoodProvider } from './context/HealthyFoodContext.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/ingredient',
    element: <SelectIngredientScreen />
  },
  {
    path: '/fastfood',
    element: <SelectFastFoodScreen />
  },
  {
    path: '/result',
    element: <Results />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HealthyFoodProvider>
    <FastFoodProvider>
      <RouterProvider router={router}></RouterProvider>
    </FastFoodProvider>
    </HealthyFoodProvider>
  </React.StrictMode>,
)
