import { useEffect, useState } from "react"
import { Card } from "../components/Card.jsx";

export const Starships = () => {
  const swapiHost = 'https://www.swapi.tech/api'  
  const [ starships, setStarShips ] = useState([]);

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
    getStarShips();
  }, []);

  return (
    <div className="container mt-3 mb-5 pb-5">
      <h1 className='text-center'>Starships</h1>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2'>
        {starships.map((item) =>
          <Card key={item.uid} imageType='starships' item={item} />
        )}
      </div>
    </div>
  );
}