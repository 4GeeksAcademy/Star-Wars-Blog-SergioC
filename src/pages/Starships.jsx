import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Starships = () => {
  const swapiHost = 'https://www.swapi.tech/api'
  const navigate = useNavigate();
  const { dispatch } = useGlobalReducer();
  const [ starships, setStarShips ] = useState([]);

  const handleDetails = (nave) => {
    dispatch({
      type: 'starships_details',
      payload: nave
    })

    navigate('/starships-details')
  }

  const getStarShips = async () => {
    const naves = JSON.parse(localStorage.getItem('starships'))
    if (!naves) {
      const uri = `${swapiHost}/starships`;
      const response = await fetch(uri)
      if (!response.ok) return;

      const data = await response.json()
      localStorage.setItem('starships', JSON.stringify(data.results))
      naves = data.results
    }
    setStarShips(naves)
  };

  useEffect(() => {
    dispatch({
      type: 'starships_details',
      payload: {}
    })
    getStarShips();
  }, []);

  return (
    <div className="container mt-3 mb-5 pb-5">
      <h1 className='text-center'>Starships</h1>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2'>
        {starships.map((item) =>
          <div className='col' key={item.uid}>
            <div className='card border-dark rounded my-3 mx-2 text-bg-dark'>
              <img alt='' src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/starships/${item.uid}.jpg?raw=true`} />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <div className='d-flex justify-content-between'>
                  <span className='btn btn-secondary' onClick={() => handleDetails(item)}>Details</span>
                  <Link className='btn btn-outline-warning' to='/starships'>
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