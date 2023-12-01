

import image1 from '../assets/fast-food/blt.png';
import { useState, useEffect } from 'react';
import image2 from '../assets/fast-food/burrito.png';
import image3 from '../assets/fast-food/carbonara.png';
import image4 from '../assets/fast-food/cheeseburger.png';
import image5 from '../assets/fast-food/frytki.png';
import image6 from '../assets/fast-food/grillowanyser.png';
import image7 from '../assets/fast-food/hamburger.png';
import image8 from '../assets/fast-food/hotdog.png';
import image9 from '../assets/fast-food/kebab.png';
import image10 from '../assets/fast-food/koktajltruskawkowy.png';
import image11 from '../assets/fast-food/krazki-cebulowe.png';
import image12 from '../assets/fast-food/krewetka.png';
import image13 from '../assets/fast-food/lody-waniliowe.png';
import image14 from '../assets/fast-food/nachos.png';
import image15 from '../assets/fast-food/pepperoni.png';
import image16 from '../assets/fast-food/rolkacynamonotwa.png';
import image17 from '../assets/fast-food/sushi.png';
import image18 from '../assets/fast-food/szynkaser.png';
import image19 from '../assets/fast-food/nuggets.png'
import food from '../data/food.json'
import { Link } from 'react-router-dom';

import FoodComponent from '../components/FoodComponent';
const imageFiles = [
  { image: image15 },
  { image: image7 },
  { image: image4 },
  { image: image5 },
  { image: image8 },
  { image: image19 },
  { image: image11 },
  { image: image6 },
  { image: image16 },
  { image: image2 },
  { image: image13 },
  { image: image10 },
  { image: image18 },
  { image: image12 },
  { image: image3 },
  { image: image9 },
  { image: image17 },
  { image: image14 },
  { image: image1 },
];

export default function SelectFastFoodScreen() {
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    const imageLoaders = imageFiles.map((image) => {
      const img = new Image();
      img.src = image.image;
      return new Promise((resolve) => {
        img.onload = () => {
          resolve(null);
        };
      });
    });

    Promise.all(imageLoaders).then(() => {
      setLoadingImages(false);
    });
  }, []);

  return (
    <>
      {loadingImages ? ( 
        <div className="loading-screen">
          <h2>Trwa ładowanie obrazów...</h2>
        </div>
      ) : (
        <>
          <h1>Wybierz fast-food:</h1>
          <Link to="/ingredient" onClick={() => ({})}>
            <div className="food-holder">
              {imageFiles.map((image, index) => (
                <FoodComponent
                  key={index}
                  source={image.image}
                  name={food[index].nazwa}
                  kcal={food[index].kcal}
                  path={'/ingredient'}
                  type='FastFood'
                />
              ))}
            </div>
          </Link>
        </>
      )}
    </>
  );
}
