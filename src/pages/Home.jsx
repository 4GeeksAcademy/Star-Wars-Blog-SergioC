import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const peopleMock = [
  { id: 1, name: 'Luke Skywalker', gender: 'male', hair_color: 'blond', eye_color: 'blue' },
  { id: 2, name: 'Obiwan Kenobi', gender: 'male', hair_color: 'brown', eye_color: 'blue' },
];

const planetsMock = [
  { id: 1, name: 'Tatooine', climate: 'arid', population: '200000' },
  { id: 2, name: 'Alderaan', climate: 'temperate', population: '2000000000000' },
];

const vehiclesMock = [
  { id: 1, name: 'X-wing', model: 'T-65', manufacturer: 'Icom Corporation' },
  { id: 2, name: 'TIE Fighter', model: 'Twin Ion Engine', manufacturer: 'Sienar Fleet Systems' },
];

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'set_people', payload: peopleMock });
    dispatch({ type: 'set_planets', payload: planetsMock });
    dispatch({ type: 'set_vehicles', payload: vehiclesMock });
  }, []);

  // Función para agregar o quitar de favoritos
  const toggleFavorite = (item) => {
    const isFavorite = store.favorites?.some(fav => fav.id === item.id);
    if (isFavorite) {
      dispatch({ type: 'remove_favorite', payload: { id: item.id } });
    } else {
      dispatch({ type: 'add_favorite', payload: item });
    }
  };

  // Función para renderizar las cards
  const renderCard = (item, type) => (
    <div key={item.id} className='card me-3'>
      <img
        src={`https://via.placeholder.com/286x180?text=${item.name}`}
        className="card-img-top"
        alt={item.name}
      />
      <div className='card-body'>
        <h5 className='card-title'>{item.name}</h5>
        <p className='card-text'>
          {type === 'people' && (
            <>
              Gender: {item.gender} <br />
              Hair: {item.hair_color} <br />
              Eyes: {item.eye_color}
            </>
          )}
          {type === 'planets' && (
            <>
              Climate: {item.climate} <br />
              Poplutaion: {item.population}
            </>
          )}
          {type === 'vehicles' && (
            <>
              Model: {item.model} <br />
              Manufacturer: {item.manufacturer}
            </>
          )}
        </p>
        <div className='d-flex'>
          <button className='btn btn-primary me-5' onClick={() => navigate(`/single/${item.id}`)}>
            Learn More!
          </button>
          <button className='btn btn-warning' onClick={() => toggleFavorite(item)}>
            <i className="fa-regular fa-heart"></i>
          </button>
          
        </div>
      </div>
    </div>
  );


  return (
    <div className='container mt-4 mb-5 pb-5'>

      {/* Character */}
      <h2 className='text-danger mb-3'>Characters</h2>
      <div className='d-flex overflow-auto mb-4'>
        {store.people.map(person => renderCard(person, 'people'))}
      </div>

      {/* Planets */}
      <h2 className='text-danger mb-3'>Planets</h2>
      <div className='d-flex overflow-auto mb-4'>
        {store.planets.map(planet => renderCard(planet, 'planets'))}
      </div>

      {/* Vehicles */}
      <h2 className='text-danger mb-3'>Vehicles</h2>
      <div className='d-flex overflow-auto mb-5'>
        {store.vehicles.map(vehicle => renderCard(vehicle, 'vehicles'))}
      </div>
    </div>
  );
}; 