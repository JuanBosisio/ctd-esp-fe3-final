import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const [vector,setVector] = useState([]);

  const params = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const getData = async () => {
    const data = await
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const convert = await data.json();
    setVector(convert)
  }

    useEffect(() => {
      getData();
    });

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <div className='detail-grid'>
        <div><h4>Nombre:</h4><p>{vector.name}</p></div>
        <div><h4>Email:</h4><p>{vector.email}</p></div>
        <div><h4>Telefono:</h4><p>{vector.phone}</p></div>
        <div><h4>Website:</h4><p>{vector.website}</p></div>

      </div>
      
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail