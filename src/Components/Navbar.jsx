import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ThemeContext } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {dispatch} = useContext(ThemeContext)

  const toggleTheme = () => {
    dispatch({type: "TOGGLE_THEME"});
  }
  return (
   
    
    <nav>
      <div>
        <img src="./DH.ico"></img>
        <h4>Odonto</h4>
      </div>
      
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
        <Link to="home">Home</Link>
        <Link to="favs">Favs</Link>
        <Link to="contact">Contact</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      </div>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar