import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useFastFoodContext } from "../context/FastFoodContext"
import { useHealthyFoodContext } from "../context/HealthyFoodContext"

const FoodComponent = ({ source, name, kcal, path, type }) => {
  const { setSelectedFastFood } = useFastFoodContext()
  const { setSelectedHealthyFood } = useHealthyFoodContext()
  return (
    <Link
      to={path}
      style={{ color: "white" }}
      onClick={() => {
        type == "FastFood"
          ? setSelectedFastFood({ name: name, kcal: kcal, source: source })
          : setSelectedHealthyFood({ name: name, kcal: kcal, source: source })
      }}
    >
      <motion.div
        className="block"
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 10
        }}
      >
        <img src={source} alt="Fast Food" width={200} />
        <h2 className="title">{name}</h2>
        <p>{kcal + "kcal"}</p>
      </motion.div>
    </Link>
  )
}

export default FoodComponent
