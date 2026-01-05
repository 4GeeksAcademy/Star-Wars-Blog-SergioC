import { useEffect, useState } from "react";
import { Card } from "../components/Card.jsx";

export const Planets = () => {
  const swapiHost = 'https://www.swapi.tech/api';
  const [ planets, setPlanets ] = useState([]);

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
    getPlanets();
  }, []);

  return (
    <div className="container mt-3 mb-5 pb-5">
      <h1 className='text-center'>Planets</h1>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2'>
        {planets.map((item) =>
          <Card key={item.uid} imageType='planets' item={item} />
        )}
      </div>
    </div>
  );
}