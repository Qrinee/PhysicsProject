import { createContext, useContext, useState } from "react"

const FastFoodContext = createContext(undefined)

export function useFastFoodContext() {
  const context = useContext(FastFoodContext)
  if (!context) {
    throw new Error("useFastFoodContext must be used within a FastFoodProvider")
  }
  return context
}

export function FastFoodProvider({ children }) {
  const [selectedFastFood, setSelectedFastFood] = useState({
    name: "",
    kcal: 0,
    source: ""
  })

  const value = { selectedFastFood, setSelectedFastFood }

  return (
    <FastFoodContext.Provider value={value}>
      {children}
    </FastFoodContext.Provider>
  )
}