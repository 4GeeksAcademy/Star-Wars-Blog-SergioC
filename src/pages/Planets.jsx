import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate } from "react-router-dom";


export const Planets = () => {
  const swapiHost = 'https://www.swapi.tech/api';
  const navigate = useNavigate();
  const { dispatch } = useGlobalReducer();
  const [ planets, setPlanets ] = useState([]);

  const handleDetails = (planeta) => {
    dispatch({
      type: 'planets_details',
      payload: planeta
    })

    navigate('/planets-details')
  }

  const getPlanets = async () => {
    const planetas = JSON.parse(localStorage.getItem('planets'))
    if (!planetas) {
      const uri = `${swapiHost}/planets`;
      const response = await fetch(uri)
      if (!response.ok) return;

      const data = await response.json()
      localStorage.setItem('planets', JSON.stringify(data.results))
      planetas = data.results
    }
    setPlanets(planetas)
  };

  useEffect(() => {
    dispatch({
      type: 'planets_details',
      payload: {}
    })
    getPlanets()
  }, []);


  return (
    <div className="container mt-3 mb-5 pb-5">
      <h1 className='text-center'>Planets</h1>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2'>
        {planets.map((item) =>
          <div className='col' key={item.uid}>
            <div className='card border-dark rounded my-3 mx-2 text-bg-dark'>
              <img alt='' src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/${item.uid}.jpg?raw=true`} />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <div className='d-flex justify-content-between'>
                  <span className='btn btn-secondary' onClick={() => handleDetails(item)}>Details</span>
                  <Link className='btn btn-outline-warning' to='/planets'>
                    <i className='far fa-heart fa-lg'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}