import { createContext, useContext, useState } from "react"

const HealthyFoodContext = createContext(undefined)

export function useHealthyFoodContext() {
  const context = useContext(HealthyFoodContext)
  if (!context) {
    throw new Error(
      "useHealthyFoodContext must be used within a HealthyFoodProvider"
    )
  }
  return context
}

export function HealthyFoodProvider({ children }) {
  const [selectedHealthyFood, setSelectedHealthyFood] = useState({
    name: "",
    kcal: 0,
    source: ""
  })

  const value = { selectedHealthyFood, setSelectedHealthyFood }

  return (
    <HealthyFoodContext.Provider value={value}>
      {children}
    </HealthyFoodContext.Provider>
  )
}
