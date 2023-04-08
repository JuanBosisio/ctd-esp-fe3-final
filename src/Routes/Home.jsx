import React, { useContext } from 'react'
import Card from '../Components/Card'
import {useEffect} from 'react';
import {ContextGlobal} from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const data = useContext(ContextGlobal)
  
  useEffect(() => {
    console.log(data)
  },[])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data.map(res => (
            <Card
              key={res.id}
              name={res.name}
              username={res.username}
              id={res.id}
            />
        ))
        }
      </div>
    </main>
  )
}

export default Home