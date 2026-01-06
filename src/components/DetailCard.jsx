import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const DetailCard = ({ type }) => {
  const { store } = useGlobalReducer();
  const [details, setDetails] = useState({});
  const [loadError, setLoadError] = useState(false);

  const currentItem =
    type === 'character' ? store.currentCharacter : type === 'planet' ? store.currentPlanet : store.currentStarship;

  const imageUrl = `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/${type}s/${currentItem.uid}.jpg?raw=true`
  const errorImg = 'https://cdn.dribbble.com/userupload/18895954/file/original-0fe06021838e39d4251955733c52ebab.png?resize=400x0'

  const getDetails = async () => {
    if (!currentItem?.url) return;
    const response = await fetch(currentItem.url);
    if (!response.ok) return;
    const data = await response.json();
    setDetails(data.result.properties);
  }

  useEffect(() => {
    getDetails();
  }, [currentItem]);


  const renderFields = () => {
    if (type === 'character') {
      return (
        <>
          <li className="list-group-item">Gender: {details.gender}</li>
          <li className="list-group-item">Height: {details.height}</li>
          <li className="list-group-item">Skin Color: {details.skin_color}</li>
          <li className="list-group-item">Eyes Color: {details.eye_color}</li>
          <li className='list-group-item'>Films: {details.films?.length}</li>
        </>
      );
    } else if (type === 'planet') {
      return (
        <>
          <li className="list-group-item">Climate: {details.climate}</li>
          <li className="list-group-item">Diameter: {details.diameter}</li>
          <li className="list-group-item">Terrain: {details.terrain}</li>
          <li className='list-group-item'>Population: {details.population}</li>
          <li className='list-group-item'>Gravity: {details.gravity}</li>          
        </>
      );
    } else if (type === 'starship') {
      return (
        <>
          <li className="list-group-item">Model: {details.model}</li>
          <li className="list-group-item">Manufacturer: {details.manufacturer}</li>
          <li className="list-group-item">Crew: {details.crew}</li>
          <li className='list-group-item'>Class: {details.starship_class}</li>
          <li className='list-group-item'>Films: {details.films?.length}</li>
        </>
      );
    }
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center text-warning universal-title" style={{ fontFamily: 'Orbitron, sans-serif' }}>
        {currentItem?.name}
      </h1>
      <div className='card border-dark text-bg-dark card-shadow d-flex flex-row p-3 mx-auto'
      style={{ maxWidth: '900px', fontFamily: 'Orbitron, sans-serif' }}>
        <img
          onError={() => setLoadError(true)}
          src={loadError ? errorImg : imageUrl}
          alt={currentItem?.name}
          className="me-3"
          style={{ width: '200px', height: '200px', objectFit: 'contain'}}
        />
        <ul className="list-group list-group-flush flex-grow-1">
          {renderFields()}          
        </ul>
      </div>
    </div>
  );
}