import { Link } from 'react-router-dom';
import './App.css';
import { motion } from "framer-motion";

function App() {

  return (
    <>
        <h1>Projekt na fizykę</h1>
        <div>Krystian Niemczyk</div>
        <Link to={'/fastfood'}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{marginTop: 20}}>
              Dalej
          </motion.button>
        </Link>
    </>
  )
}

export default App
