import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"


export const PlanetsDetails = () => {
  const { store } = useGlobalReducer();
  const [ planetsDetails, setPlanetasDetails ] = useState({})

  const getPlanetsDetails = async () => {
    const reponse = await fetch(store.currentPlanet.url)
    if (!reponse.ok) return;

    const data = await reponse.json()
    setPlanetasDetails(data.result.properties)
  }

  useEffect(() => {
    getPlanetsDetails()
  }, [])

  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Planets Details</h1>
      <p>{store.currentPlanet.name}</p>

      <ul className='list-group'>
        <li className='list-group-item'>Climate: {planetsDetails.climate}</li>
        <li className='list-group-item'>Diameter: {planetsDetails.diameter}</li>
        <li className='list-group-item'>Terrain: {planetsDetails.terrain}</li>

      </ul>
    </div>
  );
}