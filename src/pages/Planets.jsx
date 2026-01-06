import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Card } from "../components/Card.jsx";

export const Planets = () => {
  const swapiHost = 'https://www.swapi.tech/api';
  const [planets, setPlanets] = useState([]);

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

  useEffect(() => {
    Swal.fire({
      title: "Discover our Planets 🌍🪐",
      text: "Explore the Star Wars planets",
      confirmButtonText: "¡Vamos!",
      background: "rgba(0, 0, 0, 0.35)",
      color: "#fff",
      confirmButtonColor: "#f5c518",
      customClass: {
        title: "swal2-title",
        content: "swal2-content",
        confirmButton: "swal2-confirm"
      }
    });
  }, []);

  return (
    <div className='section-wrapper bg-planets'>
      <div className="section-content container">
        <h1 className='text-center text-warning universal-title'>Planets</h1>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2'>
          {planets.map((item) =>
            <Card key={item.uid} imageType='planets' item={item} />
          )}
        </div>
      </div>
    </div>
  );
}