import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const StarshipsDetails = () => {
  const { store } = useGlobalReducer();
  const [ starshipsDetails, setStarshipsDetails ] = useState({});

  const getStarShipsDetails = async () => {
    const response = await fetch(store.currentStarship.url)
    if (!response.ok) { return };

    const data = await response.json()
    setStarshipsDetails(data.result.properties)
  }

  useEffect(() => {
    getStarShipsDetails()
  }, [])

  return (
    <div className="container mt-3">
      <h1 className="text-center">Starships Details</h1>
      <p>{store.currentStarship.name}</p>

      <ul className='list-group'>
        <li className='list-group-item'>Cargo capacity: {starshipsDetails.cargo_capacity}</li>
        <li className='list-group-item'>Passangers capacity: {starshipsDetails.passengers}</li>
        <li className='list-group-item'>Length: {starshipsDetails.length}</li>
        <li className='list-group-item'>Manufacturer: {starshipsDetails.manufacturer}</li>
        <li className='list-group-item'>Films: {starshipsDetails.films?.length}</li>
      </ul>
    </div>
  );
}