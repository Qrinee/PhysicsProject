import { useEffect, useState } from "react"
import { useFastFoodContext } from "../context/FastFoodContext"
import { useHealthyFoodContext } from "../context/HealthyFoodContext"
import { Link } from "react-router-dom"

export default function Results() {
  const { selectedHealthyFood } = useHealthyFoodContext()
  const { selectedFastFood } = useFastFoodContext()
  const [numberOfIngredients, setNumberOfIngredients] = useState(0)
  const [jsx, setJsx] = useState([])

  useEffect(() => {
    setNumberOfIngredients(
      Math.round(selectedFastFood.kcal / selectedHealthyFood.kcal)
    )

    const jsxArray = []

    for (let index = 0; index < numberOfIngredients; index++)
      jsxArray.push(
        <img
          key={index}
          src={selectedHealthyFood.source}
          className="ingredient-image"
          width={200}
          alt={`Ingredient ${index + 1}`}
        />
      )

    setJsx(jsxArray)
  }, [numberOfIngredients, selectedFastFood, selectedHealthyFood])

  return (
    <div>
      <h1>
        1 {selectedFastFood.name} ({selectedFastFood.kcal} kcal) = {" "}
        {numberOfIngredients} {selectedHealthyFood.name}
      </h1>
      <div className="flex">
        <div>
          <img src={selectedFastFood.source} width={200} alt={`Ingredient`} />
        </div>
        <div>
          <h2 style={{ fontSize: 100 }}>=</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          {jsx}
        </div>
      </div>
      <Link to={"/"}>Powrót</Link>
    </div>
  )
}
