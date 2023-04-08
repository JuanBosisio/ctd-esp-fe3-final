import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const user = {
      name: name,
      username: username,
      id: id
    }
    if(localStorage.length == 0){
      const array = [user]
      localStorage.setItem("array",JSON.stringify(array));
    } else {
      const localData = localStorage.getItem("array")
      const array = localData ? JSON.parse(localData) : [];
      let dato = false
      for(var i=0;i<array.length;i++){
        if(array[i].id == id)
          dato = true;
      }
      if (dato == false)
        array.push(user);
      localStorage.clear();
      localStorage.setItem("array",JSON.stringify(array));
    }
    
    
  
  }

  


  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link className="card-link" key={id} to={`../detail/${id}`}>
          <img src="./images/doctor.jpg"></img>
          <h3>{name}</h3>
          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
          <p>{username}</p>
          <h4>{id}</h4>
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
