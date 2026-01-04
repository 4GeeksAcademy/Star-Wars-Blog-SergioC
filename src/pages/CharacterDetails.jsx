import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"


export const CharacterDetails = () => {
  const { store } = useGlobalReducer();
  const [ personajeDetails, setPersonajeDetails ] = useState({})

  const getCharactersDetails = async () => {
    const response = await fetch(store.currentCharacter.url)
    if(!response.ok) {
      return
    }
    const data = await response.json()    
    setPersonajeDetails(data.result.properties)
  }

  useEffect(() => {
    getCharactersDetails()
  }, [])

  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Characters Details</h1>
      <p>{store.currentCharacter.name}</p>

      <ul className="list-group">
        <li className="list-group-item">Gender: {personajeDetails.gender}</li>
        <li className="list-group-item">Height: {personajeDetails.height}</li>
        <li className="list-group-item">Skin Color: {personajeDetails.skin_color}</li>
        <li className="list-group-item">Eyes Color: {personajeDetails.eye_color}</li>
        <li className='list-group-item'>Films: {personajeDetails.films?.length}</li>
      </ul>
    </div>
  )
}