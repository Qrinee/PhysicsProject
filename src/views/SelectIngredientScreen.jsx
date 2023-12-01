import image1 from "../assets/ingredients/apple.png"
import image2 from "../assets/ingredients/banana.png"
import image3 from "../assets/ingredients/brokuł.png"
import image4 from "../assets/ingredients/carrot.png"
import image5 from "../assets/ingredients/cytryna.png"
import image6 from "../assets/ingredients/kapusta.png"
import image7 from "../assets/ingredients/ogorek.png"
import image8 from "../assets/ingredients/papryka.png"
import image9 from "../assets/ingredients/tomatoe.png"
import image10 from "../assets/ingredients/truskawka.png"
import FoodComponent from "../components/FoodComponent"
import ingredients from "../data/ingredients.json"
import { useEffect, useState } from "react"
const imageFiles = [
  { image: image1 }, // Jabłko
  { image: image2 }, // Banan
  { image: image4 }, // Marchewka
  { image: image5 }, // Cytryna
  { image: image6 }, // Kapusta
  { image: image7 }, // Ogórek
  { image: image8 }, // Papryka
  { image: image9 }, // Pomidor
  { image: image3 }, // Brokuł
  { image: image10 } // Truskawka
]

export default function SelectIngredientScreen() {
  const [loadingImages, setLoadingImages] = useState(true)

  useEffect(() => {
    const imageLoaders = imageFiles.map(image => {
      const img = new Image()
      img.src = image.image
      return new Promise(resolve => {
        img.onload = () => {
          resolve(null)
        }
      })
    })

    Promise.all(imageLoaders).then(() => {
      setLoadingImages(false)
    })
  }, [])
  return (
    <div>
      {loadingImages ? (
        <div className="loading-screen">
          <h2>Trwa ładowanie obrazów...</h2>
        </div>
      ) : (
        <>
          <h1>Wybierz Składnik:</h1>
          <div className="food-holder">
            {imageFiles.map((e, index) => (
              <FoodComponent
                key={index}
                source={e.image}
                name={ingredients[index].nazwa}
                kcal={ingredients[index].kcal}
                path="/result"
                type="Vegetable"
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
